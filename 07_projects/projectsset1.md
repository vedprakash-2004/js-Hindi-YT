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


## project 2

```javaScript


const form = document.querySelector('form');

//this usecase will give you empty
//const height = preseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = parseInt(document.querySelector('#result').value);

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }

  result.innerHTML = `${weight}`;
});



```