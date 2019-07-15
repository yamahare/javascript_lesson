'use strict';

document.addEventListener('DOMContentLoaded', e=>{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const nextBtn = document.getElementById('nextBtn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = [
    {q: '国土面積の大きさ第１０位は？', c: ['アルジェリア', '日本', 'アメリカ', 'カザフスタン', 'オーストラリア']},
    {q: '数字の単位である恒河沙(ごうがしゃ)の次は？', c: ['阿僧祇', '那由他', '京', '山晴']},
    {q: '印象派を代表するクロード・モネの作品は次の内どれ？', c: ['パラソルを差す女', '菓子パンを作る婦人', '窓を眺める男', 'パンチラリズム', 'ヨロレイヒ']},
    {q: 'このページの作者であるやまはれくんは、１兆円もっていたら何をしたい？', c: ['寄付', '貯金', '豪遊', '仕事をやめる']},
  ];
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function checkAnswer(li){
    if(isAnswered){ return; }

    isAnswered = true;
    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }
    nextBtn.classList.remove('disabled');
  }

  function shuffle(arr){
    for(let i=0; i < arr.length; i++){
      let j = Math.floor(Math.random() * arr.length);
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
  }

  function setQuiz(){
    isAnswered = false;
    while(choices.firstChild){
      choices.removeChild(choices.firstChild);
    };

    question.textContent = quizSet[currentNum].q;
    const shuffledChoice = shuffle([...quizSet[currentNum].c]);
    shuffledChoice.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', e => {
        checkAnswer(li);
      })
      choices.appendChild(li);
    })

    if(currentNum === quizSet.length - 1){
      nextBtn.textContent = 'show result!';
    }
  }

  setQuiz();

  nextBtn.addEventListener('click', e => {
    if(nextBtn.classList.contains('disabled')){ return; }
    if(currentNum === quizSet.length - 1){
      result.classList.add('show');
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
    }else{
      currentNum++;
      setQuiz();
      nextBtn.classList.add('disabled');
    }
  })
})
