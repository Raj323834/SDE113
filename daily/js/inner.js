function main(){
//it is for reading value from html page input box
mark=document.getElementById("mark").value;

if(mark>40){
    //it is for writting value from html page output
document.getElementById("ans").innerHTML="you are passed, your marks here ="+mark;

}
else{
    //it is for writting value from html page output
document.getElementById("ans").innerHTML="you are fail, your mark here ="+mark;

}
}

function maingrade(){

    mark=document.getElementById("mark1").value;
    if (mark>90) {
        document.getElementById("ans1").innerHTML="you are passed by grade = A+, your marks here ="+mark;
        
    }
else if(mark>80){
    document.getElementById("ans1").innerHTML="you are passed by grade = A, your marks here ="+mark;

}
else if(mark>70){
    document.getElementById("ans1").innerHTML="you are passed by grade = B, your marks here ="+mark;

}
    else {
        document.getElementById("ans1").innerHTML="you are fail your marks here ="+mark;
    }
}



function breakmain(){
    choice=document.getElementById("mark2").value;

    switch(choice){
      case "1" :
        document.getElementById("ans2").innerHTML="Welcome to international servive";
        break;

        case  "2":
        document.getElementById("ans2").innerHTML="Welcome to india servive";
        break;
        case  "3":
        document.getElementById("ans2").innerHTML="Welcome to nepal servive";
        break;
        case  "4":
        document.getElementById("ans2").innerHTML="Welcome to bhutan servive";
        break;
        case  "5":
        document.getElementById("ans2").innerHTML="Welcome to china servive";
        break;
        case  "6":
        document.getElementById("ans2").innerHTML="Welcome to russia servive";
        break;


default :
        document.getElementById("ans2").innerHTML=" invalid input";


    }


}