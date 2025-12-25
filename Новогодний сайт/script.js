let div_otchet = document.querySelector('.div-otchet');
let div_audio = document.querySelector('.div-audio');
let div_wishes = document.querySelector('.div-wishes');
let div_kviz = document.querySelector('.div-kviz');
let main = document.querySelector('.main');

let button_play = document.getElementById('button_play');
let music = document.getElementById('music');
let name_music = document.getElementById('name_music');
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

let wish = document.getElementById("wish");

const question = document.getElementById("quiz-question");
const answer = document.getElementById("quiz-answer");
const next_btn = document.getElementById("btn-next");
const finish_btn = document.getElementById("btn-end");

function otchet() {
    div_otchet.style.display = "block";
    div_audio.style.display = "none";
    div_wishes.style.display = "none";
    div_kviz.style.display = "none";
    main.style.display = "none";
}

function audio() {
    div_otchet.style.display = "none";
    div_audio.style.display = "block";
    div_wishes.style.display = "none";
    div_kviz.style.display = "none";
    main.style.display = "none";
}

function wishes() {
    div_otchet.style.display = "none";
    div_audio.style.display = "none";
    div_wishes.style.display = "block";
    div_kviz.style.display = "none";
    main.style.display = "none";
}

function kviz() {
    div_otchet.style.display = "none";
    div_audio.style.display = "none";
    div_wishes.style.display = "none";
    div_kviz.style.display = "flex";
    main.style.display = "none";
}

// Отсчет до Нового Года

function updateCountdown() {
    const now = new Date();                          
    const nextNewYear = new Date(now.getFullYear() + 1, 0, 1); 

    const differenceInMs = nextNewYear - now;       

    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));      
    const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));   
    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));           
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);                        

    const countdownText = `
        ${days}дн. ${hours}ч. ${minutes}мин. ${seconds}сек.
    `;

    document.getElementById('countdown').innerHTML = countdownText;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Музыка

function player() {
    if (music.paused){
        music.play();
        button_play.innerHTML = "<i class='bx bx-pause'></i>";
    } else {
        music.pause();
        button_play.innerHTML = "<i class='bx bx-right-arrow'></i>";
    }
};

function back() {
    if (music.src.includes("audio/Mariah_Carey_-_All_I_Want_For_Christmas_Is_You_48234347.mp3")) {
        music.src = "audio/Christmas_Song_-_Jingle_Bells_Time_77072086.mp3";
        name_music.textContent = "Jingle Bells";
        button_play.innerHTML = "<i class='bx bx-right-arrow'></i>";
    } else if (music.src.includes("audio/Wham_-_Last_Christmas_28464045.mp3")) {
        music.src = "audio/Mariah_Carey_-_All_I_Want_For_Christmas_Is_You_48234347.mp3";
        name_music.textContent = "All I Want For Christmas ...";
        button_play.innerHTML = "<i class='bx bx-right-arrow'></i>";
    } else {
        music.src = "audio/Wham_-_Last_Christmas_28464045.mp3";
        name_music.textContent = "Last Christmas";
        button_play.innerHTML = "<i class='bx bx-right-arrow'></i>";
    }
};

function next() {
    if (music.src.includes("audio/Christmas_Song_-_Jingle_Bells_Time_77072086.mp3")) {
        music.src = "audio/Mariah_Carey_-_All_I_Want_For_Christmas_Is_You_48234347.mp3";
        name_music.textContent = "All I Want For Christmas ...";
        button_play.innerHTML = "<i class='bx bx-right-arrow'></i>";
    } else if (music.src.includes("audio/Mariah_Carey_-_All_I_Want_For_Christmas_Is_You_48234347.mp3")) {
        music.src = "audio/Wham_-_Last_Christmas_28464045.mp3";
        name_music.textContent = "Last Christmas";
        button_play.innerHTML = "<i class='bx bx-right-arrow'></i>";
    } else {
        music.src = "audio/Christmas_Song_-_Jingle_Bells_Time_77072086.mp3";
        name_music.textContent = "Jingle Bells";
        button_play.innerHTML = "<i class='bx bx-right-arrow'></i>";
    }
}

function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.round(timeInSeconds % 60);
    return `${minutes}:${seconds}`;
};

music.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(Math.round(music.duration));
});

music.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(music.currentTime);
});

function generate(){
    let wishes = [
        "🎆 Пусть Новый год принесёт радость, удачу и волшебство!",
        "🎄 Желаю счастья, крепкого здоровья и исполнения всех желаний ✨",
        "❄️ Пусть каждый день нового года будет тёплым, светлым и радостным ☀️",
        "🏠 Пусть в доме будет уют, тепло и праздничное настроение 🎁",
        "🎁 Желаю ярких эмоций, приятных сюрпризов и чудес ✨",
        "🌟 Пусть мечты сбываются, а цели легко достигаются 🚀",
        "🎉 Пусть Новый год принесёт новые возможности и победы 🏆",
        "❤️ Желаю здоровья тебе и твоим близким, любви и заботы 🤗",
        "🍀 Пусть удача сопровождает тебя каждый день нового года!",
        "😊 Пусть каждый день начинается с улыбки и хорошего настроения 😄",
        "💖 Желаю тепла, любви, гармонии и взаимопонимания 🤍",
        "🎊 Пусть Новый год будет лучше, ярче и счастливее предыдущего!",
        "✨ Пусть в жизни будет больше радостных моментов и смеха 😆",
        "💪 Желаю веры в себя, уверенности и новых достижений 🚀",
        "🌠 Пусть исполнятся самые заветные и смелые желания ✨",
        "🕊️ Желаю мира, спокойствия и душевного равновесия 🤍",
        "🎨 Пусть Новый год принесёт вдохновение и новые идеи 💡",
        "🏅 Желаю успехов во всех начинаниях и больших побед 🏆",
        "🤝 Пусть рядом будут только искренние и надёжные люди ❤️",
        "🎈 Желаю много радости, улыбок и весёлых моментов 🎉",
        "🌅 Пусть каждый день начинается с хорошего настроения и веры в лучшее ✨",
        "✈️ Желаю ярких путешествий, приключений и впечатлений 🌍",
        "🏡 Пусть счастье, уют и тепло поселятся в твоём доме ❤️",
        "📈 Желаю, чтобы всё задуманное получилось и принесло радость 🎯",
        "💘 Пусть Новый год принесёт любовь, нежность и романтику ✨",
        "🔮 Желаю уверенности в завтрашнем дне и спокойствия 🌟",
        "📚 Пусть каждый день будет наполнен смыслом и новыми знаниями 🧠",
        "🚀 Желаю новых побед, достижений и больших успехов 💥",
        "🎇 Пусть этот год станет особенным, ярким и незабываемым!",
        "🥂 С Новым годом! Пусть он будет счастливым, удачным и волшебным 🎄✨"
    ];
    let a = wishes[Math.floor(Math.random() * wishes.length)];

    wish.textContent = a;
}


// Викторина

const quiz = [
  {
    question: "🎅 Кто приносит подарки на Новый год?",
    answer: "дед мороз"
  },
  {
    question: "🕛 Во сколько наступает Новый год?",
    answer: "00:00"
  },
  {
    question: "🎄 Какое дерево принято украшать на Новый год?",
    answer: "ёлка"
  },
  {
    question: "🍊 Какой фрукт чаще всего ассоциируется с Новым годом?",
    answer: "мандарин"
  },
  {
    question: "🥂 Какой напиток обычно пьют под бой курантов?",
    answer: "шампанское"
  },
  {
    question: "🎆 Что чаще всего запускают в новогоднюю ночь?",
    answer: "фейерверки"
  },
  {
    question: "❄️ Как зовут внучку Деда Мороза?",
    answer: "снегурочка"
  },
  {
    question: "📅 Как называется ночь с 31 декабря на 1 января?",
    answer: "новогодняя ночь"
  },
  {
    question: "🎶 Какая новогодняя песня начинается со слов «В лесу родилась…»?",
    answer: "ёлочка"
  },
  {
    question: "🎁 Что принято загадывать в новогоднюю ночь?",
    answer: "желание"
  }
];

let score = 0;
let questionIndex = 0;

function loadQuestion() {
    question.textContent = quiz[questionIndex].question;
    answer.value = "";
};

function next_question() {
    let userAnswer = answer.value.trim().toLowerCase();

    if (userAnswer === quiz[questionIndex].answer) {
        score++;
    }

    questionIndex++;

    if (questionIndex < quiz.length - 1) {
        loadQuestion() 
    } else {
        loadQuestion()
        next_btn.classList.add("hidden");
        finish_btn.classList.remove("hidden");
    }
};

function end() {
    let kviz_h1 = document.querySelector(".kviz_h1");
    kviz_h1.textContent = "🎉 Готово!";
    question.textContent = `Вы ответили правильно на ${score} из ${quiz.length} вопросов.`;
    answer.remove();
    document.querySelector(".kviz-buttons").remove();
    finish_btn.remove();
};

loadQuestion();