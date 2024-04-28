export default class WeatherWidget {
    constructor() {
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        this.modal = this.createModal();
    }

    createModal() {
        const modal = document.querySelector('#btn-007');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
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


