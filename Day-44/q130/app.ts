export let Muliply =(...Num:number[]):number=>{
   return Num.reduce((a,b)=>a*b,1)
}
console.log(Muliply(5,5,5))