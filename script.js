let paragraph = document.getElementById("pg")
let hide = document.getElementById("hide")

let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")

let fontBtn = document.getElementById("fontbtn")
let colorBtn = document.getElementById("color")
let fontSizeBtn = document.getElementById("size")
let hideBtn = document.getElementById("hide")
let LayoutBtn = document.getElementById("layout")

let fontChange = false
let colorChange = false
let sizeChange = false

fontBtn.onclick = function(){pgChange("font")};
colorBtn.onclick = function(){pgChange("color")};
fontSizeBtn.onclick = function(){pgChange("size")};

function pgChange(changed){
    if (changed=="font" && !fontChange){
        paragraph.style.fontFamily = 'Georgia,Cambria,Times New Roman,Times,serif'
        fontChange=true
        console.log(fontChange)
    }
    else if (changed=="font" && fontChange){
        paragraph.style.fontFamily= "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        fontChange=false
        console.log(fontChange)

    }

    if (changed=="color" && !colorChange){
        paragraph.style.backgroundColor= "blue"
        paragraph.style.color="red"

        colorChange=true

    }
    else if (changed=="color" && colorChange){
        paragraph.style.backgroundColor= "white"
        paragraph.style.color="black"

        colorChange=false
    }

    if (changed=="size" && !sizeChange){
        paragraph.style.fontSize= "xx-large"
        sizeChange=true
    }
    else if (changed=="size" && sizeChange){
        paragraph.style.fontSize= "medium"
        sizeChange=false
    }

}
