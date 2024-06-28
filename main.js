// 랜덤번호 지정
// 유저가 번호 입력하고 go라는 버튼 누름
// 맞추면 맞췄씁니다.
// 랜덤번호 < 입력번호 Down
// 랜덤번호 > 입력번호 Up
// Reset 누르면 게임이 리셋
// 5번 기회 다 쓰면 게임이 끝난다(더 이상 추측 불가, 버튼 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.

let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play)
function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100)+1
  console.log("정답", computerNum)
}
function play(){
  let userValue = userInput.value;
  if(userValue < computerNum){
    resultArea.textContent="Up"
  } else if(userValue > computerNum){
    resultArea.textContent="Down"
  } else {
    resultArea.textContent="맞추셨습니다"
  }
}
pickRandomNum()
