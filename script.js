let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let h1 = document.querySelector(".h1");
let alert = document.querySelector(".alert");
let setInter = null;
let setTime = null;

let turn = true;
let winning_pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "O";
      turn = false;
    } else {
      box.innerHTML = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

reset_btn.addEventListener("click", () => {
  reset_Game();
});

function reset_Game() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  h1.innerHTML = "Tic Tac Toe";
  console.log("Reset button clicked !");
  alert.style.display = "none";
  clearInterval(setInter);
  clearTimeout(setTime);
}

const checkWinner = () => {
  for (let pattern of winning_pattern) {
    let position_1 = boxes[pattern[0]].innerText;
    let position_2 = boxes[pattern[1]].innerText;
    let position_3 = boxes[pattern[2]].innerText;

    if (position_1 != "" && position_2 != "" && position_3 != "") {
      if (position_1 === position_2 && position_2 === position_3) {
        console.log(`Congradulations '${position_1}' is a Winner !`);
        h1.innerHTML = `Congradulations '${position_1}' is a Winner !`;
        alert.style.display = "block";
        let inter = 10;
        setInter = setInterval(() => {
          alert.innerHTML = `The Game is Automatically Reset in ${inter} Seconds...`;
          inter--;
        }, 1000);

        boxes.forEach((box) => {
          box.disabled = true;
          setTime = setTimeout(() => {
            box.innerText = "";
            h1.innerHTML = "Tic Tac Toe";
            box.disabled = false;
            alert.style.display = "none";
          }, 10000);
        });
      }
    }
  }
};
