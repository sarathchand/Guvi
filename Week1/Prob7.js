var expected = {foo: 4, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
 if(JSON.stringify(actual)===JSON.stringify(expected))
 {
     console.log(true);
 }
 else{
     console.log(false);
 }
}

assertObjectsEqual(actual,expected);