let ilkSayi = 0;
const increamentText = document.getElementById("counter");
const saveText = document.getElementById("countersave");


console.log(ilkSayi);

function increament () {
    ilkSayi++;
    increamentText.innerHTML = ilkSayi;
}

function save () {
    let girisStr = ilkSayi + "-";
    saveText.innerHTML += girisStr;
    increamentText.innerHTML = 0;
    ilkSayi = 0;
}