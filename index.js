  // let i = 0

//infinite loop = cheksiz loop, takrorlanish
  // let gameIsRunning = false
// holat uchun
  // while (gameIsRunning) {
   // console.log(i)
   // if (i == 10) {
       // gameIsRunning = false
   // }
     // i++          // bittaga oshiradi
   //}
  // do {
   // console.log(i)
   // if (i == 10) {
        // gameIsRunning = false
    //}
    //i++
    //}while (gameIsRunning)

    //while (j < 5) {
    //     console.log(j)
    //      j++
    //}

    // iteratsiya uchun, bir necha marta kodni takrorlash uchun
    // for (let j = 0; j < 15; j++) {
    //    if(j == 7) {
    //       console.log(j)
    // break
   // }
   // console.log(j)
   // } 

   let fibo = [0, 1]  //5
   let n = prompt('Raqam kiriting:') // 10

   function fibonacci(i) {

    for (j=2; j < i; j++) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
    }
    console.log(fibo)
   }

   fibonacci(n)