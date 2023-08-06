let personagem
let mar
let comida
const tamanho = 64
const velocidade = 64
let andarx = 0
let andary = 0
let botao



function setup() {
  createCanvas(576,576)
  personagem = loadImage('peixinho.png')
  mar = loadImage('fundo.png')
  comida = loadImage('comidinha.png')
}


function draw() {
  background(220);
  if(andarx < 0){
    andarx = 0
     }
  if(andary < 0){
    andary = 0
     }
  if(andarx > tamanho*8){
    andarx = tamanho*8
     }
  if(andary > tamanho*8){
    andary = tamanho*8
     }

  
  for (let x = 0; x < 9; x++){
    for (let y = 0; y < 9; y++){
  image(mar,x*tamanho,y*tamanho,tamanho,tamanho) 
  }
  }
  image(personagem,andarx,andary,tamanho,tamanho)
  image(comida,509,509,tamanho,tamanho)

 
  
  if(andarx === tamanho*8 && andary === tamanho*8){
    rect(160,160,256,256)
    textSize(35)
    text('Ganhou!',200,300)
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop ()
  }

}


function reset (){
  andarx = 0
  andary = 0
  botao.remove()
  loop()
}
function keyPressed (){
  if(keyIsDown(DOWN_ARROW)){
    andary += velocidade
     }
  
  if(keyIsDown(UP_ARROW)){
    andary -=velocidade
     }
  
  if(keyIsDown(LEFT_ARROW)){
     andarx -= velocidade
     }

  if(keyIsDown(RIGHT_ARROW)){
     andarx += velocidade
     }
}
