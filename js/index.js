let btn = document.querySelector('.burger')
let list = document.querySelector('.list')
let span = document.querySelector('.burger')
let f1 = ()=>{
  list.classList.toggle('active')
  span.classList.toggle('burgerx')
  console.log(span);
}

btn.onclick = ()=>{f1()}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },  
  keyboard: {
    enabled: true,
    onlyViewport: true,
    pageUpDown: true
  },
  mousewheel: {
    sensitivity: 1,
    evenstarget: '.slide-image'
  },
  autoheight: true,
  watchoverflow: true
});


// fetch('https://dummyjson.com/carts', {
//   method: 'GET', 
// })
// .then(res => res.json())
// .then(data => console.log(data));
// function sendRequest(method, url, body=null){
//   const headers = {
//     'Content-Type': 'application/json'
//   }
// const body = {
//   name: "Tyrael",
//   age: 21
// }
//   fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers
//   }).then(
//     Response => {
//       return Response.json
//     }
//   )
// };
// sendRequest('POST', requestURL, body)
//  .then( data => console.log(data))
//  .catch( err => console.log(err)) 
