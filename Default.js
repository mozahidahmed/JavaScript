function sum(a,b){
    a?a=a : a=1
    b?b=b : b=1
    var sum=a+b;
    console.log(sum)
    return sum
}
sum(10,10)

function sum(a=1,b=1){
  
    var sum=a+b;
    console.log(sum)
    return sum
}
sum()
