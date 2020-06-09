function myFunc3(){
    var a1 = document.getElementById("fname").value;
    var a2 = a1.length;
    console.log(a2)
    if(a1 == '')
        document.getElementById("message3").innerHTML = "Please enter name!";
    else if(a2 >= 15)
        document.getElementById("message3").innerHTML = "Invalid name length!";
    else if(a2 <= 4)
        document.getElementById("message3").innerHTML = "Invalid name length!";
    else
        document.getElementById("message3").innerHTML = '';
}


function myFunc4(){
    var a3 = document.getElementById("lname").value;
    var a4 = a3.length;
    if(a3 == '')
        document.getElementById("message4").innerHTML = "Please enter your mail!";
    else if(a4 >= 25)
        document.getElementById("message4").innerHTML = "Invalid mail length!";
    else if(a4 <= 8)
        document.getElementById("message4").innerHTML = "Invalid mail length!";
    else
        document.getElementById("message4").innerHTML = '';
}


function myFunc5(){
    var a5 = document.getElementById("num").value;
    var a6 = a5.length;
    if(a5 == '')
        document.getElementById("message5").innerHTML = "Please Enter password!";
    else if(a6 >= 20)
        document.getElementById("message5").innerHTML = "Invalid password!";
    else if(a6 <= 8)
        document.getElementById("message5").innerHTML = "Invalid password!";
    else
        document.getElementById("message5").innerHTML = '';
}
