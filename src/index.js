module.exports = function toReadable (number) {
    const listOfNumbers = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20ty': 'twenty',
        '30ty': 'thirty',
        '40ty': 'forty',
        '50ty': 'fifty',
        '60ty': 'sixty',
        '70ty': 'seventy',
        '80ty': 'eighty',
        '90ty': 'ninety',
        'hundred': 'hundred',
    };

    const getFirstNumber = (number) => {
        return listOfNumbers[String(number)];
    }

    const helperSecondNumber = (number, text) => {
        return String(number)[1] === '0' ? listOfNumbers[text] : listOfNumbers[text] + ' ' + listOfNumbers[String(number)[1]];
    }

    const getSecondNumber = (number) => {
        if(number < 30) return helperSecondNumber(number, '20ty');
        if(number < 40) return helperSecondNumber(number, '30ty');
        if(number < 50) return helperSecondNumber(number, '40ty');
        if(number < 60) return helperSecondNumber(number, '50ty');
        if(number < 70) return helperSecondNumber(number, '60ty');
        if(number < 80) return helperSecondNumber(number, '70ty');
        if(number < 90) return helperSecondNumber(number, '80ty');
        if(number < 100) return helperSecondNumber(number, '90ty');
    }

    const getThirdNumber = (number) => {
        const answer = String(number)[1] === '0' && String(number)[2] === '0'
            ? listOfNumbers[String(number)[0]] + ' ' + listOfNumbers['hundred']
            : Number(String(number).slice(1)) <= 19
                ? listOfNumbers[String(number)[0]] + ' ' + listOfNumbers['hundred'] + ' ' + getFirstNumber(Number(String(number).slice(1)))
                : listOfNumbers[String(number)[0]] + ' ' + listOfNumbers['hundred'] + ' ' + getSecondNumber(Number(String(number).slice(1)));
        return answer;
    }

    if (number <= 19) {
        return getFirstNumber(number);
    } else if ( number > 19 && number < 100) {
        return getSecondNumber(number);
    } else if (number >= 100) {
        return getThirdNumber(number);
    }
}
