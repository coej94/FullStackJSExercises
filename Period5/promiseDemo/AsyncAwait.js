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
async function serialDemo(){
    let p =  myPromise("msg from prom", 1000);
    console.log('after ' + p);
    let p1 =  myPromise("msg from prom1", 1000);
    console.log('after ' + p1);
    let p2 =  myPromise("msg from prom2", 1000);
    console.log('after ' + p2);
    let p3 =  myPromise("msg from prom3", 1000);
    console.log('after ' + p3);
    console.log('------------------------------------');
    console.log('after');
    console.log('------------------------------------');

    

}
serialDemo();