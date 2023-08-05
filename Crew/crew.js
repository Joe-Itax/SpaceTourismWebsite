/** --------------------------------------------------- */
//Code JS pour la page Crew
const crew = () => {
  /** ******************************* */

  const images = [
    '../assets/crew/image-douglas-hurley.png',
    '../assets/crew/image-mark-shuttleworth.png',
    '../assets/crew/image-victor-glover.png',
    '../assets/crew/image-anousheh-ansari.png'
  ];

  // Précharger les images en arrière-plan
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
  /** ************************** */

  const commander = document.getElementById('commander');
  const mission = document.getElementById('mission');
  const pilot = document.getElementById('pilot');
  const flight = document.getElementById('flight');
  /**------------------------------------- */
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
    textCrew.innerHTML = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `;
    imagePerson.src = '../assets/crew/image-victor-glover.png';
  }

  function flightFunction() {
    titlePerson.innerHTML = 'Flight Engineer';
    namePerson.innerHTML = 'Anousheh Ansari';
    textCrew.innerHTML = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `;
    imagePerson.src = '../assets/crew/image-anousheh-ansari.png';
  }
  /**-------------------------- */
  commander.addEventListener('change', commanderFunction);
  mission.addEventListener('change', missionFunction);
  pilot.addEventListener('change', pilotFunction);
  flight.addEventListener('change', flightFunction);
};

crew();






