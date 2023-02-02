function dragonOfLoowater(dragonHead :number[], knightHeight :number []) {
 let person:number = 0;
 let container:number[]=  []

 for(let i:number= 0; i<dragonHead.length; i++){
     let count:number = 0;
     for(let j:number= 0; j < knightHeight.length; j++){
         if(dragonHead[i] <= knightHeight[j]){
             container.push(knightHeight[j])
         }else if(dragonHead[i] >= knightHeight[j]){
             count++
             if(count >= knightHeight.length ){
                 return "knight fall"
             }
         }
     }
     let arr = container.sort((a:number,b:number) => {
         return a - b
     })
     person += arr[0]
 }

 return person

   }
   
   console.log(dragonOfLoowater([5, 4], [7, 8, 4]));
  console.log(dragonOfLoowater([5, 10], [5]) );
  console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2]));
  console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5]) );
       // 11
           // knight fall
    // knight fall
   // 10