
const arrayResult = [];

while ( true )
{  
    let array = prompt ("enter you information,please");

    if ( array  === null ) break;

    arrayResult.push(array);
    console.log(arrayResult);
}

arrayResult.sort();
console.log(arrayResult);

const myNewArr = arrayResult.splice(2,3);
console.log(myNewArr);
console.log(arrayResult)



