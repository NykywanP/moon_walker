const { default: Axios } = require("axios");

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {}; {
axios.get ('axios.get('https://api.nasa.gov/planetary/apod?api_key=s5hyJjcC6cUDfAMVb11pe7uEOeCNXbn4TkCGkeS4')
.then(response => {
     console.log(response.data);
});').then(response => {
    console.log(respone);
});
const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
