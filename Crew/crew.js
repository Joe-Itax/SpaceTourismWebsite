/** --------------------------------------------------- */
//Code JS pour la page Crew
const crew = () => {
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
    textCrew.innerHTML = `Douglas Gerald Hurley is an American engineer, former Marine Corps
    pilot and former NASA astronaut. He launched into space for the third
    time as commander of Crew Dragon Demo-2.`;
    imagePerson.src = '../assets/crew/image-douglas-hurley.png';
  }

  function missionFunction() {
    titlePerson.innerHTML = 'Mission Specialist';
    namePerson.innerHTML = 'Mark Shuttleworth';
    textCrew.innerHTML = `Douglas Gerald Hurley is an American engineer, former Marine Corps
  pilot and former NASA astronaut. He launched into space for the third
  time as commander of Crew Dragon Demo-2.`;
    imagePerson.src = '../assets/crew/image-mark-shuttleworth.png';
  }

  function pilotFunction() {
    titlePerson.innerHTML = 'Pilot';
    namePerson.innerHTML = 'Victor Glover';
    textCrew.innerHTML = `Douglas Gerald Hurley is an American engineer, former Marine Corps
pilot and former NASA astronaut. He launched into space for the third
time as commander of Crew Dragon Demo-2.`;
    imagePerson.src = '../assets/crew/image-victor-glover.png';
  }

  function flightFunction() {
    titlePerson.innerHTML = 'Flight Engineer';
    namePerson.innerHTML = 'Anousheh Ansari';
    textCrew.innerHTML = `Douglas Gerald Hurley is an American engineer, former Marine Corps
pilot and former NASA astronaut. He launched into space for the third
time as commander of Crew Dragon Demo-2.`;
    imagePerson.src = '../assets/crew/image-anousheh-ansari.png';
  }
  /**-------------------------- */
  commander.addEventListener('change', commanderFunction);
  mission.addEventListener('change', missionFunction);
  pilot.addEventListener('change', pilotFunction);
  flight.addEventListener('change', flightFunction);
};

crew();
