var sbmtFrm = function sbmtFrm() {
  alert ("submit clicked")

  var pass1=document.getElementById('pass1').value
  var pass2=document.getElementById('pass2').value
  var country = document.getElementById('country').value
  var phoneNo = document.getElementById('phone').value
  var username = document.getElementById('username').value
console.log (username.indexOf(" "))

  if (pass1 !== pass2) {
    document.getElementById('msg').innerHTML = "Passwords don't match";
    document.getElementById('msg').style.backgroundColor = "red";
  }
  else if (pass1.length < 6) {
    document.getElementById('msg').innerHTML = 'Too short password';
    document.getElementById('msg').style.backgroundColor = "red";
  }
  else if (country !== 'Israel' && country !== 'USA' ) {
    document.getElementById('msg').innerHTML = 'Country not right';
    document.getElementById('msg').style.backgroundColor = "red";
  }
  else if (phoneNo.length>15) {
    document.getElementById('msg').innerHTML = 'Phone Number too long';
    document.getElementById('msg').style.backgroundColor = "red";
  }
  else if (username.indexOf(" ")>=0) {
    document.getElementById('msg').innerHTML = 'Username should not contain spaces';
    document.getElementById('msg').style.backgroundColor = "red";
  }
  else{
    document.getElementById('msg').innerHTML = 'Submit successful';
    document.getElementById('msg').style.backgroundColor = "green"; 
  }

}

document.getElementById("submit").onclick = sbmtFrm;