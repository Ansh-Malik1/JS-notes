//-------------------------In-Built Objects and Arrays-------------------------------//

//------------------In-Built Objects----------------//

// 1. Math //

console.log(Math.random())

console.log(Math.round(1.2))

console.log(Math.round(1.9))

console.log(Math.PI)

console.log(Math.max(1,101,12,98,55))

console.log(Math.min(101,105,98,92,120))

console.log(Math.abs(-10))

console.log(Math.abs(10))

console.log(Math.cbrt(8))

console.log(Math.ceil(1.2))

console.log(Math.floor(1.2))

console.log(Math.ceil(-1.2))

console.log(Math.floor(-1.2))

// Refer MDN for more//


// 2.Strings //

let name='ansh'   // Creates string as primitive data-type

let fullName= new String('Ansh Malik')   // Creates string as an object

console.log(typeof(name))      // O/P => String

console.log(typeof(fullName))  // O/P => Object

console.log(fullName[0])

console.log(fullName[3])

console.log(fullName.includes('sh'))

console.log(fullName.startsWith('An'))

console.log(fullName.endsWith('ik'))

console.log(fullName.indexOf('M'))

console.log(fullName.toLowerCase())

console.log(fullName.toUpperCase())

console.log(fullName.replace('A','a'))

console.log(fullName.split())

//-------------------------------------------------------------------------------------//



//------------------------------ Templte Literal-------------------------------------//


message=`
Hello sir/maam

This is a mail body made using backticks

Thanking you,
Regards`

console.log(message)   
// The output will be same as we have written message because we have used bacticks instead of inverted commas to enclose our text.

//--Using Dynamics inside strings--//
message2=`Hello ${fullName}   

This is a mail body made using backticks

Thanking you,
Regards` //We reffered to varible 'fullname' inside string using backticks same thing has been done above quite a few times.

console.log(message2)

//---------------------------------------------------------------------------------------------//


//-------------------------------------DATE AND TIME-------------------------------------------//

let date=new Date()          
console.log(date)       // Prints present date and time

let date2=new Date('April 3 2004 8:04')
console.log(date2)            // O/P => Sat Apr 03 2004 08:04:00 GMT+0530 (India Standard Time)

let date3= new Date(2004,3,3,8,4)   // Format =(year,month,date,hour,minute,seconds).....month indexing starts from 0 thus April=3
console.log(date3)           // O/P => Sat Apr 03 2004 08:04:00 GMT+0530 (India Standard Time)

///Updating Values
date2.setFullYear(1990)
console.log(date2)         // O/P => Tue Apr 03 1990 08:04:00 GMT+0530 (India Standard Time)

date2.setDate(1)
console.log(date2)        // O/P => Sun Apr 01 1990 08:04:00 GMT+0530 (India Standard Time)
