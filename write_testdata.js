import fs from 'fs';

function writeDataToFile() {
    //Create testdata directory if it doesn't exist
    if (fs.existsSync('testdata')) {
        console.log("test data directory exists");
    } else {
        fs.mkdirSync('testdata')
    }

    const fruits = ["Apple", "Banana", "Orange"]
    fs.writeFileSync("testdata/fruits.json", JSON.stringify(fruits))
    console.log("Test data written successfully");
}

writeDataToFile()