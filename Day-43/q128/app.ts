// Arrow function that calculates the all its parameters

let SumProduct = (...Product:number[]):number=>{
     return Product.reduce((Total,Sum)=> Total + Sum ,0)
}

console.log(SumProduct(2,4,6,8)); // out put 20


const multiplyParameters = (...numbers: number[]) =>
      numbers.reduce((total, number) => total * number, 1);
    
    console.log(multiplyParameters(2, 3, 4)); // Outputs: 24