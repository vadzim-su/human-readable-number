module.exports = function toReadable(number) {
    number = String(number);

    const numberByRanks = divideNumberByRanks(number, 3);
    return numberByRanks
        .map((rank, index) => {
            return `${writeNumber(rank)} ${
                RANKS_OBJECT[numberByRanks.length - index]
            }`;
        })
        .join(" ")
        .trim();
};

function divideNumberByRanks(str, count) {
    return str
        .split("")
        .map((char, index) => {
            if ((str.length - index) % count === 0) {
                char = " " + char;
            }
            return char;
        })
        .join("")
        .trim()
        .split(" ");
}

function writeNumber(num) {
    const numberArray = num.split("");
    switch (numberArray.length) {
        case 1:
            return ONE_RANK_NUMBERS[num];
        case 2:
            return writeTwoCharNumber(num);
        case 3:
            const lastNumbers = num.slice(1);
            const hundreds = `${ONE_RANK_NUMBERS[num[0]]} hundred`;
            if (+lastNumbers) {
                return `${hundreds} ${writeTwoCharNumber(lastNumbers)}`;
            }
            return hundreds;
    }
}

function writeTwoCharNumber(num) {
    if (num < 10) {
        return ONE_RANK_NUMBERS[+num];
    } else if (num >= 10 && num < 20) {
        return SECOND_DECADE_NUMBERS[+num];
    } else if (!(num % 10)) {
        return DECADE_NUMBERS[num[0]];
    } else {
        return `${DECADE_NUMBERS[num[0]]} ${ONE_RANK_NUMBERS[num[1]]}`;
    }
}

const ONE_RANK_NUMBERS = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};

const RANKS_OBJECT = {
    0: "",
    1: "",
    2: "thousand",
    3: "million",
    4: "billion",
    5: "trillion",
};

const SECOND_DECADE_NUMBERS = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};

const DECADE_NUMBERS = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};
