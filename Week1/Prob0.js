var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
//console.log(cat);
cat.height=20;
cat.weight=10;
cat.name='Flufffy'
console.log('cat friend activities');
for(var i =0 ; i < cat.catFriends.length;i++)
{
    console.log(cat.catFriends[i].activities);
}

console.log('cat friends names');
for(var i =0 ; i < cat.catFriends.length;i++)
{
    console.log(cat.catFriends[i].name);
}

var total_weight =0;

for(var i =0 ; i < cat.catFriends.length;i++)
{
    
    total_weight = total_weight +cat.catFriends[i].weight;
}
console.log('Total Weight of cat friends is ' + total_weight);

console.log('Total activities');
console.log(cat.activities);
for(var i =0 ; i < cat.catFriends.length;i++)
{
    console.log(cat.catFriends[i].activities);
}

for(var i =0 ; i < cat.catFriends.length;i++)
{
    cat.catFriends[i].activities.push('sleep');
    cat.catFriends[i].activities.push('drink');
}
cat.catFriends[0].furcolor='Black';
console.log(cat);


