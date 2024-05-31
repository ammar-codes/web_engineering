var array=[{id:1,name:"amm"},{id:2,name:"gga"},{id:1,   name:"amm"}]
var obj={}
for (index in array){
    const Element = array[index]
    if(obj[Element.index.id]){
    obj[Element]++;
    }
    else{
        obj[Element]=1
    }
}
console.log(obj);
