var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
for(var i =0 ; i < arr.length;i++)
{
    newObject[arr[i][0]]=arr[i][1]
}

 return newObject;
}

var a =fromListToObject(arr);
console.log(a);