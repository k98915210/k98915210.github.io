//============================Fetch canvas===============================
var canvas = document.getElementById('canvas');
var World = Matter.World;

//===========================Setup Matter JS===============================
var engine = Matter.Engine.create();
var world = engine.world;
var render = Matter.Render.create({
	canvas: canvas,
	engine: engine,
	options: {
		width: window.innerWidth,
		height: window.innerHeight,
		background: 'transparent',
		wireframes: false,
		showAngleIndicator: false
	}
});

//===========================Start Engine===============================
Matter.Engine.run(engine);
Matter.Render.run(render);

//===========================Adjust Canvas Size==============================
window.addEventListener('resize', () => { 
	render.canvas.width = window.innerWidth;
	render.canvas.height = window.innerHeight;
	Matter.Body.set(ground, "position", {x: 0, y: window.innerHeight})
	Matter.Body.set(rightWall, "position", {x: window.innerWidth, y: window.innerHeight})
});

//===========================Mouse Interaction===============================
var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
	element: canvas,
	constraint: {
		render: {
			visible: false
		},
		stiffness:0.8
	}
});
Matter.World.add(world, mouseConstraint);

//===========================Container Bodies===============================
//ground
var ground = Matter.Bodies.rectangle(0, window.innerHeight, 1980*2, 20, {
	isStatic: true, 
	render: {
		visible: false
	}
});

Matter.World.add(world, ground);

//left wall
var leftWall = Matter.Bodies.rectangle(0, 0, 1, window.innerHeight*2, {
	isStatic: true, 
	render: {
		visible: false
	}
});

Matter.World.add(world, leftWall);

//right wall
var rightWall = Matter.Bodies.rectangle(window.innerWidth, 0, 1, window.innerHeight*2, {
	isStatic: true, 
	render: {
		visible: false
	}
});

Matter.World.add(world, rightWall);

//============================Like Bodies==============================
function addLikes() {

	var like = Matter.Bodies.circle(window.innerWidth/2, 50, size/2.2, {
		density: 0.04,
		friction: 0.3,
		frictionAir: 0.00001,
		restitution: 0.6,
		render: {
			sprite: {
				texture: './images/like.png',
				xScale: 0.2*(size/100),
				yScale: 0.2*(size/100)
			}
		}
	});

	World.add(engine.world, like);
	console.log("add");

	updateVisitCount()

}

function dropLikes(){
	document.getElementById("drop_button").src = "./images/drop_on.png";
	document.getElementById("drop_button").onclick = function() {holdLikes()};
	World.remove(world, ground);
	console.log("drop");
}

function holdLikes(){
	document.getElementById("drop_button").src = "./images/drop_off.png";
	document.getElementById("drop_button").onclick = function() {dropLikes()};
	World.add(world, ground);
	console.log("hold");
}


