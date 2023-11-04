const mydiv = document.getElementById("lform");
mydiv.addEventListener("submit", calculateLove);

function calculateLove(e) {
    e.preventDefault();
    const name1 = document.getElementById("name").value;
    const name2 = document.getElementById("text").value;

    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
    } else {
        const lovePercentage = Math.floor(Math.random() * 100);

        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2}'s Lover percentage: ${lovePercentage}`;

        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a great match, dude..";
        } else if (lovePercentage >= 30 && lovePercentage <= 75) {
            result.innerHTML += "<br> Have hope yet";
        } else {
            result.innerHTML += "<br> Match for each other";
        }
    }
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", Reset);

function Reset() {
    document.getElementById("name").value = "";
    document.getElementById("text").value = "";

    const result = document.getElementById("result");
    result.innerHTML = "Result: ";
}
