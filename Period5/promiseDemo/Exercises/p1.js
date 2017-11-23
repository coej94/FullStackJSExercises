//This is the skeleton of a basic Promise.
function myPromise(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;

            if (err) {
                reject(new Error("Ups"))
            } else {
                resolve(msg.toUpperCase());
            }
        }, delay);
    });
};

//Sequence promise
const p1 = new myPromise("Hi Christian", 1000);
p1.then((data) => console.log(data))
    .catch(err => console.log(err.message))

function serial() {
    allResults = [];
    const p2 = new myPromise("Hi Christian", 2000);
    p2.then((data) => {
            allResults.push(data);
            return new myPromise("Hi Staal", 2000);
        })
        .then(data => {
            allResults.push(data);
            console.log('------------------------------------');
            console.log(allResults.join("\n"));
            console.log('------------------------------------');
        }).catch(err => console.log(err.message));
}
serial();

//Parallel promise
function parallel(){
    const p1 = new myPromise("Hi Christian1", 2000);
    const p2 = new myPromise("Hi Christian2", 2000);
    const p3 = new myPromise("Hi Christian3", 2000);
    const p4 = new myPromise("Hi Christian4", 2000);
    const p5 = new myPromise("Hi Christian5", 2000);

    let allP = [p1,p2,p3,p4,p5];
    Promise.all(allP)
    .then(all=>{
        console.log('------------------------------------');
        console.log(all.join("\n"));
        console.log('------------------------------------');
    })
    .catch(err=>console.log(err.message))
}


parallel();