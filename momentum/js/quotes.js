const quotes = [
  {
    quotes: '나쁜 사람에게도 좋은 사람에도 비는 내리고, 해는 떠오른다',
    author: '김영재'
  },
  {
    quotes: '친구란 내 슬픔을 등에 지고 가는 사람',
    author: '이영재'
  },
  {
    quotes: '만 번 말하면 현실로 이루어진다',
    author: '박영재'
  },
  {
    quotes: '그렇게 될 일은 결국 그렇게 된다.',
    author: '양영재'
  },
  {
    quotes: '이별이 두려워 사랑하지 않는 사람은 죽는 것이 두려워 숨쉬지 않는 사람과 같다.',
    author: '최영재'
  },
  {
    quotes: '울기를 두려워 말라. 눈물은 마음의 아픔을 씻어내는 약이다.',
    author: '안영재'
  },
  {
    quotes: '물고기를 주지말고 물고기 잡는 방법을 가르쳐 줘라.',
    author: '황보영재'
  },
  {
    quotes: '눈에 눈물이 없으면 영혼 위에 무지개가 뜨지 않는다.',
    author: '정영재'
  },
  {
    quotes: '방향을 가리켜 보이지만 말고 그 방향으로 나아가라.',
    author: '홍영재'
  },
  {
    quotes: '우리가 걸어간 길에 의해 우리는 영원히 기억될 것이다.',
    author: '우영재'
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quotes
author.innerText = todayQuote.author