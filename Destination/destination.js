//Code JS pour la page Destination
const destination = () => {
  const principalTitle = document.getElementById('principalTitle');
  const textDestination = document.querySelector('div.text-destination p');
  const distanceKmh4 = document.querySelector('div.distance h4');
  const tempsKmh4 = document.querySelector('div.temps h4');
  const imagePlanet = document.querySelector('section.img-box img');

  const moon = document.getElementById('moon');
  const mars = document.getElementById('mars');
  const europa = document.getElementById('europa');
  const titan = document.getElementById('titan');

  function moonFunction() {
    principalTitle.innerHTML = 'Moon';
    textDestination.innerHTML = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and
            come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing
            sites.`;
    distanceKmh4.innerHTML = '384,400 km';
    tempsKmh4.innerHTML = '3 days';
    imagePlanet.src = '../assets/destination/image-moon.png';
  }

  function marsFunction() {
    principalTitle.innerHTML = 'Mars';
    textDestination.innerHTML = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`;
    distanceKmh4.innerHTML = '225 MIL. km';
    tempsKmh4.innerHTML = '9 Months';
    imagePlanet.src = '../assets/destination/image-mars.png';
  }

  function europaFunction() {
    principalTitle.innerHTML = 'Europa';
    textDestination.innerHTML = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;
    distanceKmh4.innerHTML = '628 Mil. km';
    tempsKmh4.innerHTML = '3 Years';
    imagePlanet.src = '../assets/destination/image-europa.png';
  }

  function titanFunction() {
    principalTitle.innerHTML = 'Titan';
    textDestination.innerHTML = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
    distanceKmh4.innerHTML = '1.6 Bil. km';
    tempsKmh4.innerHTML = '7 Years';
    imagePlanet.src = '../assets/destination/image-titan.png';
  }

  moon.addEventListener('change', moonFunction);
  mars.addEventListener('change', marsFunction);
  europa.addEventListener('change', europaFunction);
  titan.addEventListener('change', titanFunction);
};

destination();
