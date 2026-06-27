const submit_button = document.getElementById("submit-button")
const inputs = document.getElementsByTagName("input")
const next_button = document.getElementById('next-button');
const warning_text = document.getElementById("warning-text")
const input_name = document.getElementById("input-name")
const input_age = document.getElementById("input-age")
const sound_evaluation = document.getElementById("sound-evaluation")
const play_sound = document.getElementById("play-sound")
const unit_evaluation = document.getElementById("unit-evaluation")
const header = document.getElementById("header")
const playAudio = document.getElementById("play-audio")
const volumeAdjustmentAudio = document.getElementById("volume-adjustment-audio")
let answer_list = {"name":"","0":"","1":"","2":"","3":""}

input_name.addEventListener("input", function (e) {
  answer_list["name"] = e.target.value
})
function judge() {
  all_answered = answer_list["name"]!=""&&answer_list["0"]!="";
  if (all_answered) {
    next_button.disabled = false;
    next_button.style.opacity = "1";
    warning_text.style.display="none"
  }
  else {
    next_button.disabled = true;
    next_button.style.opacity = "0.5";
    warning_text.style.display="block"
  }
}

function judge2() {
  all_answered = answer_list["1"]!=""&&answer_list["2"]!=""&&answer_list["3"];
  if (all_answered) {
    submit_button.disabled = false;
    submit_button.style.opacity = "1";
    warning_text.style.display="none"
  }
  else {
    submit_button.disabled = true;
    submit_button.style.opacity = "0.5";
    warning_text.style.display="block"
  }
}
function putData(quesNum, ansNum) {
  answer_list[`${quesNum}`] = ansNum;
  judge()
}
function putData2(quesNum, ansNum) {
  answer_list[`${quesNum}`] = ansNum;
  judge2()
}

function next_process() {
  next_button.style.display = "none"
  unit_evaluation.style.display = "none"
  header.style.display = "none"
  play_sound.style.display = "block"
  playAudio.pause();
  volumeAdjustmentAudio.play();
  sound_evaluation.style.display = "none"
}
function next_process2() {
  play_sound.style.display = "none"
  sound_evaluation.style.display = "block"
  submit_button.style.display = ""
  warning_text.style.display = ""
}
