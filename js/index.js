let btn = document.querySelector('.burger')
let list = document.querySelector('.list')
let f1 = ()=>{
  list.classList.toggle('active')
  console.log(btn);
}

btn.onclick = ()=>{f1()}




















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
