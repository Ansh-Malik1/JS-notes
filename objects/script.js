//-------------------------------OBJECTS IN JS--------------------------------------------//

//---Creating an object---//
let rectangle={                         
    height:10,
    width:15,
    draw:function(){
        console.log("drawing rectangle")    // Adds behaviour to the object.....Called as 'method' 
    }
}
console.log(rectangle.draw)  // Prints the whole body of the function

console.log(rectangle.draw())  // Calls the function, therefore 'drawing rectangle' is printed.


//-----------------CONSTRUCTING OBJECTS------------------------------//

//--------1. By 'Factory Function' -------//

function createRectangle(h,w){   
    let rectangle={
        height:h,
        width:w,
        draw:function(){
            console.log("drawing rectangle")
        }
    }
    return rectangle
}
//The above code made a function to create an object

rectangleObject1=createRectangle(9,30)
console.log(rectangleObject1)               // O/P => {height: 9, width: 30, draw: ƒ}
rectangleObject1=createRectangle(12,34)
rectangleObject1=createRectangle(5,8)
rectangleObject1=createRectangle(2,10)
rectangleObject1=createRectangle(9,20)
//-------------------------------------------------------------------//

//-----------------------2. Constructor Function--------------------//

function Rectangle(len,bre){           //Function will also be an object
    this.length=len                   // this keyword is use to point to a thing on which we are working in this case it is object 
    this.breadth=bre
    this.draw=function(){
        console.log("drawing rectangle(Constructor function)")
    }
}

let recObj=new Rectangle(8,11)
console.log(recObj)                   // O/P => Rectangle {length: 8, breadth: 11, draw: ƒ}
//-----------------------------------------------------------------//


//-------------------------DYNAMIC NATURE OF OBJECTS-----------------------//

//Taking rectangleObject1 as example

rectangleObject1.color="orange"  // Adds color property
rectangleObject1.area=rectangleObject1.height*rectangleObject1.width    //Adds area property
console.log(rectangleObject1)   // O/P => {height: 9, width: 20, color: 'orange', area: 180, draw: ƒ}

delete rectangleObject1.area  // Deletes area property
console.log(rectangleObject1)  // O/P => {height: 9, width: 20, color: 'orange', draw: ƒ}

//---------------------------------------------------------------------------//

//---------------------------EXTRA POINTS------------------------//

// Ex.1.1//
let a=10
let b=a
a++
console.log('a=',a)        // O/P a=11
console.log('b=',b)       // O/P b=10

// Ex.1.2//
let c={value:10}
let d=c
c.value++
console.log(`Value of C is ${c.value}`)   // O/P => Value of C is 11..........THis line of code is a JS syntax used to print variables along with string
console.log(`Value of D is ${c.value}`)   // O/P => Value of D is 11

// In Ex.1.1, the value of a and b is different after increment but in Ex.1.2 the values of c and d are same.
// This is because when using objects, when value of c is assigned to d, the value was passsed as an address
//not as a number. Therefore when the value of c was updated, value of d also got updated because address of value was passed in d.
// Therefore we can conclude that primitves are copied by values and refrences are copied by address.//





//Ex.2.1//
a=10
function inc(a){  // In this case it is passed by value mot by reference
    a++
    console.log(`Value of a inside function is ${a}`) 
}
inc(a)
console.log(`Value of a outside function is ${a}`)    // O/P => 10

//Ex.2.2//
let arr=[10,12]
function inc2(arr){
    arr[0]=1
    console.log(`Value inside a is ${arr[0]}`)
}
inc2(arr)
console.log(`Value inside a is ${arr[0]}`)   // O/P => 1

// This happened because primitives are passed as value and referneces as address there was no copy made of the array when it was passed in the function.
// Whereas when numeric value was passed(Ex 2.1) a copy of value was made and passed in the function. All the operations took place on copied value.
// Therefore the original value remained unchanged and outside the function, the output was 10






//------------------------Iterating in objects--------------------------//

// 1. Using for-in loop//

let triangle={
    s1:4,
    s2:5,
    s3:3
}

for(let key in triangle){
    console.log(key)                   // Prints name of key(s1,s2,s3)
    console.log(triangle[key])        // Prints value of keys(4,5,3)
}

// 2. Using for-of loop//
//This loop can be only used on iterables(arrays,maps)

let array=[1,2,'ansh',true,'abcd',3]
for(let key of array){
    console.log(`Value: ${key}`)
}

//To use it on objects, we need to convert key value pair into array

for(let key of Object.entries(triangle)){
    console.log(`Values: ${key}`)
}

// Checking if a property exists or not in an object
if('color' in triangle){
    console.log('Present')
}
else{console.log('Absent')}

if('s2' in triangle){
    console.log('Present')
}
else{console.log('Absent')}
//------------------------------------------------------------------------//


//------------------------Object Cloning---------------------------------//

//Normal assignment doesnt work for reference type data//


//--Method1--//
let src={
    a:1,
    b:2,
    c:3
}

let dest={}
for(let key in src){
    dest[key]=src[key]
}
console.log(dest)


//--Method2--//
let src2={
    a:2,
    b:4,
    c:6
}

let dest2=Object.assign({},src2)
console.log(dest2)


//--Method3--//

let src3={
    a:3,
    b:6,
    c:9
}

let dest3={...src3}   //Spread Operator
console.log(dest3)

//Combining more than 1 object//
let source1={
    a:1,
    b:2,
    c:3
}

let source2={
    d:4,
    e:5
}

let source3={
    f:6
}

let destination=Object.assign({},source1,source2,source3)
console.log(destination)   // O/P => {a: 1, b: 2, c: 3, d: 4, e: 5, …}


//------------------------Garbage Collector-----------------//

// It is a feature of JS that keeps running automatically in background.
// It de-allocates the memory of constans/variables which are not used in program but were declared.
// We have no control over it,it keeps running on its own.