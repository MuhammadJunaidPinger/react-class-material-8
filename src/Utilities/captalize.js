function capitalFirstLetter (text) {
    return text.split(" ").map(item => {
        let itemSplitted = item.split("")
        itemSplitted[0] = itemSplitted[0].toUpperCase()
        return itemSplitted.join("")
    }).join(" ")
}

function capitalAllLetters(text) {
    return text.toUpperCase()
}

function mainFunction() {
    alert("wowo")
}

export {
    capitalFirstLetter,
    capitalAllLetters
}

export default mainFunction