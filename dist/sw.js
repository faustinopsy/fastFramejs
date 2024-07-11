const CACHE_NAME = 'app-cache-v13';
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
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        await cache.addAll(STATIC_ASSETS);
        
        // cada fetch será armazenado
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
    })()
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // if (url.pathname === '/json/home.json' ||
  //     url.pathname === '/json/sobre.json' ||
  //     url.pathname === '/json/contato.json') {
  //   return;
  // }

  event.respondWith(
    (async function() {
      //cache 1º
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;
      //preload 2º
      const preloadResponse = await event.preloadResponse;
      if (preloadResponse) return preloadResponse;

      try {  //rede 3º
        const networkResponse = await fetch(event.request);
        if (networkResponse && networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        }

        return caches.match('offline.html');
      } catch (error) {
        return caches.match('index.html');
      }
    })()
  );
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

  