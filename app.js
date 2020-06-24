function GetNum(num) {
    var result = document.getElementById("result")
    result.value += num
}

function clearResult() {
    var result = document.getElementById("result")
    result.value = ""
}

function getResult() {
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function reciprocal() {
    var result = document.getElementById("result")
    result.value = 1/(result.value)
}

function under_root() {
    var result = document.getElementById("result")
    result.value = Math.pow(result.value, 0.5)
}