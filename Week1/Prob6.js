var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];


var newobj={};
var second_obj={};

var tranformEmployeeList = [];
for(var i = 0 ; i < array.length ;i++)
{
    for(var  j = 0 ; j < array[i].length;j++)
    {
        for(var p = 0 ; p < array[i][j].length-1;p++)
        {
            newobj[array[i][j][p]]=array[i][j][p+1];
            

        }
    }
   
    tranformEmployeeList.push({...newobj});
            
    
   
}
console.log(tranformEmployeeList);