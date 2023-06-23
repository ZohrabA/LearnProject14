// let a = [1,2, 333, 4,5,56,222];
// let max = a[0];
// for(let i= 1; i<a.length; i++){
//     if(a[i]>max){
//         max = a[i]
//     }
// }
// console.log(max)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a =[
//     [1,2,3],
//     [90,20,225],
//     [30,50,60.12]
// ];
// let max =a[0][0];
// for(let i=0; i< a.length; i++){
//   for(let j=0; j < a[i].length; j ++){
//       if(a[i][j]>max){
//           max = a[i][j]
//       }
//   }
// }
// console.log(max)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = [ 1, 2, 3, 4, [22,33,44], 9 ,0 ,23, [1110, 123,292, 33]];
// a= a.toString().split(",").map(a=>Number(a)).sort((a, b)=> b -a)
// console.log(a)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = [ 1, 2, 3, 4, [22,33,55], 9 ,0 ,236666, [1110, 123,292, 33]];
// let max = a[0]
// let len = a.length
// for(let i =0; i < len; i++){
// if(typeof a[i] == "object"){
//     for(let j =0 ; j < a[i].length; j ++){
// if(a[i][j]>max){
//     max = a[i][j]
// }
// }
// }else{
//     if(a[i]>max){
//         max=a[i]
//     }
// }

//         }
// console.log(max)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let pullar = [200, 100, 50, 20, 10, 5, 1];
let btn = document.querySelector("button");
let inp = document.querySelector("input");
btn.addEventListener("click", () => {
  let man = Number(inp.value);
  pullar.map((pul) => {
    let say = parseInt(man / pul);
    if (say > 0) {
      man = man - say * pul;
      let div = document.createElement("div");
      for (let i = 0; i < say; i++) {
        let img = document.createElement("img");
        img.src = `./image/${pul}.jpg`;
        div.append(img);
      }
      document.body.append(div);
    }
  });
});
