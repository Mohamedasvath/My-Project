function validate()
{
    const name=document.getElementById("name").value;
    const nameError=document.getElementById("name-error");
    let nameregex = /^[a-zA-Z0-9_]{5,19}$/;
    nameError.textContent="";

    if(name=="" || (!nameregex.test(name)) )
    {
        nameError.textContent="please enter a name start with character and include letters,numbers,minimum 6 to 20";
        return false;
    }



    const password=document.getElementById("pwd").value;
    const pwdError=document.getElementById("pwd-error");
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    pwdError.textContent="";

    if(password=="" || !passwordregex.test(password))
    {
        pwdError.textContent="email should be letter,number,symbols with @";
        return false;

    }
           
            

    const address=document.getElementById("address").value;
    const addressError=document.getElementById("address-error");
    

    
    addressError.textContent="";

    if(address=="" )
    {
        addressError.textContent="please update your address";
        return false;

    }


    const email=document.getElementById("email").value;
    const emailError=document.getElementById("email-error");
    
    emailError.textContent="";
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email=="" || !emailregex.test(email))
    {
        emailError.textContent="email should be letter,number,symbols with @";
        return false;

    }


    const phonenumber=document.getElementById("number");
    const pherror= document.getElementById("ph-error");

    pherror.textContent="";
    let phregex = /^\d{10}$/;
    
    if(phonenumber=="" || phregex.test(phonenumber))
    {
        pherror.textContent="should be enter ten degit number";
        return false
    }

    
    


    


    


 return true

}

    
