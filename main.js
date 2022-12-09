
let red = document.querySelector(".box-red")
let yellow = document.querySelector(".box-yellow")
let green = document.querySelector(".box-green")


  let lights = () => {

   setTimeout(() =>{
    red.style.backgroundColor = 'red'
    },0)

  setTimeout(() =>{
    red.style.backgroundColor = 'black'
    },5000)

  setTimeout(() =>{
    yellow.style.backgroundColor = 'yellow'
    },5000)

  setTimeout(() =>{
    yellow.style.backgroundColor = 'black'
    },6000)

  setTimeout(() =>{
    yellow.style.backgroundColor = 'yellow'
    },7000)

  setTimeout(() =>{
    yellow.style.backgroundColor = 'black'
    },8000)

  setTimeout(() =>{
    yellow.style.backgroundColor = 'yellow'
    },9000)

  setTimeout(() =>{
    yellow.style.backgroundColor = 'black'
    },10000)


  setTimeout(() =>{
    green.style.backgroundColor = 'green'
    },10500)

  setTimeout(() =>{
    green.style.backgroundColor = 'black'
    },15500)

  }

  lights()
  setInterval(lights,15500)

// /////////////////////////////////////////////////////////////////////////














// let countRed = 3
// let countBlack = 10

// setInterval(() =>{
//   countRed -= 1
// },1000)
// setTimeout(() =>{
//   red.style.backgroundColor = 'red'
// }, countRed * 1000)

// setInterval(() =>{
//   countBlack -= 1
// },1000)
// setTimeout(() =>{
//   clearInterval(countBlack )
//   red.style.backgroundColor = 'black'
// }, countRed * 1000)


// /////////////////////////////////////////////////////////////////////////


// function changeLights(){
//   setTimeout(() => {
//     redLights()
//   }, 0);
// }

// function redLights(){
//   red.classList.add('active');
//   setTimeout(() => {
//     red.classList.remove('active');
//   }, 4000);
// }

// changeLights()

// /////////////////////////////////////////////////////////////////////////


// function changeLights(){
// setTimeout(() => {
// redLight()
// }, 0);

// setTimeout(() => {
// yellowLight()
// }, 4000);

// setTimeout(() => {
// greenLight()
// }, 7000);
// }

// function redLight(){
//   setTimeout(() => {
//     red.style.backgroundColor = 'black'
//   }, 4000);
// }
// function yellowLight(){
//   setTimeout(() => {
//     yellow.style.backgroundColor = 'black'
//   }, 2000);
// }
// function greenLight(){
//   setTimeout(() => {
//     green.style.backgroundColor = 'black'
//   }, 3000);
// }


// changeLights ()
