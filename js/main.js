'use strict'
//integer 7
// num = 34;
// sum = (num % 10) + Math.floor(num / 10);
// multiplication = (num % 10) * Math.floor(num / 10);
// console.log(sum);
// console.log(multiplication);

//integer 10
// num = 235;
// first = Math.floor(num / 100);
// second = Math.floor(num / 10) % 10;
// console.log(first)
// console.log(second)

//integer 13
// num = 235;
// first = Math.floor(num / 100);
// num = (num % 100) * 10 + first;
// console.log(num)

//integer 16
// num = 236;
// first = Math.floor(num / 100);
// second = Math.floor((num % 100) / 10);
// third = (num % 10);
// num = first * 100 + third * 10 + second;
// console.log(num);

//integer 19
// num = 241;
// min = Math.floor(num / 60);
// console.log(min);

//integer 22
// num = 24123;
// hours = Math.floor(num / 3600);
// sec = num - hours * 3600;
// console.log(sec);

//boolean 1
// a = -123;
// console.log(a>0);

//boolean 9
// a = 124;
// b = 124;
// console.log((a % 2 == 1) || (b % 2 == 1));

//boolean 12
// a = 124;
// b = 125;
// c = 127;
// console.log((a > 0) && (b > 0) && (c > 0));

//boolean 27
// x = -3;
// y = 1;
// console.log(x < 0);

//if 1
// a = 12;
// if (a > 0){
//    a+=1;
// }
// console.log(a);
// a = 13;
// (a > 0) ? a+=1 : a;
// console.log(a);

//if 7
// a = 112;
// b = 32;
// if (a > b){
//    console.log(2);
// }
// else{
//    console.log(1);
// }
// (a > b) ? console.log(2) : console.log(1);

//if 14
// a = 112;
// b = 32;
// c = 113;

// if(a > b){
//    min = b;
//    max = a;
// }
// else{
//    min = a;
//    max = b;
// }

// if (c > max){
//    max = c;
// }
// if (min > c){
//    min = c;
// }

// console.log(min);
// console.log(max);

// (a > b) ? (min = b, max = a) : (min = a, max = b);
// (c > max) ? max = c : max;
// (min > c) ? min = c : min;

// console.log(min);
// console.log(max);

//if 19
// a = 112;
// b = 112;
// c = 2;
// d = 112;

// if(a == b){
//    if(a == d){
//       console.log(3);
//    }
//    else{
//       console.log(4);
//    }
// }
// else{
//    if (a == c){
//       console.log(2);
//    }
//    else{
//       console.log(1);
//    }
// }

// (a == b) ? ((a == d) ? console.log(3) : console.log(4)) : ((a == c) ? console.log(2) : console.log(1));

//for 12
// let n = 1;
// let rez = 1;
//  for (let i = 0; i < n; i++){
//    rez = rez * (1 + (i + 1) / 10);
//  }
//  console.log(rez);

//for 14
// let n = 6;
// let rez = 0;
//  for (let i = 0; i < n; i++){
//    rez = rez + (2 * (i + 1) - 1);
//  }
//  console.log(rez);

//for 16
// let n = 6;
// let a = 2;
// let rez = 1;
//  for (let i = 0; i < n; i++){
//    rez = rez * a;
//    console.log(rez);
//  }

//for 20
// let n = 6;
// let rez = 0;
// let fact = 1;
//  for (let i = 0; i < n; i++){
//    fact = fact * (i + 1);
//    rez+=fact;
//    console.log(rez);
//  }

//while 1
// let a = 14;
// let b = 5;
// while (a > b){
//    a-=b;
// }
// console.log(a);

//while 5
// let n = 64;
// let k = 0;
// while (n > 1){
//    n/=2;
//    k+=1
// }
// console.log(k);

//while 12
// let n = 10;
// let k = 0;
// let sum = 0;
// while (sum <= n){
//    k+=1;
//    sum+=k;
// }
// console.log(k-1);

//while 17
// let n = 1012;
// let first;
// while (n > 0){
//    first = n % 10;
//    n = Math.floor(n / 10);
//    console.log(first);
// }

// let str = "Hello";
// for (let char of str){
//    console.log(char)
// }

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   console.log( pos );
// }