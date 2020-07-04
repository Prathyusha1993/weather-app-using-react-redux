let p = new Promise((resolve, reject)=>{
    let a=1+1
    if(a==2){
        resolve('success')
    }else if(a==3){
        resolve('again success')
    }
        else{
        reject('failed')
    }
})

p.then((message)=>{
    console.log('this is in the then' + message)
}).then((message)=>{
    console.log('this is another')
}).catch((message)=>{
    console.log('this is in the catch' + message)
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