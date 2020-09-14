console.log('Client side js file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//      response.json().then((data) => {
//         console.log(data);
//      })
// })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#m-1');
const messageTwo = document.querySelector('#m-2');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent from refreshing the browser
    
    const location = search.value;
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
    });
});

    console.log(location);
})