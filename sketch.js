var colors = "6f1d1b-bb9457-432818-99582a-ffe6a7".split("-").map(a=>"#"+a)
var nose_colors = ["#FAEBCD"];
var balls = []
var ball
class ball_class{
  constructor(args){
    this.p = args.p || {x:width/2,y:height}/2;
    this.r = args.r || random(50,120)
    this.color = args.color || random(colors)
    this.v = args.v || {x:random(-2,2),y:random(-2,2)}
    this.nose_color = args.nose_color || random(nose_colors)
    this.b = 100
  }
  draw(){
    noStroke()
    //   カオ
    fill(this.color);
rect(this.p.x - this.b/4, this.p.y - this.b / 4, this.b / 4, this.b / 4);
arc(this.p.x, this.p.y - this.b / 4, this.b / 2, this.b / 2, PI, PI + HALF_PI, PIE);
arc(this.p.x, this.p.y - this.b / 4, this.b / 2, this.b / 2, PI + HALF_PI, TWO_PI, PIE);

// 鼻子
fill(colors);
arc(this.p.x - this.b / 4, this.p.y - this.b / 4, this.b / 2, this.b / 2, HALF_PI, PI, PIE);
fill("#263752");
arc(this.p.x - this.b / 2, this.p.y - this.b / 4, this.b / 8, this.b / 8, PI, TWO_PI, PIE);

// 腳
fill("#263752");
arc(this.p.x - this.b / 4, this.p.y + this.b / 1.5 , this.b / 4, this.b / 4, PI, PI + HALF_PI, PIE);

// 身體
fill("#fca311");
rect(this.p.x - this.b / 4, this.p.y, this.b / 2, this.b / 1.5);
arc(this.p.x + this.b / 4, this.p.y + this.b / 1.5, this.b, this.b, PI + HALF_PI, TWO_PI, PIE);

// 耳朵
fill("#ffcd77");
rect(this.p.x, this.p.y - this.b / 4, this.b / 4, this.b / 3);
arc(this.p.x + this.b / 8, this.p.y - this.b / 4 + this.b / 3, this.b / 4, this.b / 4, PI, TWO_PI, PIE);

// 尾巴
fill("#ffcd77");
arc(this.p.x + this.b / 4 + this.b / 2, this.p.y + this.b / 1.5, this.b / 6, this.b / 6, PI, TWO_PI, PIE);

// 嘴
fill("#fef9ef");
circle(this.p.x - this.b / 6, this.p.y - this.b / 4, this.b / 18);

  }
  update(){
   
      this.p.x=this.p.x+this.v.x
      this.p.y=this.p.y+this.v.y

      if(this.p.x<0){
        this.v.x=-this.v.x}
      if(this.p.x>width){
         this.v.x=-this.v.x}
      if(this.p.y<0){
        this.v.y=-this.v.y}
      if(this.p.y>height){
         this.v.y=-this.v.y}

      }
      isBallInRange() {
        let d = dist (mouseX,mouseY,this.p.x,this.p.y)
            if(d<this.b){
            return true
            }
            else{
            return false
            }
          }
}


    

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 0; i < 150; i++){
    ball = new ball_class({
      v: {x: random(-2, 2), y: random(-2, 2)},
      p: {x: random(0, width), y:random(0,height)},
      a: {x: 0, y: 0}
     
     
    })
    balls.push(ball)
  }
}
var score=0
function draw() {
  background("#4f772d")
  fill(0)
  textSize(55)
  text("小狗捕捉數:"+score,50,80)
  fill(ball.color)
  for(j = 0; j < balls.length; j++){
    ball = balls[j]
    ball.draw()
    ball.update()
    if(ball.isBallInRange()){
    ball.v.x=ball.v.x+0.8
    ball.v.y=ball.v.y+0.8
    }
   
  }
}

function mousePressed(){
  //ball = new ball_class({
    //v: {x: random(-2, 2), y: random(-2, 2)},
    //p: {x:mouseX, y:mouseY},
    //a: {x: 0, y: 0}
    
   
  //})
  //balls.push(ball)
  for(let ball of balls){
    if(ball.isBallInRange()){
      balls.splice(balls.indexOf(ball),1)
      score=score+1
    }
  }
  fill("#f00")
  textSize(70)
  text(score,50,0)
}