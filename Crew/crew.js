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
  /****************************** */
  //Element par défaut de la page
  const img = document.createElement('img');
  document.querySelector('section.img-box').appendChild(img);
  img.src = data.crew[0].images.png;
  document.querySelector('section.detail-box > h4').innerHTML =
    data.crew[0].role;
  document.querySelector('section.detail-box > h2').innerHTML =
    data.crew[0].name;
  document.querySelector('p.text-crew').innerHTML = data.crew[0].bio;

  function commanderFunction() {
    document.querySelector('section.detail-box > h4').innerHTML =
      data.crew[0].role;
    document.querySelector('section.detail-box > h2').innerHTML =
      data.crew[0].name;
    document.querySelector('p.text-crew').innerHTML = data.crew[0].bio;
    img.src = data.crew[0].images.png;
  }

  /***--- */
  function missionFunction() {
    document.querySelector('section.detail-box > h4').innerHTML =
      data.crew[1].role;
    document.querySelector('section.detail-box > h2').innerHTML =
      data.crew[1].name;
    document.querySelector('p.text-crew').innerHTML = data.crew[1].bio;
    img.src = data.crew[1].images.png;
  }

  /**---- */
  function pilotFunction() {
    document.querySelector('section.detail-box > h4').innerHTML =
      data.crew[2].role;
    document.querySelector('section.detail-box > h2').innerHTML =
      data.crew[2].name;
    document.querySelector('p.text-crew').innerHTML = data.crew[2].bio;
    img.src = data.crew[2].images.png;
  }

  /**----- */
  function flightFunction() {
    document.querySelector('section.detail-box > h4').innerHTML =
      data.crew[3].role;
    document.querySelector('section.detail-box > h2').innerHTML =
      data.crew[3].name;
    document.querySelector('p.text-crew').innerHTML = data.crew[3].bio;
    img.src = data.crew[3].images.png;
  }
  /**-------------------------- */
  let currentRadio = 1;
  function changeRadio() {
    switch (currentRadio) {
      case 1:
        commander.checked = true;
        mission.checked = false;
        pilot.checked = false;
        flight.checked = false;
        currentRadio = 2;
        break;
      case 2:
        commander.checked = false;
        mission.checked = true;
        pilot.checked = false;
        flight.checked = false;
        currentRadio = 3;
        break;
      case 3:
        commander.checked = false;
        mission.checked = false;
        pilot.checked = true;
        flight.checked = false;
        currentRadio = 4;
        break;
      case 4:
        commander.checked = false;
        mission.checked = false;
        pilot.checked = false;
        flight.checked = true;
        currentRadio = 1;
        break;
    }

    // Déclencher les événements "change" manuellement à chaque fois que la fonction est appelée
    if (commander.checked) {
      commander.dispatchEvent(new Event('change'));
    } else if (mission.checked) {
      mission.dispatchEvent(new Event('change'));
    } else if (pilot.checked) {
      pilot.dispatchEvent(new Event('change'));
    } else if (flight.checked) {
      flight.dispatchEvent(new Event('change'));
    }
  }

  setInterval(changeRadio, 20000);
  /* ----------------  -------------------- */
  commander.addEventListener('change', commanderFunction);
  mission.addEventListener('change', missionFunction);
  pilot.addEventListener('change', pilotFunction);
  flight.addEventListener('change', flightFunction);
}
getData();
