function generatePassword() {
  const pinCode = Math.floor(Math.random() * 100000);
  const pinCodeString = pinCode.toString();
  if (pinCodeString.length <= 4) {
    generatePassword();
  } else {
    return pinCode;
  }
}

document.querySelector(".generate-btn").addEventListener("click", () => {
  const getCode = generatePassword();
  document.querySelectorAll("#input-generate").value = getCode;
});

const numCode = document.querySelectorAll(".button");
for (const code of numCode) {
  code.addEventListener("click", () => {
    const inputField = document.querySelectorAll("#inputTwo").value;
    if (code.innerHTML == "C") {
      inputField[1].value = "";
    } else if (code.innerHTML === "&lt;") {
      inputField[1].value = inputField[1].value.slice(0, -1);
    } else {
      inputField[1].value = inputField[1].value + code.innerHTML;
    }
  });
}

document.querySelector('button[type="submit"').addEventListener("click", () => {
  const disVal = document.querySelectorAll(".notify");
  const genValueOne = document.querySelector("#input-generate").value;
  const genValueTwo = document.querySelector("#inputTwo").value;
  if (genValueOne == genValueTwo) {
    //   disVal[0].style.display = 'none'
    console.log("done");
  }
});
