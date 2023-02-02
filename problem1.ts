function jajanBoba(uang: number, callback: any) {
  if(uang > 8000) {
    setTimeout(() => {
      console.log("kamu jajan boba Rp 5000");
        uang = uang - 5000;
        console.log("uang kamu sisa Rp " , uang)
        callback(uang);
    }, 8000)
  } else {
    console.log("tidak punya uang lg");
  }
 }

 function jajanSeblak(uang: number) {
  setTimeout(() => {
    console.log("kamu jajan seblak Rp 8000");
    uang = uang - 8000;
    console.log("uang kamu sisa Rp ", uang)
    callback(uang)
  }, 5000)
 }
 
 
 jajanBoba(20000, jajanSeblak)
 jajanBoba(10000, jajanSeblak)




function callback(uang: number) {
  throw new Error("Function not implemented.");
}
