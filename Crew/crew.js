// Récupération des pièces depuis le fichier JSON
async function getData() {
  const reponse = await fetch('../data.json');
  const data = await reponse.json();
  console.log(data);
  const commander = document.getElementById('commander');
  const mission = document.getElementById('mission');
  const pilot = document.getElementById('pilot');
  const flight = document.getElementById('flight');
  /**------------------------------------- */
  const rolePerson = document.querySelector('section.detail-box > h4');
  const namePerson = document.querySelector('section.detail-box > h2');
  const textCrew = document.querySelector('p.text-crew');
  const imagePerson = document.querySelector('section.img-box img');

  function commanderFunction() {
    rolePerson.innerHTML = data.crew[0].role;
    namePerson.innerHTML = data.crew[0].name;
    textCrew.innerHTML = data.crew[0].bio;
    imagePerson.src = data.crew[0].images.png;
  }

  /***--- */
  function missionFunction() {
    rolePerson.innerHTML = data.crew[1].role;
    namePerson.innerHTML = data.crew[1].name;
    textCrew.innerHTML = data.crew[1].bio;
    imagePerson.src = data.crew[1].images.png;
  }

  /**---- */
  function pilotFunction() {
    rolePerson.innerHTML = data.crew[2].role;
    namePerson.innerHTML = data.crew[2].name;
    textCrew.innerHTML = data.crew[2].bio;
    imagePerson.src = data.crew[2].images.png;
  }

  /**----- */
  function flightFunction() {
    rolePerson.innerHTML = data.crew[3].role;
    namePerson.innerHTML = data.crew[3].name;
    textCrew.innerHTML = data.crew[3].bio;
    imagePerson.src = data.crew[3].images.png;
  }
  /**-------------------------- */
  commander.addEventListener('change', commanderFunction);
  mission.addEventListener('change', missionFunction);
  pilot.addEventListener('change', pilotFunction);
  flight.addEventListener('change', flightFunction);
}
getData();
