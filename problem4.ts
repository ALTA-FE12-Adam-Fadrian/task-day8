  interface promiseType {
    data: string | null;
    message: string;
  }
  
  const lottery = new Promise<promiseType>((resolve, reject) => {
   console.log("--Texas Holdem Poker--")
   let number = Math.random() * 1000

    console.log("undian lotre dimulai...")
    console.log("sedang mengundi nomor anda…")
    setTimeout(() => {
      console.log("score : ", number); 
      if (number > 200) {
          resolve({
            data: "Congrats",
            message: "selamat anda mendapatkan hadiah utama berupa mobil",
          });
      } else {
        reject({
          data: "maaf anda kurang beruntung",
          message: "Kamu belum berhasil, jangan menyerah!",
        });
      }
    }, 10000);
  });
  
    lottery
      .then((result) => {
        console.log(result.data);
        console.log(result.message);
      })
      .catch((error) => {
        console.log(error.data);
        console.log(error.message);
      });
