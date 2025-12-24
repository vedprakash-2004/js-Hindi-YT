# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
    console.log(e);
    console.log(e.target.id);
    if (e.target === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});



```