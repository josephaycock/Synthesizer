let synth = new Tone.PolySynth(Tone.Synth);
let bend = new Tone.PitchShift();

bend.pitch = 0;
synth.connect(bend);
bend.toDestination();

let notes = {
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
}

function setup() {
  createCanvas(400, 400);

  pitchSlider = createSlider(0, 12, 0, 0.1);
  pitchSlider.position (120, 200);
  pitchSlider.mouseMoved(()=> bend.pitch = pitchSlider.value());
}

function keyPressed(){
  let playNotes = notes[key];
  synth.triggerAttack(playNotes);
}

function keyReleased(){
  let playNotes = notes[key];
  synth.triggerRelease(playNotes,'+0.03');
}

function draw() {
  background(200, 300, 100);
  textSize(20);
  text ('press A through K for synth', 75, 50)
  textSize(15);
  text ('pitch shift (0-12)', 140, 190)
}