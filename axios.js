const { default: Axios } = require("axios");

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {}; {
axios.get ('https://api.nasa.gov/').then(response => {
    console.log(respone);
});
const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
