// // for(i=1;i<5;i++){
// //     t=''
// //     for(j=1;j<=i;j++){
// //         t=t+'*'
// //     }
// // console.log(t)
// // }

//palindrome number check
function palindrome(num){
    var rem,temp,final=0;
    temp=num;
    while(num>0){
        rem=num%10;
        num=parseInt(num/10);
        final=final*10+rem;
    }
    if(final==temp){
        console.log("The inputed number is Palindrome");
    }
    else{
        console.log("The inputted number is not palindrome");
    }
}
palindrome(121);




// for(i=0;i<5;i++){
//     t=''
//     for(k=i;k<5;k++){
//         t=t+' '
//     }
//     for(j=0;j<=i;j++){
//         t=t+'* '
//     }

//     console.log(t);
// }



// function prime(num){
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             console.log('not prime');
//             break;
//         }
//         else{   
//             console.log('prime');
//             break;
//         }
//     }
// }
// prime(6);

// function even(num){
//     if(num%2==0){
//         console.log('even');
//     }
//     else{
//         console.log('odd');
//     }
// }
// even(5);

// function factorial(num){
//     var fact=1;
//     for(i=1;i<=num;i++){
//         fact=fact*i;
//     }
//     console.log(fact);
// }
// factorial(5);



// reverse of steing
function reverse(str){
    var reverse='';
    for(i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
    console.log(reverse);
}
reverse('abhishek gupta');


// 6. WAP to find the given string is Palindrome or not.
// function palindrome(str){
//     revstr='';
//     for(i=str.length-1;i>=0;i--){
//         revstr=revstr+str[i];
//     }
//     if(revstr==str){
//         console.log('palindrome');
//     }
//     else{
//         console.log('not palindrome');
//     }
// }
// palindrome('non');


//second largest element in the array
// function findseclargestel(arr){
//     let secondlargest= Number
//     let largest = arr[0] 
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i]>largest){
//             secondlargest=largest
//             largest=arr[i]
//         }
//         else if(arr[i]<largest && arr[i]>secondlargest){
//             secondlargest=arr[i]
//             console.log('sec');
//         }
        
//     }
//     return secondlargest
// }
//  const arrr=[12, 35, 1, 10, 34, 1, 35]
//  findseclargestel(arrr)
// console.log('*********************\n',findseclargestel(arrr));



function dubel(arr){
    sorted=arr.sort()
    console.log(sorted);
    newarr=[]

    for(i=0,j=i+1;i<arr.length-1;i++,j++){

        if(sorted[i]==sorted[j]){
            newarr.push(sorted[i])
        }
        else{
            if(newarr.includes(sorted[j])){

            }
            else{
                newarr.push(sorted[j])
            }
        }
    }
    return newarr
}
let arr=[12, 35, 1, 10, 34, 1, 35]
dubel(arr)
console.log(dubel(arr));






// function test() {
//     console.log(1);
//     console.log(test2());
//     console.log(3);
// }

// function test2() {
//     return new Promise((res,rej)=> setTimeout((res(2)),1000));
// }

// test();



// function test() {
//     console.log(1);
//     console.log(test2());
//     console.log(3);
// }

// function test2() {
//     return new Promise(()=> setTimeout(()=>{
//         console.log(2);
//     },1000));
// }

// test();




// async function test() {
//     console.log(1);
//     console.log(await test2());
//     console.log(3);
// }

// function test2() {
//     return new Promise((res,rej)=> setTimeout(()=>{
//         res(0)
//     },5000));
// }

// test()



// function total(num){
//     total=0
//     for(i=1;i<=num;i++){
//         total=total+i
//     }
//     return total
// }

// console.log(total(5))



// const numbers = [1, 2, 3, 4, 5, 6]
// // numbers.splice(3, 2,11 ,12,13)
// // console.log(numbers)  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
// numbers.pop()
// console.log(numbers)
// numbers.push(6)
// console.log(numbers);
// numbers.shift()
// console.log(numbers);
// numbers.unshift(10)
// console.log(numbers);
// numbers.reverse()
// console.log(numbers);

// arr=[1,2,3,4,5]
// arr2=[6,7,8,9,0]
// arr3=[arr,arr2]
// console.log(arr3);
// console.log(arr3.length)
// console.log('##################################################################################');
// // loops 





// for(i=0;i<=100;++i){
//     if(i%5==0){
//         // console.log(i)
//     }
//     console.log(i);
// }


// for(i=1;i<=10;i++){
//     // console.log(`${i}*${i}=${i*i}`);
//     // alert('hello')
// }


// arr=[1,2,3,4,5,6]
// sum=0
// for(i=0;i<=arr.length-1;i++){
//     sum=sum+arr[i]
//     // console.log(arr[i]);
// }
// console.log(sum);



// arr12=['hello','world','this','is','javascript']
// arr22=Array()
// for(i=0;i<arr12.lenght;i++){
//     console.log(arr12[i]);
//     arr22.push(arr12[i])
// }
// console.log(arr22);

// arr12=['hello','world','this','is','javascript']
// arr22=[]
// for(i=arr12.length-1;i>=0;i--){
//     arr22.push(arr12[i])
// }
// console.log(arr12.length);
// console.log(arr22)



// i=0
// while(i<=100){
//     if(i%3==0){
//         console.log(`${i} is divisible by 3`);
//     }
//     i++
// }

// i=0
// do{
//     console.log(i);
//     i++
// }
// while(i<=100)


// arr123=[1,2,3,4,5,6,7,8,9,10]
// // for(const i of arr123){
// //     console.log(15*i);
// // }

// for(i=1;i<arr123.length-1;i++){

//     if(i%2==0){
//         console.log(arr123[i]);
//     }

// }

// unsort=[9,4,6,2,3,1,5,7,8]
// sort=[]
// for(i=0;i<unsort.length;i++){
//     // console.log(i,'=i');
//     for(j=i+1;j<unsort.length;j++){
//         // console.log(j,'=j');
//         if(unsort[i]>unsort[j]){
//             temp=unsort[i]
//             unsort[i]=unsort[j] 
//             unsort[j]=temp
//         }
//         // console.log(unsort);

//     }
//     sort.push(unsort[i])
// }
// console.log(sort);


// let a = 10;
// let b = 12;

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log("a =", a); // Output: a = 12
// console.log("b =", b); // Output: b = 10



// str='moom'
// str2=''
// for (i=str.length-1;i>=0;i--){
//     str2=str2+str[i]
// }
// if(str2==str){
//     console.log(str2,'given string is palindrome');
// }
// else{
//     console.log(str,'not a palindrome');
// }


// function revnum(num){
//     let ognum=num
//     let rev=0
//     while(num>0){
//         rev=(num%10)+(rev*10)
//         num=parseInt(num/10)
                
//     }
//     if(ognum==rev){
//         return console.log(rev,'is the palindrome');
//     }
//     else{
//         return console.log(ognum,'is not a palindrome')
//     }
// }
// revnum(1215)


// function number(num){
//     var rev =0;
//     while(num>0){
//         rev=(rev*10)+(num%10);
//         // num=Math.floor(num/10);
//         // console.log(num,rev,'before parseint');
//         num=parseInt(num/10)
//         // console.log(num,'after parseint');
//     }
//     return rev;
// }
// number(1234);
// console.log(number(1234));



// str0='Engineer'
// str=str0.toLowerCase()
// str2=''
// for(i=0;i<str.length;i++){
//     var count =0
//     for(j=0;j<str.length;j++){
//         if(str[i]===str[j]){
//             count++;
//         }
//     }
//     if(!str2.includes(str[i])){
//         str2+=str[i]+count
//     }
// }
// console.log(str2);
// console.log(str);

// var str = "";
// function charcount(str) {

//     var input = str.toLowerCase();
//     var output = "";

//     for (var i = 0; i < input.length; i++) {
//         var count = 0;
//         for (var j = 0; j < input.length; j++) {
//             if (input[i] === input[j]) {
//                 count++;
//             }
//         }
//         if (!output.includes(input[i])) {
//             output += input[i] + count;
//         }
//     }
//     return output
// }
// console.log(charcount('Engineer'));


// n = 100; 
// primeNumbers = [];

// for (var i = 2; i <= n; i++) {
//   isPrime = true;
//   for (var j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     primeNumbers.push(i);
//   }
// }
// console.log(primeNumbers);
// n=0
// while(n<=100){
//     console.log(n);
// n++
// }


// function squareRoot(number) {
//     if (number < 0) {
//       return "Invalid input. Cannot calculate square root of a negative number.";
//     }
  
//     return Math.sqrt(number);
//   }
//     console.log(squareRoot(16));
//   console.log(squareRoot(-9));
  

//   function groupAnagrams(str) {
//     const map = new Map();
  
//     for (let i = 0; i < str.length; i++) {
//       const sortedStr = str[i].split("").sort().join("");
//       if (map.has(sortedStr)) {
//         map.get(sortedStr).push(str[i]);
//       } else {
//         map.set(sortedStr, [str[i]]);
//       }
//     }
  
//     return Array.from(map.values());
//   }
  
//   const str = ["eat", "tea", "tan", "ate", "nat", "bat"];
//   console.log(groupAnagrams(str));  //tried but failed
  