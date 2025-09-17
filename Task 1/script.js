function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const display = document.getElementById("display");

  if (!isNaN(key) || "+-*/.".includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
