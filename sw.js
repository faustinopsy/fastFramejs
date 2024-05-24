const CACHE_NAME = 'app-cache-v12';
const STATIC_ASSETS = [
    './index.html',

];

addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]; 
  event.waitUntil(async function() {
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable();
    }
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); 
          }
        })
      );
    })
    
  }());
});

const recursos = [
];
self.addEventListener('install', event => {
  event.waitUntil(
      caches.open(CACHE_NAME).then(async cache => {
          try {
              await cache.addAll(STATIC_ASSETS);
              const fetchPromises = recursos.map(url => fetch(url));
              const responses = await Promise.allSettled(fetchPromises);

              const falhaurl = [];

              for (let i = 0; i < responses.length; i++) {
                  const response = responses[i];
                  if (response.status === 'fulfilled' && response.value.ok) {
                      await cache.put(recursos[i], response.value);
                  } else {
                      falhaurl.push(recursos[i]);
                  }
              }

              if (falhaurl.length > 0) {
                  console.error('Erro durante o cache.addAll: ', falhaurl);
              }
                } catch (error) {
                    console.error("Erro durante o cache.addAll: ", error);
                    throw error;
                }
      })
  );
});
  


self.addEventListener('fetch', event => {
  event.respondWith(async function() {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    const response = await event.preloadResponse;
    if (response) return response;
    
    return fetch(event.request).then(networkResponse => {
        if (networkResponse.ok) {
            return caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
            });
        }
        return caches.match('offline.html'); 
    }).catch(() => {
        return caches.match('offline.html'); 
    });
  }());
});    
    

// self.addEventListener('fetch', function(event) {
//   if (event.request.url.includes('/novidades')) {
//     event.respondWith(
//       fetch('api/atualizacao.php')
//         .then(function(response) {
//           return response.json();
//         })
//         .then(function(data) {
//           const ultimaModificacao = data.ultimaModificacao;
//           clients.matchAll().then(clients => {
//             clients.forEach(client => {
//               client.postMessage({ultimaModificacao: ultimaModificacao});
//             });
//           });
//           return caches.match(event.request);
//         })
//     );
//   }
// });


// self.addEventListener('message', event => {
//   if (event.data.action === 'checkForUpdates') {
//     fetch('./assets/json/atualizacoes.json')
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         const ultimaModificacao = data.ultimaModificacao;
//         clients.matchAll().then(clients => {
//           clients.forEach(client => {
//             client.postMessage({
//               type: 'UPDATE_AVAILABLE',
//               ultimaModificacao: ultimaModificacao
//             });
//           });
//         });
//       })
//       .catch(function(error) {
//         console.error('Erro ao buscar atualizações:', error);
//       });
//   }
// });


self.addEventListener('message', event => {
  if (event.data.action === 'notifyAllClients') {
      self.clients.matchAll().then(clients => {
          clients.forEach(client => {
              client.postMessage({
                  action: 'showNotification',
                  message: 'Notificação personalizada ativada!'
              });
          });
      });
  }
});

self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon
  });
});

  