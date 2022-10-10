// FIZZ_BUZZ
/*
write a function that  prints number from 1 to 100  
multiple of three print FIZZ instead of the number
multiple of five print BUZZ instead of the number
multiple of five nad three  print FIZZ_BUZZ instead of the number

*/

const solution = function () {
    let num = 0;

    while (num <= 100) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log('FIZZ_BUZZ');
            num++
        } else if (num % 3 == 0) {
            console.log('FIZZ');
            num++
        }
        else if (num % 5 == 0) {
            console.log('BUZZ');
            num++
        }
        console.log(num);
        num++
    }


}()
