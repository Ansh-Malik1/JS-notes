//---------------------------------------Arrays------------------------------------------------//

//-----1. Array Creations-----//

let arr=[1,2,'ansh',false,4,true,'xb',1]   // indexing takes place in arrays just like in Java/Cpp
console.log(arr)

//-----2. Accessing elements in arrays and operations on arrays-----//

//--i. Accessig elements--//

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

//--ii. Insertions of elements--//

arr.push('qw')      //Insertion at end

arr.unshift('a')   //Insertion at begining

arr.splice(3,0,'csx',true,12)        //Insertion at desired place...format => (index,elements to be deleted,data to be appended)

console.log(arr)


console.log(arr.indexOf('csx'))    //Prints index of the input given
console.log(arr.indexOf('12'))
console.log(arr.indexOf('qw'))
console.log(arr.indexOf('ansh'))
console.log(arr.indexOf('ball'))  // O/P => -1 (because input given is not present in array)
console.log(arr.indexOf(6,'csx'))  // This format check the input value after the given index i.e 6 in this case


//----iii. objects inside Arrays----//

let objArr=[
    {name:'Ansh',age:19},
    {name:'pawan',age:21}     //References can not be found out using indexOf method....We use call-back function for references
]
console.log(objArr)

/* O/P=>
(2) [{…}, {…}]
0: {name: 'Ansh', age: 19}
1: {name: 'pawan', age: 21}
length: 2
*/

//----- iv. Searching-----//

// Refrences dataTypes can not be found using 'indexOf' as they are compared by address not value

// Therefore we use callback functions


let objArr1=[
    {name:'Ansh',age:19},
    {name:'pawan',age:21}     //References can not be found out using indexOf method....We use call-back function for references
]
console.log(objArr1.indexOf({name:'ansh',age:19}))  // O/P => -1


//--Using callback function(aka predicate function / compariso function)--//
let op=objArr1.find(function(a){
    return a.name=='Ansh'
})

console.log(op)   // O/P: object will be printed if present else 'undefined' will be printed

/*A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action.*/


// We can use an arrow function to make the code more readable and short//

let op2=objArr1.find(a=> a.name='pawan')
console.log(op2)


//----v. Removing elements in array-----//

let num=[1,2,3,4,5,6,7,8,9,10,11,12]

num.pop()           // Removes element from end
console.log(num)   // O/P => [1,2,3,4,5,6,7,8,9,10,11]

num.shift()         // Removes element from beginning
console.log(num)   // O/P => [2,3,4,5,6,7,8,9,10,11]

num.splice(2,3)  // Removes  '3'elements from '2' index
console.log(num) 


//-----vi. Accessing elements-----//

// 1. For loop //

for(value of num){
    console.log(value)
}


// 2. For each loop //

num.forEach( value => console.log(value))


//-----vii. Split and joinfunctions-----//

let q=num.join(' # ')
console.log(q)           // O/P => all elements of array with ' # ' between them

let str= "This string will be converted into an array"
str=str.split(' ')     // Notice we gave ' ' as a parameter.Therefor string will be split according to it.
console.log(str)          // O/P => an array will be made with each word of the string as an element


//-----viii. Slicing and combining-----//

let comb=num.concat(str)
console.log(comb)                // O/P => both the arrays will be combined as a single unit

let slc=comb.slice(2,10)
console.log(slc)            // Elements from index 2 to 9 will be printed(star limit included and end limit excluded)

num=[1,2,3]
let num2=[4,5,6]

let combined=[...num,...num2]           // '...' is called spread operator
console.log(combined)                  // O/P => both the arrays will be combined


//-----ix. Maping and filtering-----//

let newArr=[1,-1,2,-7,5,-8]
let filtered= newArr.filter((value) => value >= 0)
console.log(filtered)

let items = filtered.map(num => {value: num})                  //?????????????
console.log(items)
















