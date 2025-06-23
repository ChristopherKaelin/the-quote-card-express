"use strict";

const express = require("express");
const app = express();

const port = 8080;

require("dotenv").config();
const cors = require("cors");

app.use(cors());

app.use(express.static("./public"));


//  API endpoint to get random image
async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
        // return 'Hello, this is a placeholder for the image URL: ';
    } catch (error) {
        console.error(error);
    }
}

app.use("/api/v1/getRandomImage", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});