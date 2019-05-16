const game = {};
game.elements = {};
game.elements.fild = document.querySelector('.game .fild');
game.elements.balls = document.querySelectorAll('.game .fild .ball');
game.elements.catchedBalls = document.querySelector('.game .catchedBalls')
// game.coordinate = {};
// game.coordinate.fildX = game.elements.fild.getBoundingClientRect().x;
// game.coordinate.fildY = game.elements.fild.getBoundingClientRect().y;
game.method = {};
game.method.move = function (element) {setInterval(() => {
	element.style.cssText = `margin-left: ${Math.random()*400}px;
							margin-top:${Math.random()*500}px`;
}, 1000);
};
game.method.cathBall = function(element){
	if(!element.classList.contains("ball")){
		let el = document.createElement('div');
		el.className = `${event.target.className}`;
		game.elements.fild.removeChild(event.target);
		game.elements.catchedBalls.appendChild(el);
	}
}	
game.elements.balls.forEach(game.method.move);
game.elements.fild.addEventListener("click", (event) =>{
	let el = document.createElement('div');
		el.className = `${event.target.className}`;
	game.elements.fild.removeChild(event.target);
	game.elements.catchedBalls.appendChild(el);
	if(game.elements.catchedBalls.childElementCount == 4){
		let gBall = document.createElement('div');
		gBall.className = "green ball";
		let rBall = document.createElement('div');
		rBall.className = "red ball";
		let bBall = document.createElement('div');
		bBall.className = "blue ball";
		let yBall = document.createElement('div');
		yBall.className = "yelow ball";
		game.elements.fild.appendChild(gBall);
		game.elements.fild.appendChild(rBall);
		game.elements.fild.appendChild(bBall);
		game.elements.fild.appendChild(yBall);
		let newBals = game.elements.fild.querySelectorAll(".game .fild .ball")
		newBals.forEach(game.method.move);
		game.elements.catchedBalls.querySelector(".catchedBalls .green").remove()
		game.elements.catchedBalls.querySelector(".catchedBalls .red").remove()
		game.elements.catchedBalls.querySelector(".catchedBalls .blue").remove()
		game.elements.catchedBalls.querySelector(".catchedBalls .yelow").remove()
	}
})