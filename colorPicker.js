var numOfSq = 6;
var colors = generateRandColors(numOfSq);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSq = 3;
	colors = generateRandColors(numOfSq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSq = 6;
	colors = generateRandColors(numOfSq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//gen all new colors
	colors = generateRandColors(numOfSq);
	//pick new rand color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of all squares
	for (var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];	
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i< squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listeners
	squares[i].addEventListener("click",function(){
		//grab color
		var clickedColor = this.style.backgroundColor;
		//compare color
		if(clickedColor === pickedColor){
			messageDis.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			messageDis.textContent = "Try Again";
		}
	});
			
}

function changeColors(color){
	//loop thru all squares and change color
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandColors (num){
	//make array
	var arr =[];
	//add num rand colors to array
	for (var i = 0; i<num; i++){
		//get random color and push to array
		arr.push(randColor());
	}
	//return array
	return arr;
}

function randColor(){
	//pick a red 0 - 255
	var r = Math.floor(Math.random()*256);
	//pick a green 0 - 255 
	var g = Math.floor(Math.random()*256);
	//pick a blue 0 - 255 
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r +", "+ g + ", " + b +")";
}