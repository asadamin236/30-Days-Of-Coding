let h1 = document.getElementById("h1");

count = 0;
function counter() {
  h1.innerText = count;
}

function increment() {
  count = count + 1;
  counter();
}

function decrement() {
  count = count - 1;
  counter();
}
function reset() {
  count = 0;
  counter();
}
