
    myNumber = prompt("введите число ");
    myNumber++;
    let typeString;
    typeString = typeof myNumber;
    if ((typeString === "number") && (!isNaN(myNumber))) {
        if (myNumber%2==0) {alert("Это четное число");} 
        else {alert("Это нечетное число")}
        }    
    else {
        alert("Упс, кажется, вы ошиблись");

    }


