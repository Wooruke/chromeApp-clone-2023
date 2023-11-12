const quotes = [
  {
    quote:
      "긴 인생은 충분히 좋지 않을 수도 있다, 그러나 좋은 인생은 충분히 길다.",
    author: "벤저민 프랭클린",
  },
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
    author: "제임스 딘",
  },
  {
    quote:
      "당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.",
    author: "낸시 설리번",
  },
  {
    quote: "현명한 자라면 찾아낸 기회보다 더 많은 기회를 만들 것이다.",
    author: "프랜시스 베이컨",
  },
  {
    quote:
      "만약 누군가를 당신의 편으로 만들고 싶다면, 먼저 당신이 그의 진정한 친구임을 확신시켜라.",
    author: "에이브러햄 링컨",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "두려움은 희망 없이 있을 수 없고 희망은 두려움없이 있을 수 없다.",
    author: "바뤼흐 스피노자",
  },
  {
    quote:
      "조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일일 것이라 믿는다.",
    author: "오프라 윈프리",
  },
  {
    quote:
      "자신의 부족한 점을 더 많이 부끄러워할 줄 아는 이는 더 존경받을 가치가 있는 사람이다.",
    author: "조지 버나드 쇼",
  },
  {
    quote:
      "나는 힘과 자신감을 찾아 항상 바깥으로 눈을 돌렸지만, 자신감은 내면에서 나온다. 자신감은 항상 그 곳에 있다.",
    author: "안나 프로이트",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
