function showhide(){



    let para =document.getElementById("mypara");

    let btn =document.getElementById("btn");


    if(para.style.display === "none"){
        para.style.display = "block";
        btn.textContent = "hide";
    }else{
        para.style.display ="none";
        btn.textContent = "show"
    }
}