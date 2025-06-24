let display = document.getElementById('display');

function append(value) {
  if (display.textContent === '0') {
    display.textContent = '';
  }
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    let result = eval(display.textContent);
    display.textContent = result;
  } catch {
    display.textContent = 'error';
  }
}

// Keyboard support
document.addEventListener('keydown', function (e) {
  const key = e.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') display.textContent = '0';
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
