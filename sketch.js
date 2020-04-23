let speech;

function setup() {
	noCanvas();
	speech=new p5.Speech(voiceReady);
	function voiceReady() {
		console.log(speech.voices);
	}
	//createCanvas(windowWidth, windowHeight);
}

//function draw() {
	//rect(10,10,100,100);
//}

function mousePressed() {
	speech.setVoice('Xander');
	speech.speak('Steak.');
}