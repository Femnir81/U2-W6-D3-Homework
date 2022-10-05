let colors = ["red", "darkblue", "darkgreen", "darkviolet", "black"]
let i = 0

function changeColor() {
    document.querySelector('h1').style.color = colors[i]
    i++
    if (i == colors.length) {
        i = 0
    }
}