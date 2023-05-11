let course='javascript' //premitive datatypes ,string, number ,null.undefined once
console.log(course,course[0])

let num1=3
let num2='3'
let num3=3


console.log(num1===num2)
console.log(num1==num2)
console.log(num1===num3)
// num2=3
console.log(num1===num2) //premitive datatypes can be scrictly equal if they have equal properties and values

//non- premitive data types

let array1=[4,5,1,2,3,6]
console.log(array1)
array1[2]='hi'
console.log(array1)


let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
                    //non-preitive data types cannot be strictly equal even if the properties and values are equal
let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
console.log(userOne == userTwo) // false

let age =35
const name='shakir'
console.log(age)
console.log(name)

age=20
//name='sahil'  //TypeError: Assignment to constant variable.


const PI=Math.PI   //math const variable

console.log(Math.round(PI))  //round of the values to 3 from 3.14
console.log(Math.floor(4.6)) //round down the values 
console.log(Math.ceil(4.6)) //round up the values


console.log(Math.random())
console.log(Math.sqrt(25))
console.log(Math.abs(-11))
console.log(Math.pow(25,2))
console.log(Math.floor(Math.random()*100))
console.log(Math.sqrt(25))

let a='hello'    //string concatication
let b='world'
let c=' '

console.log(a+c+b)

const paragraph = "My name is shakir. I live in india, maharasthra.\
I am a dev and I love coding. I learn HTML, CSS, JavaScript, angular, \  longstring\
Node.js, Python"
console.log(paragraph)

let first_name ='shakir'
let last_name ='choudhary'
let martial_status ='unmarried'
let country ='india'
let ag= 22

console.log(`hello ${first_name}`)   //to directly display or insert variable in string then use {}
                                    // `${}`     `<= not =>' string interpolation

let nomu=1
let nemo=2
console.log(`${nomu} is grater than ${nemo}=${nomu>nemo}`)
console.log(`${nomu} is less than ${nemo}=${nomu<nemo}`)
//length
console.log(first_name.length)
//access letters of string
console.log(first_name[0],'<')
console.log(first_name[first_name.length-1])
console.log(first_name.toUpperCase())
console.log(first_name.substr(0,2))
console.log(first_name.substring(2))
console.log(paragraph.split(" "))
console.log(paragraph.includes("JavaScript"))
console.log(paragraph.replace("Python","Typescript"))

let string='I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
let pattern = /love/gi
console.log(string.match(pattern))   

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020\
             I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  
console.log(txt.match(/\d+/g)) 

string='javascript '
console.log(string.repeat(20))
let firstName = 'shakir'      // string
let lastName = 'shakir'        // string
let county = 'india'         // string
let city = 'mumbai'           // string
let agg = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'shakir')  
console.log(typeof lastName)   
console.log(typeof agg)          
console.log(typeof 3.14)        
console.log(typeof true)        
console.log(typeof false)       
console.log(typeof NaN)         
console.log(typeof job)         
console.log(typeof undefined)   
console.log(typeof null) 
//--------------------------------Changing Data Type (Casting)

console.log(typeof(num1))
console.log(typeof(num2))
console.log(parseInt(num2))
console.log(typeof(num2))

str1='10'
str2='78'
str3='21.2'
// parseInt()
// Number()
// Plus sign(+)

console.log(parseInt(str1))
console.log(Number(str2))
console.log(+str3)



float1=6.73
float2=8.32
float3=93.32

console.log(typeof((str3)))




// exersice
let challenge='30 days of javascript'

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3))
console.log(challenge.length)
console.log(challenge.slice(0,3))
console.log(challenge.slice(3,21))
console.log(challenge.slice(3,21))
console.log(challenge.includes('script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))
challenge2='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(challenge2.split(','))
console.log(challenge.replace('javascript','python'))
console.log(challenge.charAt(15))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('j'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

challenge3=' You cannot end a sentence with because because because is a conjunction '
console.log(challenge3.indexOf('because'))
console.log(challenge3.lastIndexOf('because'))
console.log(challenge3.search('because'))
console.log(challenge3.trim(" "))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('javascript'))
console.log(challenge.match(/a/g))
sen1='30 days of'
sen2=' javascript'
sen3=''
console.log(sen3.concat(sen1,sen2))
console.log(challenge.repeat(2))
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
str='10'
num=10
console.log(typeof(str)===typeof(num))
console.log(typeof(parseInt(str))===typeof(num))
console.log(parseFloat('9.8')==num)
console.log(typeof(parseInt(Math.round(parseFloat('9.8'))))===typeof(num))
str5='python'
str4='jatgon'
console.log((str5,str4).includes('on'))
str6='I hope this course is not full of jargon'
console.log(str6.includes('jargon'))
console.log(Math.round(Math.random()*101))
console.log(Math.floor((Math.random()*51)+50))
console.log(challenge.slice((Math.floor((Math.random())+11)),((Math.floor(Math.random())+21))))
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
str7='You cannot end a sentence with because because because is a conjunction'
b1=str7.indexOf('because')
b2=str7.lastIndexOf('because')
console.log(str7.substring(b1,b2))
str8='Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(str8.match(/love/gi).length)


