const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

const btn = document.getElementById('btn');

const getData = async (url) => {
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
};
document.addEventListener('click', () => { getData(API_URL) });






