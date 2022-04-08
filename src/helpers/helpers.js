
export const onInputMaxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
}

export const onInputonlyNumbersCheck = (e) => {
    console.log(e);
    if (e.target.validity.valid || e.target.value === '') {
        e.preventDefault();
        e.target.value = e.target.value.slice(0, e.target.value.length + 1)
    }
}