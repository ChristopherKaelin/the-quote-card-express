"use strict"

// const elements = {
//     quote: document.getElementById("quote"),
//     author: document.getElementById("author"),
// };

// const quotes = [
//     {quote: "Be curious, not judgemental",
//      author: "Ted Lasso",
//     },
//     {quote: "I hope that all of us or none of us are judged by the actions of our weakest moments; but rather by the strength we show when and if we are ever given a second chance",
//      author: "Ted Lasso",
//     },
//     {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//      author: "Winston S. Churchill",
//     },
//     {quote: "It's not what we do once in a while that shapes our lives, but what we do consistently.",
//      author: "Tony Robbins",
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
//     }, 3000);
// }

// setTimeout(loopThroughQuotes, 3000);


async function getRandomImage() {
    const client_id = "t4tYoCKn-qs37VWsASGIIT78CM6SHoRvvdMkyHOIxjI";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoURL = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoURL}")`;

    } catch (error) {
        console.error(error)
    }
}

getRandomImage()

setInterval(() => {
    getRandomImage();
}, 3000);

