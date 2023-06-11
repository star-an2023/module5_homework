//задание 5_5
let arr= ["one", "two", "tree"];
console.log(arr.length);
for (let i=0; i<arr.length; i=i+1) {
    console.log(arr[i]);
}

//задание 5_6
//let arr= ["one", "two", "tree"];
let rez=true;
let element=arr[0];
let i=1;
while (i<arr.length){
    if (arr[i]!=element){ 
        rez=false; 
        break;
    }
    i++;
}
console.log(rez);

//задание 5_7
arr= [1, 2, 3,0];
let evenNumber=0;
let oddNumber=0;
let zeroNumber=0;
for (i=0; i<arr.length; i++){
    if (arr[i]==0){ zeroNumber++;} 
    else{
        if( arr[i] % 2 === 0) {evenNumber++;} else {oddNumber++;}
    }
 
}
console.log(` нулевых ${zeroNumber}  четных ${evenNumber}  нечетных ${oddNumber}`);