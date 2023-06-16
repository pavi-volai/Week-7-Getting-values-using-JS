function resolveAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved after 5 seconds');
        }, 5000);
    });
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved after 2 seconds');
        }, 2000);
    });
}

async function async5Call() {
    console.log('calling resolved after 5 seconds');
    const result = await resolveAfter5Seconds();
    console.log(result);
}

async function asyncCall() {
    console.log('calling resolved after 2 seconds');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

function getDashboardInformation() {
    async5Call();
    asyncCall();
}

window.onload = getDashboardInformation;
