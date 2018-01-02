var allResults = [];

// Error handling with promises
// 3 states resolve = godt, reject = ikke godt, pending = venter i spænding
function myPromise(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;
            if (err) {
                reject(new Error("Error"));
            } else {
                resolve(msg.toUpperCase());
            }
        }, delay);
    });
}

// serial promises
//Det tager 5 sekkunder fordi den kører alle promises i rækkefølge. 
//dvs. når vi skriver allResults ud er har vi ventet på alle promises er kørt.
const p1 = new myPromise("hi class", 2000);
p1.then((data) => {
    allResults.push(data);
    return new myPromise("hi again", 2000);
})
.then((data) => {
    allResults.push(data);
    return new myPromise("hi another time", 1000);
})
.then((data) => {
    allResults.push(data);
    console.log(allResults.join("\n"));
})
.catch((err) => {
    console.log(err.message);
});

// parallel promises
// alle bliver kørt samtidigt
function parallel(){
    const p1 = new myPromise("hi class 1", 1000);
    const p2 = new myPromise("hi class 2", 1000);
    const p3 = new myPromise("hi class 3", 1000);
    const p4 = new myPromise("hi class 4", 1000);

    let allP = [p1, p2, p3, p4];
    Promise.all(allP)
    .then(all => {
        console.log(all.join("`\n"));
    })
    .catch(err => console.log(err.message));
};

parallel();


