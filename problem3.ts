function simpleEquations(a : number, b: number, c: number) : any {
    let sum : number[] = []
    for(let x = 0; x < 10; x++){
        for(let y = 0; y < 10; y++){
            for(let z = 0; z < 1000; z++){
                if((x+y+z == a && x*y*z == b && x**2+y**2+z**2)) {
                    return [x,y,z];
                }
            }
        }
    } 
    return "no solution"
}

console.log(simpleEquations(1, 2, 3));
console.log(simpleEquations(6, 6, 14));

    simpleEquations(1, 2, 3)  // no solution
   simpleEquations(6, 6, 14) // 1 2 3
//    && (a**b**c**) 