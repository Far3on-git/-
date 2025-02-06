window.onload = function() {
    const logos = [
        "images/whatsapp.png",
        "images/facebook.png",
        "images/instagram.png",
        "images/tiktok.png"
    ];

    let currentLogoIndex = 0;
    let score = 0;
    let timeLeft = 30; // الوقت المبدئي 30 ثانية
    let timerInterval;

    const logoElement = document.getElementById("logo");
    const scoreElement = document.getElementById("score");
    const timerElement = document.getElementById("timer");

    function changeLogo() {
        currentLogoIndex = (currentLogoIndex + 1) % logos.length;
        logoElement.src = logos[currentLogoIndex];
        updateTimer(); // تحديث الوقت دون إعادة تعيينه
    }

    function updateScore() {
        score++;
        scoreElement.textContent = score;
    }

    function updateTimer() {
        timerElement.textContent = timeLeft;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert("عاش يسطا بس حاول تاني: " + score);
                resetGame();
            }
        }, 1000);
    }

    function resetGame() {
        score = 0;
        timeLeft = 30; // إعادة تعيين الوقت إلى 30 ثانية
        currentLogoIndex = 0;
        logoElement.src = logos[currentLogoIndex];
        updateScore();
        updateTimer();
        startTimer();
    }

    // بدء اللعبة عند النقر على الشعار
    logoElement.addEventListener("click", () => {
        changeLogo();
        updateScore();
    });

    // بدء اللعبة عند تحميل الصفحة
    resetGame();
};