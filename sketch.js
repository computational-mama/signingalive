let ltr

function setup() {
  noCanvas()
  
}

function draw() {
  background(220);
}

function keyTyped(){
  console.log(key)
  ltr = key
  
  if(key === " "){
    makeSpace = createImg("assets/space.png")
    makeSpace.addClass("words")
    makeSpace.parent("#container")
  } else if(key == "Enter") {
    lineBreak = createP("")
    lineBreak.addClass("words")
    lineBreak.parent("#container")
  } else {
    makeWords = createImg("assets/"+ltr+".png")
    makeWords.addClass("words")
    makeWords.parent("#container")

  }
  
}

function keyPressed(){
  if(key == "Backspace"){
    words = selectAll(".words")
   words[words.length-1].remove()
}
}
