class RegistraSW {
  constructor() {
      this.deferredPrompt = null;
      this.setupButton = null;
      this.permission = false;
      this.lido = false;
  }

  initialize() {
      this.registerService();
      this.pushPermission();
      this.criabotoes();
  }

  async pushPermission() {
      const permissionResult = await Notification.requestPermission();
      if (permissionResult !== 'granted') {
          console.warn('Permissão de notificação não concedida.');
          return;
      }
      //await this.subscribeUserToPush();
  }
 
  criabotoes() {
      const btn = document.createElement('button');
      btn.textContent = "notifique";
      btn.className = "w3-button";
      btn.id = "btnnotifica";
      
      const notificationBtn = document.createElement('button');
      notificationBtn.textContent = "Autorizar notificações";
      notificationBtn.className = "w3-button";
      notificationBtn.id = "notificationBtn";

      btn.addEventListener('click', () => this.notificarCliente());
      notificationBtn.addEventListener('click', () => this.permitirNotificacao());

      document.body.appendChild(notificationBtn);
      document.body.appendChild(btn);
  }
  
  async registerService() {
      if ("serviceWorker" in navigator) {
          try {
              const registration = await navigator.serviceWorker.register("/sw.js", {
                  scope: "/",
              });
              if (registration.installing) {
                  console.log("Service worker instalando");
              } else if (registration.waiting) {
                  console.log("Service worker instalado");
              } else if (registration.active) {
                  console.log("Service worker ativo");
              }
          } catch (error) {
              console.error(`Falhou em registrar em ${error}`);
          }
      }
  }
  
  // async subscribeUserToPush() {
  //     const registration = await navigator.serviceWorker.ready;
  //     try {
  //         const subscription = await registration.pushManager.subscribe({
  //             userVisibleOnly: true,
  //             applicationServerKey: this.urlBase64ToUint8Array('123456asdfqwer')
  //         });
  //         console.log('Push subscription:', subscription);

          
  //         await fetch('/register', {
  //             method: 'POST',
  //             body: JSON.stringify(subscription),
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             }
  //         });
  //     } catch (error) {
  //         console.error('Erro ao se inscrever no push', error);
  //     }
  // }
  
  urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
  }

  async notificarCliente() {
      const title = prompt("Qual o Título?");
      const img = './img/notifica.webp';
      const text = prompt("Qual a mensagem?");
  
      if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
      } else {
          this.permission = Notification.permission;
          if (this.permission === "granted") {
              this.mostrarNotificacao(title, text, img);
          } else if (this.permission !== "denied") {
              this.permission = await Notification.requestPermission();
              console.log(this.permission);
              if (this.permission === "granted") {
                  console.log(this.permission);
                  this.mostrarNotificacao(title, text, img);
              }
          }
      }
  }
  
  mostrarNotificacao(title, text, img) {
      const options = { body: text, icon: img };
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(registration => {
              registration.showNotification(title, options);
          });
      }
  }
  
  permitirNotificacao() {
      if (!Reflect.has(window, 'Notification')) {
          console.log('This browser does not support notifications.');
      } else {
          if (this.checkNotificationPromise()) {
              Notification.requestPermission().then(this.pedirPermissaoNotificar);
          } else {
              Notification.requestPermission(this.pedirPermissaoNotificar);
          }
      }
  }
  
  checkNotificationPromise() {
      try {
          Notification.requestPermission().then();
      } catch(e) {
          return false;
      }
      return true;
  }
  
  pedirPermissaoNotificar(permission) {
      const notificationBtn = document.getElementById('notificationBtn');
      if (!Reflect.has(Notification, 'permission')) {
          Notification.permission = permission;
      }
      if (Notification.permission === 'denied' || Notification.permission === 'default') {
          notificationBtn.style.display = 'block';
      } else {
          notificationBtn.style.display = 'none';
      }
  }
}

const pwaInstaller = new RegistraSW();
window.addEventListener('load', () => {
  pwaInstaller.initialize();
});
