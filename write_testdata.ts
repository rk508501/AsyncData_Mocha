/// <reference path="global-types.d.ts" />

import fs from 'fs';
import {spec} from "pactum"

async function writeDataToFile() {
    //Create testdata directory if it doesn't exist
    if (fs.existsSync('testdata')) {
        console.log("test data directory exists");
    } else {
        fs.mkdirSync('testdata')
    }

    const fruits = ["Dragonfruit", "Custard Apple", "Jackfruit"]
    fs.writeFileSync("testdata/fruits.json", JSON.stringify(fruits))
    console.log("Fruits data written successfully");

    //Space data
    let resp: MyApiResponse = await spec()
        .get('https://isro.vercel.app/api/spacecrafts')
        .expectStatus(200)
        .toss()

    fs.writeFileSync("testdata/spacedata.json", JSON.stringify(resp.body.spacecrafts))
    console.log("Space data written successfully");
}

writeDataToFile()