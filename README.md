
# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](https://user-images.githubusercontent.com/42536943/218305802-c4f7627d-b6c3-4a9a-9930-b31b07d6e00b.png)


### Links

- [Solution URL](https://www.frontendmentor.io/solutions/advice-generator-using-fetch-api-Q3qFM)
- [Live Site URL](https://hellen17.github.io/advice-generator/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- JavaScript
- Mobile-first workflow
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


### What I learned

Fetch function makes the API request, which returns a Promise that resolves with the API response.

```javascript

const getAdvice = () => {

fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }})
    .then(data => {
        console.log(data.slip)
        document.getElementById('advice-id').innerHTML = data.slip.id;
        document.getElementById('advice-text').innerHTML = `"${data.slip.advice}"`;
        }
    )
}
getAdvice();
```


### Useful resources

- [Sass documentation](https://sass-lang.com/guide)
- [Fetch API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [CSS Positioning](https://www.youtube.com/watch?v=jx5jmI0UlXU)


## Author

- Website - [Hellen](https://hellenkokach.me)
- Frontend Mentor - [@hellen17](https://www.frontendmentor.io/profile/hellen17)


