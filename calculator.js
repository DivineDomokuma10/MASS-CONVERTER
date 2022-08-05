var firstinput = document.querySelector ("#firstinput")
var secondinput = document.querySelector ("#secondinput")
var buttonI = document.querySelector ("#buttonI")
var buttonII = document.querySelector ("#buttonII")
var firstdiv = document.querySelector ("#firstdiv")
var seconddiv = document.querySelector ("#seconddiv")


firstdiv.style.paddingLeft = "2%"
firstdiv.style.paddingTop = "2%"
firstdiv.style.fontWeight = "bold"
firstdiv.style.display = "flex"
firstdiv.style.alignItems = "center"

seconddiv.style.paddingLeft = "2%"
seconddiv.style.paddingTop = "2%"
seconddiv.style.fontWeight = "bold"
seconddiv.style.display = "flex"
seconddiv.style.alignItems = "center"

buttonI.onclick = function(){
    var convert = firstinput.value / 1000
    firstdiv.innerHTML = convert + " " + "gram"
}
buttonII.onclick = function(){
    var convertII = secondinput.value * 1000
    seconddiv.innerHTML = convertII
}

firstinput.addEventListener ('focus', function(){
    firstinput.style.backgroundColor = "blue"
    firstinput.style.color = "white"
})
firstinput.addEventListener ('blur', function(){
    firstinput.style.backgroundColor = "white"
})