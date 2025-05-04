const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const parsing = () => {
    const number = parseInt(input.value);

    if (!input.value || isNaN(input.value)) {
        output.innerText = "Please enter a valid number";
        return NaN;
    }
    else if (number <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return NaN;
    }
    else if (number >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return NaN;
    }
    return number;
}

const decimalToRoman = () => {
    let number = parsing();

    if (!number)
        return ;
    output.innerText = "valid";
}

convertBtn.addEventListener("click", decimalToRoman);
