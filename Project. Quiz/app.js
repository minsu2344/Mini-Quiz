const imgAhha = document.getElementsByClassName('ahha');

const quiz = document.getElementById('quiz');
const quiz_1 = document.getElementById('quiz_1');
const quiz_2 = document.getElementById('quiz_2');
const quiz_3 = document.getElementById('quiz_3');
const quiz_4 = document.getElementById('quiz_4');

const correct_1 = document.getElementById('correct_1');
const correct_2 = document.getElementById('correct_2');
const correct_3 = document.getElementById('correct_3');
const correct_4 = document.getElementById('correct_4');

const answer_1 = document.getElementsByClassName('quiz1');
const answer_2 = document.getElementsByClassName('quiz2');
const answer_3 = document.getElementsByClassName('quiz3');
const answer_4 = document.getElementsByClassName('quiz4');

const stage = document.getElementById('stage');

const hints = document.getElementsByClassName('hint');

const endPage = document.getElementById('end');
const totalScore = document.getElementById('totalScore');

const progBar = document.getElementById('meter');
let barGage = 25;
const score = document.getElementById('score');
let resultScore = 0;
let quizPage = 1;

const HIDDEN_CLASSNAME = 'hidden';

// 메인화면 사진 뒤집기
function imgReverse() {
  Array.from(imgAhha).forEach(revimg => {
    if(revimg.style.transform === 'scaleX(-1)') {
      revimg.style.transform = 'scaleX(1)';
    }
    else {
      revimg.style.transform = 'scaleX(-1)';
    }
  })
}

setInterval(imgReverse, 500);



// 페이지 넘어가기
function nextPage(quizNum) {
  switch(quizNum) {
    case 2:
      quiz_1.classList.add(HIDDEN_CLASSNAME);
      quiz_2.classList.remove(HIDDEN_CLASSNAME);
      break;

    case 3:
      quiz_2.classList.add(HIDDEN_CLASSNAME);
      quiz_3.classList.remove(HIDDEN_CLASSNAME);
      break;

    case 4:
      quiz_3.classList.add(HIDDEN_CLASSNAME);
      quiz_4.classList.remove(HIDDEN_CLASSNAME);
      break;
  }
}

// 힌트 클릭
// function handleHintClick(event) {
//   if(event.target.parentElement === 'div.hint') {
//     event.target.parentElement.classList.add(HIDDEN_CLASSNAME);
//   }
//   else {
//     event.target.classList.add(HIDDEN_CLASSNAME);
//   }
// }

// progress bar 게이지 올리기 & 페이지 번호 변경
function nextProgress(gage) {
  progBar.value = gage;
  stage.innerText = `Question ${quizPage}/4`;
}

// 정답 오답 가려내기
function handleAnswerClick(event) {
  if(event.target.id === 'correct_1' || event.target.id === 'correct_2' || event.target.id === 'correct_3' || event.target.id === 'correct_4') {
    resultScore++;
    score.innerText = resultScore;
    event.target.style.backgroundColor = '#B5FE83';
  }
  else {
    event.target.style.backgroundColor = 'red';
  }

  quizPage++;
  barGage += 25;

  // 마지막 문제 끝났을 때
  if(barGage > 100) {
    setTimeout( () => {
      quiz.style.display = 'none';
      endPage.classList.remove(HIDDEN_CLASSNAME);
      totalScore.innerText = `Score: ${resultScore}`;
    }, 1500)
  }

  // 페이지 넘어가기 & 게이지 올리기 지연
  setTimeout(nextPage, 1500, quizPage);
  setTimeout(nextProgress, 1500, barGage);
}




// 각 문제에 대한 클릭 이벤트
Array.from(answer_1).forEach(answer => answer.addEventListener('click', handleAnswerClick));
Array.from(answer_2).forEach(answer => answer.addEventListener('click', handleAnswerClick));
Array.from(answer_3).forEach(answer => answer.addEventListener('click', handleAnswerClick));
Array.from(answer_4).forEach(answer => answer.addEventListener('click', handleAnswerClick));

// 힌트 눌렀을 때
// Array.from(hints).forEach(hint => hint.addEventListener('click', handleHintClick));