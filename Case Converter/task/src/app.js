let textArea = document.querySelector(".textarea");
let btnUpperCase = document.querySelector('#upper-case');
let btnLowerCase = document.querySelector('#lower-case');
let btnProperCase = document.querySelector('#proper-case');
let btnSentenceCase = document.querySelector('#sentence-case');
let btnSaveText = document.querySelector('#save-text-file');

btnUpperCase.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase()
})
btnLowerCase.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase()
})
btnProperCase.addEventListener("click", function () {
    textArea.value = properCase(textArea.value);
})
btnSentenceCase.addEventListener("click", function () {
    textArea.value = sentenceCase(textArea.value);
})
btnSaveText.addEventListener("click", function () {
    textArea.value = downloadText(textArea.value);
})


function properCase(value)  {
    let properText = []
    value.split(" ").forEach((str) => {
        if (str !== "") {
            str = str[0].toUpperCase() + str.substring(1)
            properText.push(str)
        } else {
            properText.push("")
        }
    })
    return properText.join(' ')
}

function sentenceCase(value) {
    console.log(value)
    let sentenceCase = []
    value = value.toLowerCase()
    value.split(". ").forEach(  (str) => {
        if (str !== "") {
            str = str.trim()
            str = str[0].toUpperCase() + str.substring(1)
            if (str[str.length - 1] !== '.') {
                sentenceCase.push(str + '. ')
            } else {
                sentenceCase.push(str)
            }
        } else {
            sentenceCase.push("")
        }
    })
    return sentenceCase.join('')
}

function downloadText(value) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(value));
    element.setAttribute('download', 'text.txt');
    element.click();
}
