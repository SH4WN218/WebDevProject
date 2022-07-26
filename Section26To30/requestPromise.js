
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2500) {
                reject('Connection timeout.');
            } else {
                resolve(`Here is your data from ${url}`);
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
        console.log(data2);

    } catch (err) {
        console.log('CAUGHT AN ERROR!');
        console.log('Error is:', err);

    }
}


// Similar to the callback method, but cleaner
/*---------------------------------------------------
fakeRequest('yelp.com/api/coffee/page1') // Page 1

    .then(() => {
        console.log('Promise resolved on page 1!');
        console.log('It worked!!');
        fakeRequest('yelp.com/api/coffee/page2') // Page 2

            .then(() => {
                console.log('Promise resolved on page 2!');
                console.log('It worked!!');
                fakeRequest('yelp.com/api/coffee/page3') // Page 3

                    .then(() => {
                        console.log('Promise resolved on page 3!');
                        console.log('It worked!!');
                    })
                    .catch(() => {
                        console.log('Promise rejected on page 3!');
                        console.log('Oh no, an error!!');
                    })
            })
            .catch(() => {
                console.log('Promise rejected on page 2!');
                console.log('Oh no, an error!!');
            })
    })
    .catch(() => {
        console.log('Promise rejected on page 1!');
        console.log('Oh no, an error!!');
    })

// Promise chaining
fakeRequest('yelp.com/api/coffee/page1') // Page 1
    .then((data) => {
        console.log('Promise resolved on page 1!');
        console.log(data);
        return fakeRequest('yelp.com/api/coffee/page2') // Page 2
    })
    .then((data) => {
        console.log('Promise resolved on page 2!');
        console.log(data);
        return fakeRequest('yelp.com/api/coffee/page3') // Page 3
    })
    .then((data) => {
        console.log('Promise resolved on page 3!');
        console.log(data);
    })
    .catch((err) => {
        console.log('Promise rejected!'); // Generic error message, does not specify page number.
        console.log(err);
    })


// Syntax to make a new Promise: 
// line1: resolve and reject are functions that can be executed; Promise stays 'pending' until either one is called inside it.
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { // line1
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.75) {
                resolve('Your fake data here!')
            }
            reject('Request error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('Done with request!')
        console.log('Data is: ', data)
    })
    .catch((err) => {
        console.log('Oh no, ', err);
    })
---------------------------------------------------*/
