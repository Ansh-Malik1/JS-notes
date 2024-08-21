// Functions can be defined as a set of code which performs a specific task and can be used again and again.//


run()

function run(){console.log("Running")}

/* Note that in abouve example, the function is defined after its declaration still the code works,
this is because of a process called 'Hoisting'. It refers to the default behaviour of moving all the
declarations to the top of the scope by JS engine before executing a file.
Therefore the function is moved to the top and hence no error occurs. */


// Assigning function to a variable is called function assignment. Eg://

let step=function walk(){
    console.log("Walking")
}
step()

// In the above the example, the function can be called by using 'step' only. If we use 'walk, it will throw error.//

/* If we try to call a assigned function before defining it as we did in example 1, then it will
throw error as only declarations are moved to top not assignments*/


/* In example 2, if we remove the name of the function('walk') then it is called anonymous function
assignment however the function behaves normally */



//----------FUN WITH FUNCTIONS-------------------//

function sum(a,b){
    return(a+b)
}

let ans=sum(1,1)
console.log(ans)                // O/P => 2

ans=sum(1)
console.log(ans)                // O/P => NaN (not a number)    

ans=sum()
console.log(ans)                // O/P => NaN

ans=sum(1,2,3,4,5)
console.log(sum)                // O/P => 3

/* In this example the excess values passed are called arguements*/

//--Arguments--//

function sum2(a,b){
    console.log(arguments)
    return(a,b)
}

ans=sum2(2,4,5,7,8,9)
console.log(ans)              // All the extra numbers will be printed inside arguements

/* It must be noted that these numbers are not printed in the form of an array, rather they are
in the form of an object with index-mapping, we can print sum of arguments as well by traversing 
in the object and adding the numbers*/



//-----Functions and their properties-----//

let person={
    fname:'Ansh',
    lname:'Malik'
}

function greet(){
    return `Hello ${person.fname} ${person.lname}`
}

console.log(greet())


// Concept of getter and setter //

/* Getter -> used to access functions' properties
Setter -> used to change/mutate functions' properties

The above function(greet) is a read only function and we can not change it.Therefore it is like a getter*/

//Lets create a getter and setter function//

let person2={
    fname:'Aurobindo',
    lname:'Chattarjee',
    get fullName(){
        return `Hello ${this.fname} ${this.lname}`
    },
    set fullName(value){
        value=value.split(' ')
        this.fname=value[0]
        this.lname=value[1]
    }
}

console.log(person2.fullName)


person2.fullName='Rahul Ghosh'
console.log(person2.fullName)




// Try and Catch//

/* Try and catch blocks are used to handle exceptions which can occur during the runtime.*/


/* Just read about scope of variables and differnce between keyword 'let' and 'var', 'finally' keyword used along with try and catch block And JS is done :) .*/