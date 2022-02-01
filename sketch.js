let ltr
let transparentBtn
let yellowBtn
let grayBtn
let islImg
function setup() {
  noCanvas()
  radio = createRadio();
  radio.parent("#options")
  radio.option('transparent');
  radio.option('yellow');
  radio.option('gray');

}

function mySelectEvent() {
  // transparentBtn.mousePressed(()=>{islImg = "assets/transparent/"+ltr+".png"})
  // yellowBtn.mousePressed(()=>{islImg = "assets/yellow/ISLYellow-"+ltr+".jpg"})
  // grayBtn.mousePressed(()=>{islImg = "assets/gray/ISLGrey-"+ltr+".jpg"})
 
}


function keyTyped(){
  console.log(key)
  ltr = key
  islImg = "assets/transparent/"+ltr+".png"

  if(key === " "){
    makeSpace = createImg("assets/space.png")
    makeSpace.addClass("words")
    makeSpace.parent("#container")
  } else if(key == "Enter") {
    lineBreak = createP("")
    lineBreak.addClass("words")
    lineBreak.parent("#container")
  } else {
    if(radio.value() === "gray"){
      islImg = "assets/gray/ISLGrey-"+ltr+".jpg"
    } else if(radio.value() === "yellow") {
      islImg = "assets/yellow/ISLYellow-"+ltr+".jpg"
    } else {
      islImg = "assets/transparent/"+ltr+".png"

    }
    makeWords = createImg(islImg)
    makeWords.addClass("words")
    makeWords.parent("#container")

  }


}

function keyPressed(){
  if(key == "Backspace"){
    words = selectAll(".words")
    if(words.length>0){
      
      words[words.length-1].remove()
    }
}
}
