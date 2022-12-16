"use strict"
const sprites={
    background:background,
    balloon:balloon,
    blue_ball:blue_ball,
    blue_can:blue_can,
    cannon_barrel:cannon_barrel,
    cannon_blue:cannon_blue,
    cannon_green:cannon_green,
    cannon_red:cannon_red,
    green_ball:green_ball,
    red_ball:red_ball,
    red_can:red_can,
    scorebar:scorebar,
    game_over_click:game_over_click,
    game_over_tap:game_over_tap
}
const mouse={
    position:new Vector()
}
window.addEventListener("mousemove",function(event)
{
    mouse.position={x:event.pageX,y:event.pageY}
    
})
function Background()
{
    this.position=new Vector()
    this.origin=new Vector()
    this.rotation=0
}
Background.prototype.draw=function()
{
    game.drawImage(sprites.background,this.position,this.origin,this.rotation)
}
function Vector(x=0,y=0)
{
this.x=x
this.y=y
}
function seal(obj)
{
    if(typeof obj != "object")
    console.error("should be type object")
    if(Object.isSealed())
    {
    Object.seal(obj)
    }
}
function Canvas()
{
    this.canvas=document.querySelector("#canvas")
    this.context=this.canvas.getContext("2d")
    this.width=this.canvas.width
    this.height=this.canvas.height
}
Canvas.prototype.clear=function()
{
    this.context.clearRect(0,0,this.width,this.height)
}
function Ball()
{
this.curr_color=sprites.blue_ball
this.position=new Vector()
this.origin=new Vector()
this.velocity=new Vector()
this.rotation=0
}
Ball.prototype.draw=function()
{
    Game.prototype.drawImage(this.curr_color,this.position,this.origin,this.rotation)
}
function Cannon()
{
this.position=new Vector(72,405)
this.origin=new Vector(34,34)
this.curr_color=sprites.cannon_red
this.curr_position=new Vector(55,388)
this.rotation=0
}
Cannon.prototype.draw=function()
{
    game.drawImage(sprites.cannon_barrel,this.position,this.origin,this.rotation)
    game.drawImage(this.curr_color,this.curr_position,{x:0,y:0},0)
}
Cannon.prototype.update=function()
{
    const opposite=mouse.position.x - this.position.x
    const adjacent=mouse.position.y -this.position.y
    this.rotation=Math.atan2(adjacent,opposite)
}
function Game()
{
this.ball=new Ball()
this.cannon=new Cannon() 
this.background=new Background()
this.width=canvas.width
this.height=canvas.height
}
Game.prototype.start=function()
{
    this.seal()
}
Game.prototype.seal=function()
{
seal(sprites)
}
Game.prototype.draw=function()
{
this.background.draw()
this.cannon.draw()
}
Game.prototype.update=function()
{
this.cannon.update()
}
Game.prototype.drawImage=function(sprite,position,origin,rotation)
{
canvas.context.save()
canvas.context.translate(position.x,position.y)
canvas.context.rotate(rotation)
canvas.context.drawImage(sprite,0,0,sprite.width,sprite.height,-origin.x,-origin.y,sprite.width,sprite.height)
canvas.context.restore()
}
let game;
let canvas;
window.addEventListener("keydown",function(event)
{
let key=event.key.toLowerCase()
if(key==="r")
{
game.cannon.curr_color=sprites.cannon_red
}
else if(key==='g')
{
game.cannon.curr_color=sprites.cannon_green
}
else{
game.cannon.curr_color=sprites.cannon_blue
}
})
window.addEventListener("load",function()
{
canvas=new Canvas()
game=new Game()
animate(0)
})
function animate()
{
requestAnimationFrame(animate)
canvas.clear()
game.start()
game.draw()
game.update()
}

