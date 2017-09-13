// const first = () => second()
//
// const second = () => third()
//
// const third = () => {
//   setTimeout(fourth, 0)
//   console.trace()
// }
//
// const fourth = () => console.trace()
//
// first()

const talkToDatabase = () => new Promise(callback)

const callback = (resolve, reject) => {
  const runAfterTwoSeconds = () => {
    const isEven = Date.now() % 2 === 0
    if (isEven) {
      resolve('It was even')
    } else {
      reject('It was odd')
    }
  }
  setTimeout(runAfterTwoSeconds, 2000)
}

console.log('about to create the promise and call then(), then(), and catch()')

// talkToDataBase()
//   .then((msg) => {
//     console.log('In first then:' + msg)
//     return talkToDataBase()
//   })
//   .then((msg) => {
//     console.log('In second then:' + msg)
//     return talkToDataBase()
//   })
//   .then((msg) => {
//     console.log('In third then:' + msg)
//   })
//   .catch(err => console.log('In catch:' + err))

// Promise.all([
//   talkToDatabase(),
//   talkToDatabase(),
//   talkToDatabase()
// ])
//   .then(result => console.log('In then:' + result))
//   .catch(err => console.log('In catch:' + err))
//
// console.log('called then(), then(), and catch()')

var sys = require('sys')
var exec = require('child_process').eec;

const handlePingResult = (error, stdout, stderr) => {
  sys.puts(stdout)
}

exec("ping -c 3 localhost", callback);

const ping = (hostname) => new Promise((resolve, reject) => {
  exec(`ping -c 3 ${hostname}`, (error, stdout, stderr) => {
    console.log('ping finished')
  })
})
