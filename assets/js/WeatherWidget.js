
import * as tipo from "./componentes/TiposElementos.js";
import * as fabricar from "./componentes/Fabrica.js";
export default class WeatherWidget {
    constructor() {
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        this.fabricaWidget()
        this.modal = this.createModal();
    }
    fabricaWidget(){
        const widget = {
            tipo: tipo.BUTTON,
            id: 'btn007',
            textContent: '',
            placeholder: '',
            title : 'chat',
            'aria-label': 'chat',
            style:{
              position:   'fixed',
              top:   '30px',
              right: '30px',
              width: '230px',
              height: '130px',
              background: 'rgba(0, 0, 0, 0.5)',
              'z-index': '99999',
              'background-image': 'url()',
              'background-size': 'cover',
              'background-repeat': 'no-repeat',
              color: 'white',
              border: 'white',
              'border-radius': '0px 20px 0 20px',
              'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.5)',
              cursor: 'pointer',
            },
            eventos: {
              click: function(){
                alert('clicado')
              }
            }
          };
          return fabricar.criarBotao(widget)
    }
    createModal() {
        const modal = this.fabricaWidget()
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" style="position:relative;left:100px;width:40px heigth:40px">&times;</span>
                <p id="weather-info"></p>
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        return modal;
    }

    getLocationAndWeather() {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=75001f11037ddf2d94a9c85b0a7ab311`;
                fetch(api)
                    .then((res) => res.json())
                    .then((data) => {
                        const name = data.name;
                        const { humidity,temp } = data.main;
                        const { speed } = data.wind;
                        
                        const info = `Local: ${name}<br>Aproximadamente: ${pos.coords.accuracy.toFixed(2)} Metros<br>Temperatura: ${temp}°C<br>Humidade do ar: ${humidity} % <br>Velocidade do Vento: ${speed} m/s`;
                        document.getElementById('weather-info').innerHTML = info;
                        this.modal.style.display = 'block';
                    });
            },
            (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            },
            this.options
        );
    }
}


