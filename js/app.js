const container = document.querySelector(".container");
const Tipos = [
  {
    name: "Dispositivos",
    image: "images/dispositivos.png"
  },
  {
    name: "Navegadores",
    image: "images/navegadores.png"
  },
  {
    name: "Sistemas Operacionais",
    image: "images/so.png"
  },

];
const showTipos = () => {
  let output = "";
  Tipos.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showTipos);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

document.addEventListener('DOMContentLoaded', function () {
    // Verifique se o usuário está em um dispositivo móvel
    if (isMobileDevice()) {
        // Se for um dispositivo móvel, exiba o h2
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.style.display = 'block';
    } else {
        // Caso contrário, oculte o h2
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.style.display = 'none';
    }

    // Função para verificar se o dispositivo é móvel
    function isMobileDevice() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        console.log('É um dispositivo móvel?', isMobile);
        return isMobile;
    }
    
});

