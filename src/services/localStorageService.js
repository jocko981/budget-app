export const LOCAL_STORAGE_ITEM_NAMES = {
    listOfIncome: "listOfIncome",
    listOfExpenses: "listOfExpenses"
}

export const setLocalStorateItem = (itemName, itemValue) => {
    const item = JSON.stringify(itemValue)
    if (typeof item !== "undefined" && item !== "[object Object]" | item !== "") {
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
    setLocalStorateItem(LOCAL_STORAGE_ITEM_NAMES.listOfIncome, val)
}

export const setListOfExpenses = (val) => {
    setLocalStorateItem(LOCAL_STORAGE_ITEM_NAMES.listOfExpenses, val)
}

export const getListOfIncomes = () => {
    return getLocalStorateItem(LOCAL_STORAGE_ITEM_NAMES.listOfIncome)
}

export const getListOfExpenses = (val) => {
    return getLocalStorateItem(LOCAL_STORAGE_ITEM_NAMES.listOfExpenses)
}