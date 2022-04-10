
export const onInputMaxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
}

export const sumOfArrayOfNumbers = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}


export const calcExpensePercentage = (totalIncome, expense) => {
    if (expense && totalIncome != 0) {
        const x = ((100 * expense) / totalIncome)
        if (x > 1) {
            return x.toFixed(0)
        }
        return x.toFixed(1)
    }
}

export const formatNumberAsCurrency = (num) => {
    const currency = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

    return currency
}
