
export const onInputMaxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
}

export const sumOfArrayOfNumbers = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}
