const form = document.getElementById("calcForm");
const error = document.getElementById("error");
const historyList = document.getElementById("history");

let history = [];

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  error.textContent = "";

  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const op = document.getElementById("op").value;

  if (a === "" || b === "" || op === "") {
    error.textContent = "Tous les champs sont obligatoires.";
    return;
  }

  if (op === "/" && Number(b) === 0) {
    error.textContent = "Division par zéro interdite.";
    return;
  }

  const result = operations[op](Number(a), Number(b));
  const operationText = `${a} ${op} ${b} = ${result}`;

  history.push(operationText);
  updateHistory();
});

function updateHistory() {
  historyList.innerHTML = "";
  history.forEach(op => {
    const li = document.createElement("li");
    li.textContent = op;
    historyList.appendChild(li);
  });
}
