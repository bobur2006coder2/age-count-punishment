let inp =document.querySelector(".inp")
let age = document.querySelector(".age")
let btn=document.querySelector("button")
btn.onclick=(e)=>{
    e.preventDefault()

    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    let ages = calculate_age(new Date(inp.value))
    if (inp.value=="") {
        age.innerHTML=`siz son kiritmadingiz`  
    }else{
        age.innerHTML=ages

    }
   
    
}



// console.log(calculate_age(new Date(2006, 5, 15)));

// console.log(calculate_age(new Date(1962, 1, 1)));