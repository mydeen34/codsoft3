let exp = '';

function add(val) {
  exp += val;
  document.getElementById('disp').value = exp;
}

function calc() {
  try {
    exp = eval(exp).toString();
    document.getElementById('disp').value = exp;
  } catch {
    document.getElementById('disp').value = 'Error';
    exp = '';
  }
}

function clr() {
  exp = '';
  document.getElementById('disp').value = '';
}
