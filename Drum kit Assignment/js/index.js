// instructions

// create a button
// add an event listener to it that captures click events
// after testing that it works, try to make it play a sound when its clicked
// sound files are located in the sounds folder

// after you get one button working, try to create some more
// in class i used an array to store the file names, you could do that, or you can do it your own way.

// find the button element from the page
const clapButton = document.getElementById('clap')
const hitButton = document.getElementById('hihat')
const KickButton = document.getElementById('kick')
const openhatButton = document.getElementById('openhat')
const rideButton = document.getElementById('ride')
const snareButton = document.getElementById('snare')
const tinkButton = document.getElementById('tink')
const tomButton = document.getElementById('tom')

// add an event listener to the button, and run the callbackfunction (handleClick) when it is clicked
clapButton.addEventListener('click', handleClick)
hitButton.addEventListener('click', handleClick2)
KickButton.addEventListener('click', handleClick3)
openhatButton.addEventListener('click', handleClick4)
rideButton.addEventListener('click', handleClick5)
snareButton.addEventListener('click', handleClick6)
tinkButton.addEventListener('click', handleClick7)
tomButton.addEventListener('click', handleClick8)

// handleClick function plays an audio sound
function handleClick () {
  const audioFile = new Audio('./sounds/sounds_clap.wav')
  //audioFile.controls = true
  //console.log(audioFile)
  document.body.append(audioFile)
  audioFile.play()
}

function handleClick2 () {
  const audioFile = new Audio('./sounds/sounds_hihat.wav')
  audioFile.controls = true
  //document.body.append(audioFile)
  audioFile.play()
}
function handleClick3 () {
  const audioFile = new Audio('./sounds/sounds_kick.wav')
  audioFile.controls = true
  //console.log(audioFile)
  document.body.append(audioFile)
  audioFile.play()
}
function handleClick4 () {
  const audioFile = new Audio('./sounds/sounds_openhat.wav')
  audioFile.controls = true
  //console.log(audioFile)
  document.body.append(audioFile)
  audioFile.play()
}
function handleClick5 () {
  const audioFile = new Audio('./sounds/sounds_ride.wav')
  audioFile.controls = true
  //console.log(audioFile)
  document.body.append(audioFile)
  audioFile.play()
}
function handleClick6 () {
  const audioFile = new Audio('./sounds/sounds_snare.wav')
  audioFile.controls = true
  //console.log(audioFile)
  document.body.append(audioFile)
  audioFile.play()
}
function handleClick7 () {
  const audioFile = new Audio('./sounds/sounds_tink.wav')
  audioFile.controls = true
  //console.log(audioFile)
  document.body.append(audioFile)
  audioFile.play()
}
function handleClick8 () {
  const audioFile = new Audio('./sounds/sounds_tom.wav')
  audioFile.controls = true
  //console.log(audioFile)
  document.body.append(audioFile)
  audioFile.play()
}
