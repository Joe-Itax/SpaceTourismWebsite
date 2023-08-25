# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to: | Les utilisateurs doivent pouvoir :

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Website Screenshot1](https://github.com/Joseph-Itakala/SpaceTourismWebsite/blob/main/image%20preview%20--%20space-tourisme-website/image1.png)

![Website Screenshot2](https://github.com/Joseph-Itakala/SpaceTourismWebsite/blob/main/image%20preview%20--%20space-tourisme-website/image2.png)

![Website Screenshot3](https://github.com/Joseph-Itakala/SpaceTourismWebsite/blob/main/image%20preview%20--%20space-tourisme-website/image3.png)

![Website Screenshot4](https://github.com/Joseph-Itakala/SpaceTourismWebsite/blob/main/image%20preview%20--%20space-tourisme-website/image4.png)

![Website Screenshot5](https://github.com/Joseph-Itakala/SpaceTourismWebsite/blob/main/image%20preview%20--%20space-tourisme-website/image5.png)

![Website Screenshot6](https://github.com/Joseph-Itakala/SpaceTourismWebsite/blob/main/image%20preview%20--%20space-tourisme-website/image6.png)

![Website Screenshot7](https://github.com/Joseph-Itakala/SpaceTourismWebsite/blob/main/image%20preview%20--%20space-tourisme-website/image7.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Space Touriism Website](https://space-touriism.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- JSON

### What I learned

During this project, I was able to acquire new skills by working with the JSON format. I also learned the importance of accessibility to ensure that our site is accessible to as many users as possible.

To work with JSON data, I used JS's async function to call the fetch and await methods, as in the following sample code:

```js
async function getData() {
  const response = await fetch('../data.json');
  const data = await response.json();
  console.log(data);
}
getData();
```

Also, I discovered how to simulate an event and use it effectively in my code.

```js
element.dispatchEvent(new Event('event'));
```

Regarding the design of the site, I learned to use the prefix **_-webkit_**

```css
selector {
  -webkit-backdrop-filter: blur(50px);
}
```

to make the property

```css
selector {
  backdrop-filter: blur(50px);
}
```

available to iPhone users.
This project allowed me to strengthen my skills and continue to improve my knowledge in these key areas.

### Continued development

In my future projects, I want to continue to focus on working with the JSON format. Although I have worked with datasets before, I want to sharpen my skills and start working with APIs. Additionally, I discovered how to simulate an event and use it effectively, and I plan to continue to perfect this technique as well.

### Useful resources

- [element.dispatchEvent on MDN](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/dispatchEvent) - It helped me to simulate a client side event, and thus take advantage of it.

## Author

- Frontend Mentor - [@Joseph-Itakala](https://www.frontendmentor.io/profile/Joseph-Itakala)
- Github - [@Joseph-Itakala](https://github.com/Joseph-Itakala)
- Linkdin - [@Joseph-Itakala](https://linkedin.com/in/joseph-itakala-2a6465250)

## Acknowledgments

I would like to express my gratitude to my fellow learner at Kadea, [Junior Asosa](https://github.com/BlackJr-Git/), who gave me invaluable help, in particular by testing the accessibility of the site on his iPhone.
