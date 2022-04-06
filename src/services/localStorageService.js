export const ITEM_NAMES = {
    listOfIncome: "listOfIncome",
    listOfExpenses: "listOfExpenses"
}

export const setLocalStorateItem = (itemName, itemValue) => {
    const item = JSON.stringify(itemValue)
    if (typeof item !== "undefined" && item !== "null" && item !== "[object Object]") {
        localStorage.setItem(itemName, item)
    }
}

export const getLocalStorateItem = (itemName) => {
    const item = JSON.parse(localStorage.getItem(itemName))

    return item;
}

export const removeLocalStorateItem = (itemName) => { }

// helpers
export const setListOfIncome = () => { }
export const setListOfExpenses = () => { }