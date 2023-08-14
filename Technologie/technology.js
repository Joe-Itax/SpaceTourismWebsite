//Code JS pour la page Technology
const imgBox = document.querySelector('section.img-box');
const width = window.innerWidth; //Vérificateur de la taille de l'écran
const technology = () => {
  //Les boutons radio
  const vehicle = document.getElementById('vehicle');
  const spaceport = document.getElementById('spaceport');
  const capsule = document.getElementById('capsule');
  //La boite contenat l'image

  function vehicleFunction() {
    document.querySelector('section.detail-box > h2').innerHTML =
      'Launch Vehicle';
    document.querySelector(
      'p.text-technology'
    ).innerHTML = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and
              come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing
              sites.`;
    if (width <= 768) {
      imgBox.style.background =
        "url('../assets/technology/image-launch-vehicle-landscape.jpg')";
    } else {
      imgBox.style.background =
        "url('../assets/technology/image-launch-vehicle-portrait.jpg')";
    }
  }

  function spaceportFunction() {
    document.querySelector('section.detail-box > h2').innerHTML = 'Spaceport';
    document.querySelector(
      'p.text-technology'
    ).innerHTML = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;

    if (width <= 768) {
      imgBox.style.background =
        "url('../assets/technology/image-spaceport-landscape.jpg')";
    } else {
      imgBox.style.background =
        "url('../assets/technology/image-spaceport-portrait.jpg')";
    }
  }

  function capsuleFunction() {
    document.querySelector('section.detail-box > h2').innerHTML =
      'Space capsule';
    document.querySelector(
      'p.text-technology'
    ).innerHTML = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;

    if (width <= 768) {
      imgBox.style.background =
        "url('../assets/technology/image-space-capsule-landscape.jpg')";
    } else {
      imgBox.style.background =
        "url('../assets/technology/image-space-capsule-portrait.jpg')";
    }
  }

  vehicle.addEventListener('change', vehicleFunction);
  vehicle.addEventListener('load', vehicleFunction);
  vehicle.addEventListener('resize', vehicleFunction);
  /* ----------------------------------  ---------------------------------- */
  spaceport.addEventListener('change', spaceportFunction);
  spaceport.addEventListener('load', spaceportFunction);
  spaceport.addEventListener('resize', spaceportFunction);
  /* ----------------------------------  ---------------------------------- */
  capsule.addEventListener('change', capsuleFunction);
  capsule.addEventListener('load', capsuleFunction);
  capsule.addEventListener('resize', capsuleFunction);
};

technology();
/*
function updateImages() {
  if (width < 580) {
    document.querySelector('section.img-box').style.background =
      "url('../assets/technology/mobile-image.jpg')";
    // document.querySelector(
    // "img[src*='image-launch-vehicle-portrait.jpg']"
    // ).src = '../assets/technology/mobile-image-launch-vehicle-portrait.jpg';
    // document.querySelector("img[src*='image-spaceport-portrait.jpg']").src =
    //   '../assets/technology/mobile-image-spaceport-portrait.jpg';
    // document.querySelector("img[src*='image-space-capsule-portrait.jpg']").src =
    // '../assets/technology/mobile-image-space-capsule-portrait.jpg';
  } else {
    document.querySelector('section.img-box').style.background =
      "url('../assets/technology/desktop-image.jpg')";
    document.querySelector(
      "img[src*='image-launch-vehicle-portrait.jpg']"
    ).src = '../assets/technology/image-launch-vehicle-portrait.jpg';
    document.querySelector("img[src*='image-spaceport-portrait.jpg']").src =
      '../assets/technology/image-spaceport-portrait.jpg';
    document.querySelector("img[src*='image-space-capsule-portrait.jpg']").src =
      '../assets/technology/image-space-capsule-portrait.jpg';
  }
}

// Appeler la fonction updateImages lorsque la page est chargée et lorsque la taille de l'écran change
window.addEventListener('load', updateImages);
window.addEventListener('resize', updateImages);
*/

/*function updateImages(imgBox) {
    if (width < 768) {
      imgBox.style.background =
        "url('../assets/technology/image-launch-vehicle-landscape.jpg')";
    }
  }*/
// Appeler la fonction updateImages lorsque la page est chargée et lorsque la taille de l'écran change
/*window.addEventListener('load', updateImages);
  window.addEventListener('resize', updateImages);*/

/*
//Code JS pour la page Crew
const crew = () => {
  const commander = document.getElementById('commander');
  const mission = document.getElementById('mission');
  const pilot = document.getElementById('pilot');
  const flight = document.getElementById('flight');
  /**------------------------------------- */
/*
  const titlePerson = document.querySelector('section.detail-box > h4');
  const namePerson = document.querySelector('section.detail-box > h2');
  const textCrew = document.querySelector('p.text-crew');
  const imagePerson = document.querySelector('section.img-box img');

  function commanderFunction() {
    titlePerson.innerHTML = 'Commander';
    namePerson.innerHTML = 'Douglas Hurley';
    textCrew.innerHTML = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third
    time as commander of Crew Dragon Demo-2.`;
    imagePerson.src = '../assets/crew/image-douglas-hurley.png';
  }

  function missionFunction() {
    titlePerson.innerHTML = 'Mission Specialist';
    namePerson.innerHTML = 'Mark Shuttleworth';
    textCrew.innerHTML = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`;
    imagePerson.src = '../assets/crew/image-mark-shuttleworth.png';
  }

  function pilotFunction() {
    titlePerson.innerHTML = 'Pilot';
    namePerson.innerHTML = 'Victor Glover';
    textCrew.innerHTML = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.` ;
    imagePerson.src = '../assets/crew/image-victor-glover.png';
  }

  function flightFunction() {
    titlePerson.innerHTML = 'Flight Engineer';
    namePerson.innerHTML = 'Anousheh Ansari';
    textCrew.innerHTML = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `;
    imagePerson.src = '../assets/crew/image-anousheh-ansari.png';
  }
  /**-------------------------- */
/*
  commander.addEventListener('change', commanderFunction);
  mission.addEventListener('change', missionFunction);
  pilot.addEventListener('change', pilotFunction);
  flight.addEventListener('change', flightFunction);
};

crew();*/
