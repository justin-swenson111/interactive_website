let paragraph = document.getElementById("pg")
let hide = document.getElementById("hideTxt")
let hideSection = document.getElementById("hideSection")
let secret = document.getElementById("secret")

let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let redlbl = document.getElementById("redLabel")
let greenlbl = document.getElementById("greenLabel")
let bluelbl = document.getElementById("blueLabel")
red.value=255
green.value=255
blue.value=255
let colors = document.getElementById("colors")

let layout = document.getElementById("layoutTxt")

let body = document.getElementById("body")
let total = document.getElementById("total")

let fontBtn = document.getElementById("fontbtn")
let colorBtn = document.getElementById("color")
let fontSizeBtn = document.getElementById("size")
let hideBtn = document.getElementById("hideBtn")
let LayoutBtn = document.getElementById("layout")
let darkBtn = document.getElementById("darkmode")
let resetBtn = document.getElementById("Reset")
let randomBtn = document.getElementById("random")

let fontChange = false
let colorChange = false
let sizeChange = false
let hiddenTxt = false
let hiddenElem = false
let darkOn = false

fontBtn.onclick = function(){pgChange("font")};
colorBtn.onclick = function(){pgChange("color")};
fontSizeBtn.onclick = function(){pgChange("size")};

hideBtn.onclick = function(){hideTxt()};
hideBtn.oncontextmenu= function(){hiddenElement()};

red.oninput = function(){bgSlider()}
green.oninput = function(){bgSlider()}
blue.oninput = function(){bgSlider()}

LayoutBtn.onclick= function(){layoutSwitch()}
darkBtn.onclick= function(){dark()}
resetBtn.onclick= function(){reset()}
randomBtn.onclick= function(){random()}

total.ondblclick = function(){dblClick()}

function pgChange(changed){
    if (changed=="font" && !fontChange){
        paragraph.style.fontFamily = 'Georgia,Cambria,Times New Roman,Times,serif'
        fontChange=true
    }
    else if (changed=="font" && fontChange){
        paragraph.style.fontFamily= "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        fontChange=false

    }

    if (changed=="color" && !colorChange){
        paragraph.style.backgroundColor= "blue"
        paragraph.style.color="red"

        colorChange=true

    }
    else if (changed=="color" && colorChange){
        if(!darkOn){
            paragraph.style.backgroundColor= "white"
            paragraph.style.color="black"
        }
        else{
            paragraph.style.backgroundColor= "black"
            paragraph.style.color="white"
        }

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

function hideTxt(){
    if (!hiddenTxt){
        hide.hidden=true
        hiddenTxt=true
    }
    else{
        hide.hidden=false
        hiddenTxt=false
    }
    console.log("hi")
}

function hiddenElement(){
    if (!hiddenElem){
        secret.style.visibility = "visible"
        hiddenElem=true
    }
    else{
        secret.style.visibility = "hidden"
        hiddenElem=false
    }
}

function bgSlider(){
    colors.style.backgroundColor= "rgb(" + red.value + ", " + green.value + ", " + blue.value + ")"
    redlbl.textContent="red: "+ red.value
    greenlbl.textContent="green: "+ green.value
    bluelbl.textContent="blue: "+ blue.value
}
function layoutSwitch(){
    body.classList.toggle("style2")
    console.log(body.classList)
}

function dark(){
    if (!darkOn){
        paragraph.classList.add("darkmode")
        hideSection.classList.add("darkmode")
        colors.classList.add("darkmode")
        layout.classList.add("darkmode")
        total.classList.add("darkmode")
        darkOn=true
    }
    else{
        paragraph.classList.remove("darkmode")
        hideSection.classList.remove("darkmode")
        colors.classList.remove("darkmode")
        layout.classList.remove("darkmode")
        total.classList.remove("darkmode")

        darkOn=false
    }
}
function dblClick(){
    alert("OWWWW!")
}

function reset(){
    fontChange = true
    colorChange = true
    sizeChange = true
    hiddenTxt = true
    darkOn = true
    hiddenElem=true
    hideTxt()
    if (!body.classList.contains("style2")){
        layoutSwitch()
    }
    dark()
    pgChange("font")
    pgChange("color")
    pgChange("size")
    red.value=255
    green.value=255
    blue.value=255
    bgSlider()
    hiddenElement()

    
}
function random(){
    total.classList.add("gross")
    paragraph.classList.add("gross")
    hideSection.classList.add("gross")
    colors.classList.add("gross")
    layout.classList.add("gross")
    setTimeout(function(){
        total.classList.remove("gross")
        paragraph.classList.remove("gross")
        hideSection.classList.remove("gross")
        colors.classList.remove("gross")
        layout.classList.remove("gross")
    }, 5000)
}