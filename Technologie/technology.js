//Code JS pour la page Technology
const imgBox = document.querySelector('section.img-box');
const width = window.innerWidth; //Vérificateur de la taille de l'écran
const img = document.createElement('img');
imgBox.appendChild(img);

//Les boutons radio
const vehicle = document.getElementById('vehicle');
const spaceport = document.getElementById('spaceport');
const capsule = document.getElementById('capsule');

async function getData() {
  const response = await fetch('../data.json');
  const data = await response.json();
  //   console.log(data);
  ////////////////////////////////////////
  imgBox.appendChild(img);
  img.src = data.technology[0].images.portrait;
  img.alt = 'Image technology';
  document.querySelector('section.detail-box > h2').innerHTML =
    data.technology[0].name;
  document.querySelector('p.text-technology').innerHTML =
    data.technology[0].description;

  if (width <= 768) {
    img.src = data.technology[0].images.landscape;
  } else {
    img.src = data.technology[0].images.portrait;
  }

  function vehicleFunction() {
    document.querySelector('section.detail-box > h2').innerHTML =
      data.technology[0].name;
    document.querySelector('p.text-technology').innerHTML =
      data.technology[0].description;
    if (width <= 768) {
      img.src = data.technology[0].images.landscape;
    } else {
      img.src = data.technology[0].images.portrait;
    }
  }

  function spaceportFunction() {
    document.querySelector('section.detail-box > h2').innerHTML =
      data.technology[1].name;
    document.querySelector('p.text-technology').innerHTML =
      data.technology[1].description;
    if (width <= 768) {
      img.src = data.technology[1].images.landscape;
    } else {
      img.src = data.technology[1].images.portrait;
    }
  }

  function capsuleFunction() {
    document.querySelector('section.detail-box > h2').innerHTML =
      data.technology[2].name;
    document.querySelector('p.text-technology').innerHTML =
      data.technology[2].description;
    if (width <= 768) {
      img.src = data.technology[2].images.landscape;
    } else {
      img.src = data.technology[2].images.portrait;
    }
  }

  vehicle.addEventListener('change', vehicleFunction);
  vehicle.addEventListener('resize', vehicleFunction);
  /* ----------------------------------  ---------------------------------- */
  spaceport.addEventListener('change', spaceportFunction);
  spaceport.addEventListener('resize', spaceportFunction);
  /* ----------------------------------  ---------------------------------- */
  capsule.addEventListener('change', capsuleFunction);
  capsule.addEventListener('resize', capsuleFunction);
}
getData();
