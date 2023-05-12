let firstname='shakir'
console.log(firstname)
let empty=null
console.log(empty)


num1=2
num2=3

console.log(num1+num2)
console.log(num2-num1)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)//remainder
console.log(num1**num2)//raise to


let radius=10
console.log(Math.PI)
PI=Math.PI
console.log(PI*radius*radius)


// console.log(3 >= 2)            
// console.log(3 < 2)              
// console.log(2 < 3)              
// console.log(2 <= 3)             
// console.log(3 == 2)             
// console.log(3 != 2)             
// console.log(3 == '3')           
// console.log(3 === '3')          
// console.log(3 !== '3')          
// console.log(3 != 3)             
// console.log(3 !== 3)           
// console.log(0 == false)        
// console.log(0 === false)        
// console.log(0 == '')            
// console.log(0 === '')           
// console.log(1 == true)          , 
// console.log(1 === true)         
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(NaN == NaN)         
// console.log(NaN === NaN)        
// console.log(typeof NaN)         

// console.log('mango'.length == 'avocado'.length)  
// console.log('mango'.length != 'avocado'.length)  
// console.log('mango'.length < 'avocado'.length)   
// console.log('milk'.length == 'meat'.length)      
// console.log('milk'.length != 'meat'.length)      
// console.log('tomato'.length == 'potato'.length)  
// console.log('python'.length > 'dragon'.length)   


const check = 4 > 3 && 10 > 5 
console.log(check)    //logical && and && operator gets true only if the two operands are true
const check1 = 4 < 3 || 10 < 5         // || operator gets true either of the operand is true
console.log(check1)
const check3=1>2
console.log(!(check3)) //negation



n=10
console.log(++n)
console.log(n++)
console.log(n)
console.log(--n)
console.log(n--)
console.log(n)

let islighton=true  //terenary
?console.log('your new to work')
:console.log('you need to sleep')


islighton=false
?console.log('your new to work')
:console.log('you need to sleep')

//date
const now= new Date()

console.log(now)
console.log(new Date().getFullYear())
console.log(new Date().getDate())
console.log(new Date().getDay())
console.log(new Date().getHours())
console.log(new Date().getMilliseconds())
console.log(new Date().getMinutes())
console.log(new Date().getMonth(),'--')
console.log(new Date().getSeconds())
console.log(new Date().getTime())
console.log(Date.now())
console.log(new Date().getTimezoneOffset(),'--')
console.log(new Date().getUTCDate())
console.log(new Date().getUTCDay())
console.log(new Date().getUTCFullYear())

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56



//excersice
firstname='shakir'
lastname='choudhary'
age=21
ismarried=false

console.log(typeof(firstname))
console.log(typeof(lastname))
console.log(typeof(age))
console.log(typeof(ismarried))


console.log(typeof('10')===(typeof(10)))
console.log(parseInt('9.8')===10)

let a=true
let b='hello'
let c=9


let d=false
let e=0
let f='n0'
let g=null



4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'


p='python'
j='jargon'
console.log((p.length)!==(p.length))
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12    )
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
py='python'
jr='jargon'
console.log((py.includes('on'))===(jr.includes('on')))


console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())


base=10
height=20
areaoftr=0.5*base*height
console.log(areaoftr)

let namelen='shakir'.length
namelen>7
?console.log('your name is long')
:console.log('your nae is short')

lname='choudhary'.length
namelen<lname
?console.log('your first name shakir is shorter than your last name choudhary')
:console.log('hello')



myage=25
yourage=20
agediff=myage-yourage

console.log(`i am ${agediff} years older than you`)


let byear=2010
let curryear=new Date().getFullYear()

ydiff=curryear-byear
yreq=18-ydiff
ydiff>18
?console.log(`You are ${ydiff}. You are old enough to drive`)
:console.log(`you are ${ydiff},you will be allowed to drive after ${yreq}`)



secyear=60*60*24*365
age=100
secage=secyear*age
console.log(`you have lived ${secage} seconds`)


//YYYY-MM-DD HH:mm


let currmonth=new Date().getMonth()+1
let currday=new Date().getDate()
let currhour=new Date().getHours()
let currmin=new Date().getMinutes()

console.log(`${curryear}-${currmonth}-${currday} ${currhour}:${currmin}`)
console.log(`${currday}-${currmonth}-${curryear} ${currhour}:${currmin}`)
console.log(`${currday}/${currmonth}/${curryear} ${currhour}:${currmin}`)





