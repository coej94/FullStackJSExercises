let promiseFactory = function(msg,delay) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> { //To demonstrate an async call
        var ok = true;  // simulates the result of the operation
        if (ok) {
          resolve(msg);
        }
        else {
          reject("UPPPPs");
        }
      }, delay);
    });
  };
  console.log("Before");

  async function serialDemo(){
      let p1 = await promiseFactory("Msg from Promise1", 2000);   
      console.log(p1);
      let p2 = await promiseFactory("Msg from Promise2", 2000);   
      console.log(p2);
      let p3 = await promiseFactory("Msg from Promise3", 2000);   
      console.log(p3); 
  }
  serialDemo();
  console.log("After" );
