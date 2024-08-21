//------------------------JAVA SCRIPT NOTES FOR REVISION------------------------------------


//Used to print in console window
console.log("Hello")

//Declaring Variable
//Variable naming rules will be followed same like other programming languages
let a=6
console.log(a)

//Declaring constants
const b=2
console.log(b)

//Updating values
a=7;
console.log(a)     // O/P => It will printed with updated value bcoz it is variable
// b=5;
console.log(b)    // O/P => Error(Due to assignment to constant variable)


//-----------Data Types in JS (Primitive)(Strings,Numbers,Boolean,undefined,Null)-----------------------

let str="This is a string"  //String

let num=5                  //Number

let bool=true             //Boolean

//--------------------------------------------------------------------------------------------


//--------------------------Dynamic Typing---------------------------------
//Data type of variable is not fixed in JS unlike Java/Cpp.Examples below.

let random=5
console.log(random)

random="String"
console.log(random)   // O/P => This code will work finely without throwing any error

//--------------------------------------------------------------------------------



//------------------------Reference Types(Objects , Arrays , Functions)----------------------//


// --------1. Objects----------//
let data={
    name:"xyz",   //This is called 'Key-Value' pairs
    age:20,
    nationality:"Indian"
}
console.log(data)  // O/P => Will print the whole object in same format

//Accessing Individual values of an object

console.log(data.age)         // Called as 'Dot Notation' .... O/P => 20
console.log(data['age'])      // Called as 'Bracket Notation ..... O/P => 20

//Updating Values
data.age=30
console.log(data.age)
//--------------------------//




//--------2. Arrays--------------// 

let arr=[1,2,"abc",true,"xyz"]
console.log(arr)                 // Thsi will print array as it is...No error bcoz JS is dynamic type language

//Accessing individual items
console.log(arr[1],arr[3])     //Elements can be accessed using index like other languages

//Updating Values
arr[1]=112
console.log(arr)             // O/P => [1,112,"abc",true,"xyz"]

//----------------------------//

// 3. Functions written in detail ahead

//------------------------------------------------------------------------------------------//


//-------------------------------Operators-------------------------------------------------//


//-------1. Assignment Operator------//

let n1=11
let n2=12

console.log(n1+n2)
console.log(n1-n2)
console.log(n1*n2)
console.log(n1/n2)
console.log(n1**n2)         // n1 raise to power n2
console.log(n2%n1)         //Gives remainder

// Pre increment and Post increment

a=11
console.log("Value during output",a++)   //First output is given then value is incremented.. O/P => 11
console.log("Value after output",a)     //Incremented value.... O/P => 12

a=5
console.log("Value during output",++a) //First updation then output.... O/P => 6
console.log("Value after output",a)    // Updated value..... O/P => 6

//--------------//

//------2. Comaprison------//

console.log(n1>n2)
console.log(n1<n2)
console.log(n1>=n2)   // greater than or equal to
console.log(n1<=n2)  //less than or equal to

//Loose or Strict equality
n1=1
n2='1'

console.log(n1==n2)   //Called as loose equality..only checks value not data-type.. O/P => true
console.log(n1===n2) //Called as Strict equality..checks data-type and value both.. O/P => false

//-----------------------//

//-------3.Ternary Operator-----//

let age=15 

let status=(age>=18) ? "You can vote" : "You can not vote"

console.log(status)  // O/P => You can not vote

age=29
console.log(status)  // O/P => You can vote

//-------------------------//

//--------Logical Operators-------//

console.log(false || true)  // || => OR operator
console.log(true || true)  
console.log(true && false)  // && => AND operator
console.log(false && false)

// Key Points

console.log(false || "ansh")   // O/P => "ansh"

console.log(true || "ansh")   // O/P => true

console.log(false || 5 || 1)   // O/P => 5 (due to concept of short circuiting in OR)

console.log(false || 1 || 5)   // O/P => 1 (due to concept of short circuiting in OR)


console.log(false && "ansh")   // O/P => false

console.log(true && "ansh")    // O/P => ansh

console.log(false && 5 && 1)  // O/P => false

console.log(true && 5 && 1)   // O/P => 1

console.log(true && 1 && 5)   // O/P => 5

//------------------------------//

//-------5. Bitwise Operator------//

console.log(3&2)  // O/P => 2

console.log(3 | 2)  // O/P => 3

//Answers are calculated by using numbers in their bit forms
//Operator Precedence willbe followed like in JAVA/Cpp

//--------------------------------------------------------------------------------------------//


//--------------------------------Control Statements------------------------------------------//

//-----1. If-Else -----//

let marks=98
if(marks>=90){
    console.log("A grade")
}

else if(marks>=80){
    console.log("B grade")
}

else{
    console.log("C grade")
}                                    // O/P => A grade

//--------------------//

//-----2. Switch-----//

num=1

switch(num){
    case 0:
        console.log("0")
        break
    case 1:
        console.log("1")
        break 
    case 3:
        console.log("3")
}                                       // O/P => 1
//Break statements are neccesseary to come out of switch else other cases writeen below might as well execute

//--------------------------------------------------------------------------------------------------------------------//


//------------------------------------LOOPS-------------------------------------------------------//

//----1. For Loop-----//

for(let i=0;i<=5;i++){
    console.log(i)
}

for(let j=6;j>=0;j--){
    console.log(j)
}

//Nested For loop

for(let i=1;i<=5;i++){
    for(let j=1;j<=3;j++){
        console.log(j)
    }
}
//----------------------//

//-----2.While Loop------//

a=5
while(a>0){
    console.log("hi")
    a--
}

//-------------------------------------------------------------------------------------------//