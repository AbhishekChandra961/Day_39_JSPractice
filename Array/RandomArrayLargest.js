const ar=[];
for(var i=0;i<10;i++){
    ar[i] = Math.floor(Math.random()*1000);
}
console.log(ar);
ar.sort();
console.log(ar);
console.log("Second Largest number : "+ar[1]);
console.log("Second Smallest number : "+ar[ar.length-2]);
