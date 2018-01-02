const axios = require('axios'); // promised based requests - like fetch()

function getCoffee() {
  return new Promise(resolve => {
    setTimeout(() => resolve('☕'), 2000); // it takes 2 seconds to make coffee
  });
}

function getCoffee2() {
  return new Promise(resolve => {
    setTimeout(function() { 
      resolve('☕')
    }, 2000); // it takes 2 seconds to make coffee
  });
}

async function go() {
  try {
    // but first, coffee
    const coffee = await getCoffee2();
    console.log(coffee); // ☕
    // then we grab some data over an Ajax request
    const christiansdata = await axios.get('http://api.icndb.com/jokes/random')
    .then(res => res.data.value.joke); 
    console.log(christiansdata);
  } catch (e) {
    console.error(e); // 💩
  }
}

go();