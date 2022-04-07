export const ITEM_NAMES = {
    listOfIncome: "listOfIncome",
    listOfExpenses: "listOfExpenses"
}

export const setLocalStorateItem = (itemName, itemValue) => {
    const item = JSON.stringify(itemValue)
    if (typeof item !== "undefined" && item !== "null" && item !== "[object Object]" | item !== "") {
        localStorage.setItem(itemName, item)
    }
}

export const getLocalStorateItem = (itemName) => {
    const item = JSON.parse(localStorage.getItem(itemName))

    return item;
}

export const removeLocalStorateItem = (itemName) => { }

// helpers
export const setListOfIncomes = (val) => {
    setLocalStorateItem(ITEM_NAMES.setListOfIncome, val)
}

export const setListOfExpenses = (val) => {
    setLocalStorateItem(ITEM_NAMES.setListOfExpenses, val)
}

export const getListOfIncomes = () => {
    getLocalStorateItem(ITEM_NAMES.listOfIncome)
}

export const getListOfExpenses = (val) => {
    getLocalStorateItem(ITEM_NAMES.listOfExpenses)
}