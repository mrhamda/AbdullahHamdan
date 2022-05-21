
function AskForPermission()
    {
        
        var value = prompt("Whats the password, if you want to return to the home then write HOME");
        if(value == "abdullahhamdanyear6a")
        {
            alert("Loged in");
            return;
        }
        
        if(value == "abdullahhamdanyear6a")
        {
            alert("Loged in");
            return;
        }
        else if( value == "HOME")
        {
            window.location = "index.html";
            return;
        }
        else if(value !="abdullahhamdanyear6a" && value!="HOME") 
        {
            alert("Password incorrect");
            AskForPermission();
        }
        
      
    }