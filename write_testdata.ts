import fs from 'fs';

function writeDataToFile() {
    //Create testdata directory if it doesn't exist
    if (fs.existsSync('testdata')) {
        console.log("test data directory exists");
    } else {
        fs.mkdirSync('testdata')
    }

    const fruits = ["Dragonfruit", "Custard Apple", "Jackfruit"]
    fs.writeFileSync("testdata/fruits.json", JSON.stringify(fruits))
    console.log("Test data written successfully");
}

writeDataToFile()