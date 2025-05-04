const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertTable = [
    {
        arabic: 1000,
        roman: "M",
    },
    {
        arabic: 900,
        roman: "CM",
    },
    {
        arabic: 500,
        roman: "D",
    },
    {
        arabic: 400,
        roman: "CD",
    },
    {
        arabic: 100,
        roman: "C",
    },
    {
        arabic: 90,
        roman: "XC",
    },
    {
        arabic: 50,
        roman: "L",
    },
    {
        arabic: 40,
        roman: "XL",
    },
    {
        arabic: 10,
        roman: "X",
    },
    {
        arabic: 9,
        roman: "IX",
    },
    {
        arabic: 5,
        roman: "V",
    },
    {
        arabic: 4,
        roman: "IV",
    },
    {
        arabic: 1,
        roman: "I",
    }
]

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
    output.innerText = "";
    return number;
}

const convertNumber = (number) => {
    const convertEl = convertTable.find((el) => number - el.arabic >= 0);

    if (convertEl) {
        output.innerText += convertEl.roman;
        convertNumber(number - convertEl.arabic);
    }
    return;
}

const decimalToRoman = () => {
    const number = parsing();

    if (!number)
        return;
    convertNumber(number);
}

convertBtn.addEventListener("click", decimalToRoman);
