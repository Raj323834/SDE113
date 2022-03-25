count=1;
function fun(){
    //recirsive function unlimited run
    count++;
    document.write("love you mom and dad <br>"+count);
    if(count<=10){
    fun();}
}
fun();