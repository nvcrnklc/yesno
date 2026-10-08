const screens = document.querySelectorAll(".screen");

const introText = document.getElementById("introText");
const startBtn = document.getElementById("startBtn");

const nextButtons = document.querySelectorAll(".nextBtn");


// EKRAN DEĞİŞTİRME

function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// AÇILIŞ YAZISI

const introMessages = [
    "Aslında bilmiyorum.",
    "Sadece sana özel bir şey yapmak istedim."
];

let introIndex = 0;


function introTyping() {

    if (introIndex >= introMessages.length) {
        return;
    }

    let text = introMessages[introIndex];

    introText.textContent = "";

    let charIndex = 0;

    const typing = setInterval(() => {

        introText.textContent += text[charIndex];

        charIndex++;

        if (charIndex >= text.length) {

            clearInterval(typing);

            introIndex++;

            setTimeout(introTyping, 1800);
        }

    }, 45);
}


setTimeout(introTyping, 1200);


// DEVAM ET

startBtn.addEventListener("click", () => {

    showScreen("why");

    const sentences =
        document.querySelectorAll(".sentence");

    sentences.forEach((sentence, index) => {

        setTimeout(() => {

            sentence.classList.add("show");

        }, 600 + index * 1100);

    });

});


// NEDEN SEN -> DOSYA

document.querySelector("#why .nextBtn").addEventListener("click", () => {

    showScreen("file");

    startFileAnimation();

});


// DOSYA ANİMASYONU

function startFileAnimation() {

    const findings =
        document.querySelectorAll(".findings p");

    const button =
        document.querySelector(".fileBtn");

    findings.forEach((finding, index) => {

        setTimeout(() => {

            finding.classList.add("show");

        }, 1200 + index * 900);

    });


    setTimeout(() => {

        button.classList.add("show");

    }, 1200 + findings.length * 900);

}


// DOSYA -> ERROR

document.querySelector(".fileBtn").addEventListener("click", () => {

    showScreen("error");

    const errorTexts =
        document.querySelectorAll(".error-text");

    errorTexts.forEach((text, index) => {

        setTimeout(() => {

            text.classList.add("show");

        }, 1200 + index * 1800);

    });

});


// ERROR -> FINAL

document.querySelector("#error .nextBtn").addEventListener("click", () => {

    showScreen("final");

    const finalTexts =
        document.querySelectorAll(".final-text p");

    finalTexts.forEach((text, index) => {

        setTimeout(() => {

            text.classList.add("show");

        }, 1000 + index * 1800);

    });


    setTimeout(() => {

        document
            .querySelector(".end-line")
            .classList.add("show");

    }, 6000);


    setTimeout(() => {

        document
            .querySelector(".end")
            .classList.add("show");

    }, 8000);

});