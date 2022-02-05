let ltr
let transparentBtn
let yellowBtn
let grayBtn
let islImg
let words
let wordBox
let submitmobile
let mobilebtn

function setup() {
  noCanvas()
  radio = createRadio();
  radio.parent("#options")
  radio.option('transparent');
  radio.option('yellow');
  radio.option('gray');

  if(displayWidth<displayHeight){
    submitmobile = createInput()
    submitmobile.attribute('placeholder', 'start typing here');
    submitmobile.style('margin-top','1rem')
    submitmobile.parent("#options")
    
  }

}

function mySelectEvent() {
  // transparentBtn.mousePressed(()=>{islImg = "assets/transparent/"+ltr+".png"})
  // yellowBtn.mousePressed(()=>{islImg = "assets/yellow/ISLYellow-"+ltr+".jpg"})
  // grayBtn.mousePressed(()=>{islImg = "assets/gray/ISLGrey-"+ltr+".jpg"})
 
}


function keyTyped(){
  // console.log(key)
  ltr = key
  islImg = "assets/transparent/"+ltr+".png"

  if(key === " "){
    makeSpace = createImg("assets/space.png")
    makeSpace.addClass("words")
    makeSpace.parent("#textbox")
  } else if(key == "Enter") {
    lineBreak = createP(" ")
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
    makeWords.parent("#textbox")
    words = selectAll(".words")
    console.log(words.length)
    // if(words.length>0){
    //   console.log(words[words.length-1].width)
      // wordBox = select("#textbox")
      //   wordBox.style("width",  700/words.length+"px")
      
     
    // }
  
  }


}

function keyPressed(){
  if(key == "Backspace"){
    words = selectAll(".words")
    if(words.length>0){
      
      words[words.length-1].remove()
      //wordBox.style("max-width",  700*words.length+"px")
    }
}
}
