const fetch = require('node-fetch');

async function fetchHelper(url) {
    const res = await fetch(url);
    const data = await res.json();    
    return data;
}

const URL = "http://api.icndb.com/jokes/random";

async function serialTester() {
    const res1 = await fetchHelper(URL);
    const res2 = await fetchHelper(URL);
    console.log('------------------------------------');
    console.log(res1.value.joke);
    console.log('------------------------------------');
    console.log('------------------------------------');
    console.log(res2.value.joke);
    console.log('------------------------------------');
}

serialTester();

async function parallelTester() {
    const res1 = await fetchHelper(URL);
    const res2 = await fetchHelper(URL);
    console.log('------------------------------------');
    console.log(res1.value.joke);
    console.log('------------------------------------');
    console.log('------------------------------------');
    console.log(res2.value.joke);
    console.log('------------------------------------');
}

parallelTester();