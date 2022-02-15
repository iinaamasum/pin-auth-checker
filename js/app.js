function generatePassword() {
  const pinCode = Math.floor(Math.random() * 100000);
  const pinCodeString = pinCode + "";
  if (pinCodeString.length == 5) {
    return pinCode;
  } else {
    generatePassword();
  }
}

document.querySelector(".generate-btn").addEventListener("click", function () {
  let getCode = generatePassword();
  while (getCode == undefined) {
    getCode = generatePassword();
  }
  document.querySelector("#input-generate").value = getCode;
  document.querySelector("#inputTwo").value = "";
});

const numCode = document.querySelectorAll(".button");
console.log(numCode);
for (const code of numCode) {
  code.addEventListener("click", function () {
    const inputField = document.querySelector("#inputTwo");
    if (code.innerHTML == "C") {
      inputField.value = "";
    } else if (code.innerHTML === "&lt;") {
      inputField.value = inputField.value.slice(0, -1);
    } else {
      inputField.value = inputField.value + code.innerHTML;
    }
  });
}

const disVal = document.querySelectorAll(".notify");
disVal[0].style.display = "none";
disVal[1].style.display = "none";
let count = 3;
document.querySelector('button[type="submit"').addEventListener("click", () => {
  const genValueOne = document.querySelector("#input-generate").value;
  const genValueTwo = document.querySelector("#inputTwo");
  if (count == 1) {
    document.querySelector('button[type="submit"').setAttribute = "disabled";
    genValueTwo.value = "Lost your 3 try";
  } else if (genValueOne === genValueTwo.value) {
    disVal[0].style.display = "none";
    disVal[1].style.display = "block";
    count = 3;
  } else if (genValueOne != genValueTwo.value) {
    disVal[1].style.display = "none";
    disVal[0].style.display = "block";
    count--;
    document.getElementById("try").innerText = count;
  }
});
