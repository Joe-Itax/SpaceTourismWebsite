const imgBox = document.querySelector('.img-box');
const img = document.createElement('img');
img.alt = 'image of the planet';
imgBox.appendChild(img);
//Les boutons radio
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const europa = document.getElementById('europa');
const titan = document.getElementById('titan');
//Code JS pour la page Destination
async function getData() {
  const reponse = await fetch('../data.json');
  const data = await reponse.json();

  //Elements par défaut de la page
  document.getElementById('principalTitle').innerHTML =
    data.destinations[0].name;
  document.querySelector('div.text-destination p').innerHTML =
    data.destinations[0].description;
  document.querySelector('div.distance h4').innerHTML =
    data.destinations[0].distance;
  document.querySelector('div.temps h4').innerHTML =
    data.destinations[0].travel;
  img.src = data.destinations[0].images.webp;
  function moonFunction() {
    document.getElementById('principalTitle').innerHTML =
      data.destinations[0].name;
    document.querySelector('div.text-destination p').innerHTML =
      data.destinations[0].description;
    document.querySelector('div.distance h4').innerHTML =
      data.destinations[0].distance;
    document.querySelector('div.temps h4').innerHTML =
      data.destinations[0].travel;
    img.src = data.destinations[0].images.webp;
  }

  function marsFunction() {
    document.getElementById('principalTitle').innerHTML =
      data.destinations[1].name;
    document.querySelector('div.text-destination p').innerHTML =
      data.destinations[1].description;
    document.querySelector('div.distance h4').innerHTML =
      data.destinations[1].distance;
    document.querySelector('div.temps h4').innerHTML =
      data.destinations[1].travel;
    img.src = data.destinations[1].images.webp;
  }

  function europaFunction() {
    document.getElementById('principalTitle').innerHTML =
      data.destinations[2].name;
    document.querySelector('div.text-destination p').innerHTML =
      data.destinations[2].description;
    document.querySelector('div.distance h4').innerHTML =
      data.destinations[2].distance;
    document.querySelector('div.temps h4').innerHTML =
      data.destinations[2].travel;
    img.src = data.destinations[2].images.webp;
  }

  function titanFunction() {
    document.getElementById('principalTitle').innerHTML =
      data.destinations[3].name;
    document.querySelector('div.text-destination p').innerHTML =
      data.destinations[3].description;
    document.querySelector('div.distance h4').innerHTML =
      data.destinations[3].distance;
    document.querySelector('div.temps h4').innerHTML =
      data.destinations[3].travel;
    img.src = data.destinations[3].images.webp;
  }

  let currentRadio = 1;
  function changeRadio() {
    switch (currentRadio) {
      case 1:
        moon.checked = true;
        mars.checked = false;
        europa.checked = false;
        titan.checked = false;
        currentRadio = 2;
        break;
      case 2:
        moon.checked = false;
        mars.checked = true;
        europa.checked = false;
        titan.checked = false;
        currentRadio = 3;
        break;
      case 3:
        moon.checked = false;
        mars.checked = false;
        europa.checked = true;
        titan.checked = false;
        currentRadio = 4;
        break;
      case 4:
        moon.checked = false;
        mars.checked = false;
        europa.checked = false;
        titan.checked = true;
        currentRadio = 1;
        break;
    }

    // Déclencher les événements "change" manuellement à chaque fois que la fonction est appelée
    if (moon.checked) {
      moon.dispatchEvent(new Event('change'));
    } else if (mars.checked) {
      mars.dispatchEvent(new Event('change'));
    } else if (europa.checked) {
      europa.dispatchEvent(new Event('change'));
    } else if (titan.checked) {
      titan.dispatchEvent(new Event('change'));
    }
  }

  setInterval(changeRadio, 3000);
  moon.addEventListener('change', moonFunction);
  mars.addEventListener('change', marsFunction);
  europa.addEventListener('change', europaFunction);
  titan.addEventListener('change', titanFunction);
}

getData();
