function localScope(){
    var local="ami local scope ar variable"
    console.log(local)

}
localScope()
//you can not use this 
console.log(local)



var globalScope='ami global scope'
function global(){
    console.log(globalScope)
}
global()
console.log(globalScope)


// local and global function
function GlobalFunction(){
    console.log('Global function')
    function local(){
        console.log('Local Function')
    }local();
}
GlobalFunction()
