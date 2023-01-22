


// variables
var dataClear  = document.querySelector("[data-clear]"),
    dataInsert = document.querySelectorAll("[data-insert]"),
    dataCalc   = document.querySelector("[data-calculate]");

// clear input
dataClear.onclick = function() {
  input.value = "";
};

// add input
for (i = 0; i < dataInsert.length; i++) {
  dataInsert[i].onclick = function() {
    input.value += this.textContent;
  };
}

// calculate input
dataCalc.onclick = function() {
  input.value = eval(input.value);
};

// only allow math numbers/keys to be typed in input
$("#input").keydown(function(e) {
  // Allow: backspace, delete, tab, escape, enter and .
  if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 28, 189, 191]) !== -1 ||
      // Allow: Ctrl+A, Command+A
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      ((e.keyCode >= 35 && e.keyCode <= 40)) ||
      // Allow: + sign and * multiply sign
      e.shiftKey && $.inArray(e.keyCode, [187, 56]) !== -1) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault();
  }
});




