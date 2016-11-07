var func = function func() {
if (document.getElementById('t1').innerHTML === 'Welcome to our Book Store') {
  document.getElementById('t1').innerHTML = 'Read More Books';
}
else {
  document.getElementById('t1').innerHTML = 'Welcome to our Book Store'
}
}

document.getElementById('t1').onclick = func;