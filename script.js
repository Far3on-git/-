window.onload = function() {
    const logos = [
        "/-/images/whatsapp.png",
        "/-/images/facebook.png",
        "/-/images/tiktok.png"
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
        const newLogoSrc = logos[currentLogoIndex];
        logoElement.src = newLogoSrc;

        // التحقق مما إذا تم تحميل الصورة بنجاح
        logoElement.onload = () => {
            updateTimer(); // تحديث الوقت فقط إذا تم تحميل الصورة
        };

        // إذا فشل تحميل الصورة، عد إلى الصورة الأولى
        logoElement.onerror = () => {
            console.error("Failed to load image:", newLogoSrc);
            currentLogoIndex = 0; // إعادة الضبط إلى الصورة الأولى
            logoElement.src = logos[currentLogoIndex];
        };
    }

    function updateScore() {
        score++;
        scoreElement.textContent = score;
        console.log("Score updated to:", score); // تسجيل النقاط في الكونسول
    }

    function updateTimer() {
        timerElement.textContent = timeLeft;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimer();
            console.log("Time left:", timeLeft); // تسجيل الوقت المتبقي في الكونسول

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
