
    function contact() {
        var name = document.forms["RegForm"]["Name"];
        var email = document.forms["RegForm"]["EMail"];
        var phone = document.forms["RegForm"]["Telephone"];
        var address = document.forms["RegForm"]["Address"];
  
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
  
        if (address.value == "") {
            window.alert("Please enter your address.");
            address.focus();
            return false;
        }
  
        if (email.value == "") {
            window.alert(
            "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
  
        if (phone.value == "") {
            window.alert(
              "Please enter your telephone number.");
            phone.focus();
            return false;
        }
  
       
  
       
        return true;
    }
