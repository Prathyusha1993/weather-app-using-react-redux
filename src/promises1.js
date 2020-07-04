let p = new Promise((resolve, reject)=>{
    let rank =1;
    if(rank == 1){
        resolve('scooter')
    } else if(rank == 2){
        resolve('cycle')
    } 
    else if(rank == 3){
        resolve('cycle')
    } else{
        reject('failed')
    }
})

p.then((gift)=>{
    console.log('show to friends' + gift)
    if(gift === "broken") {
        return Promise.reject("broken cycle");
    }
    return gift;
})
.then((gift)=>{
    console.log('show to relatives' + gift)
})
.catch((noGift)=>{
    console.log('I will cry' + noGift)
})
//-----------------------------------------------------------------------
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages)=>{
    console.log(messages)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message)=>{
    console.log(message)
})