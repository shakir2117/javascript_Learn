let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}



let isRaining = false
if (isRaining) {
  console.log('Remember to take your rain coat.')
}
if (!isRaining) {
    console.log('No need for a rain coat.')
    }

    

 

//what is the code to print the day of the week?
let day = 'good'
switch (day) {
    case 'good':
        console.log('Monday')
        break
    case 'bad':
        console.log('Tuesday')
        break
    case 'good':
        console.log('Wednesday')
        break
    case 'bad':
        console.log('Thursday')
        break
    case 'good':
        console.log('Friday')
        break
    case 'bad':
        console.log('Saturday')
        break
    case 'good':
        console.log('Sunday')
        break
    default:
        console.log('Invalid day')
}   
//input in the terminal in js

let age= 15
if(age>=18){
    console.log("You are old enough to vote")
}
else if(age<18){
    diff=18-age
    console.log("You are not old enough to vote. Wait for "+diff+" years");
}
else{
    console.log("Invalid age");
}


yourage=15
myage=11
if(yourage>myage){
    diff=yourage-myage
    console.log("You are "+diff+" years older than me");
}
else{
    diff=myage-yourage
    console.log("I am "+diff+" years older than you");
}

  let a = 4
  let b = 3
    if (a > b) {
    console.log(`${a} is greater than ${b}`)
    }
    else if (a < b) {
    console.log(`${a} is less than ${b}`)
    }

    a>b
    ?console.log(`${a} is greater than ${b}`)
    :console.log(`${a} is less than ${b}`)
    
    a=9
    if(a%2==0){
        console.log(a+" is an Even Number")
    }
    else{
        console.log(a+" is an Odd Number")
    }



    marks=90
    if(marks>=80){
        console.log("A Grade");
    }
    else if(marks>=70){
        console.log("B Grade");
    }
    else if(marks>=60){
        console.log("C Grade");
    }
    else if(marks>=50){
        console.log("D Grade");
    }
    else{
        console.log("F Grade");
    }

    let month = 'November'
    if(month='September'||'October'||'November'){
        console.log("The season is Autumn");
    }
    else if(month='December'||'January'||'February'){
        log("The season is Winter");
    }
    else if(month='March'||'April'||'May'){
        log("The season is Spring");
    }
    else{
        log("The season is Summer");
    }

    let dys = 'Sunday'
    switch (dys) {
        case 'Monday':
            console.log('Today is working day')
            break
        case 'Tuesday':
            console.log('Today is working day')
            break
        case 'Wednesday':
            console.log('Today is working day')
            break
        case 'Thursday':
            console.log('Today is working day')
            break
        case 'Friday':
            console.log('Today is working day')
            break
        case 'Saturday':
            console.log('Today is a holiday')
            break
        case 'Sunday':
            console.log('Today is a holiday')
            break
        default:
            console.log('Invalid day')
    }

    let mth = 'January'
if(mth='February'){
    console.log("28 days");
}
else if(mth='April'||'June'||'September'||'November'){
    console.log("31 days");
}
else{
    console.log("30 days");
}
