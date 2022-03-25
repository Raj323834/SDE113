function fun(){
    document.write("hi i am function<br>")

}

fun()
fun()
fun()
fun()

function teacher(){
    document.write("hi i am teacher");
    ans= student(10);
    document.write(ans,"rahul raj");
}
function student(assigment){
    return assigment*assigment
}
teacher();