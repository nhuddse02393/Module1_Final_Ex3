function isPrime(number) {
    let flag = true;
    if (number < 2)
        flag = false;
    else
        if(number === 2 || number === 3)
            flag = true;
        else
            for(let i = 2; i < number; i++)
                if(number % i == 0) {
                    flag = false;
                    break;
            }
    return flag;
}

let number1 = 12;
if (isPrime(12))
    alert("" + number1 + " is prime!");
else
    alert("" + number1 + " is not prime!");

let  number2 = 17;
if (isPrime(17))
    alert("" + number2 + " is prime!");
else
    alert("" + number2 + " is not prime!");