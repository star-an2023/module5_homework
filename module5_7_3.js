let myObject = new Map([
    ["ключ1", "знач1"],
    ["ключ2", "знач2"],
    ["ключ3", "знач3"],
    ["ключ4", "знач4"]
]);
for (let k of myObject.keys()){
    console.log("ключ: "+k +" значение: "+myObject.get(k));
}
