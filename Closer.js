function closerDemo(){
    var a=10;
    function anotherFunction(){
        var b=10
        console.log('sum' + (a+b))
    }return anotherFunction()
}
closerDemo()
