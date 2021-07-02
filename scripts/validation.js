 let intern = [
     {
          Username : 'abc',
          password : '123'
     }
 ];

 function validate()
 {
    //var un = document.forms.Uname;
    var un = document.getElementById("Uname").value;
    var pwd = document.getElementById("Pass").value;
    //var pwd = document.forms.Pass
     if(un === intern['0']['Username'] && pwd === intern['0']['password'])
       {
           return true;
       }
       alert('Incorrect');
       return false;
 }

 console.log(intern['0']['Username']);
