var array = ["GUVI", 'I', 'am', 'Geek'];
function transformFirstAndLast(arr) {
    var newObject={};
    console.log(arr);
   
    newObject[arr[0]]=arr[3];
    console.log(newObject);
 
    return newObject;
   }

var output = transformFirstAndLast(array);
console.log(output);