"use strict"

// const elements = {
//     quote: document.getElementById("quote"),
//     author: document.getElementById("author"),
// };

// const quotes = [
//     {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//      author: "Winston S. Churchill",
//     },
//     {quote: "Be curious, not judgemental",
//      author: "Ted Lasso",
//     },
//     {quote: "When you die, it does not mean that you lose to cancer. You beat cancer by how you live, why you live, and in the manner in which you live",
//      author: "Stuart Scott",
//     },
//     {quote: "Every day is a chance to be better than we were the day before.",
//      author: "Ted Lasso",
//     },
//     {quote: "To me there are three things everyone should do every day. Number one is laugh. Number two is think -- spend some time time in thought. Number three, you should have your emotions move you to tears. If you laugh, think and cry, that's a heck of a day.",
//      author: "Jim Valvano",
//     }
// ]

// function loopThroughQuotes() {
//     let quoteIndex = 0;
//     setInterval(() => {
//         if (quoteIndex < quotes.length) {
//             elements.quote.textContent = quotes[quoteIndex].quote;
//             elements.author.textContent = quotes[quoteIndex].author;
//             quoteIndex++;
//         } else {
//             quoteIndex = 0;
//         }
//     }, 30000);
// }

// setTimeout(loopThroughQuotes, 3000);


async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";

    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoURL = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoURL}")`;

    } catch (error) {
        console.error(error)
    }
}


setInterval(() => {
    getRandomImage();
}, 30000);

