let speech;
var inputwords;
var btnLoadWords;
var txtenterword;

function setup() {
	noCanvas();
	speech = new p5.Speech(voiceReady);

	function voiceReady() {
		console.log(speech.voices);
	}
	//speech.setVoice('Xander');
	inputwords = createElement("textarea", "hello");
	createElement("br");
	btnLoadWords = createButton("Load Words");
	inputwords.elt.rows = 20;
	inputwords.elt.cols = 10;
	btnLoadWords.mousePressed(loadWords);
}

function loadWords() {
	inputwords.hide();
	btnLoadWords.hide();
	createElement('h2', 'Study the spelling of this word.');
	txtenterword=createInput();
	txtenterword.focused=true;
}

function mousePressed() {
	
	//speech.speak('Steak.');
}