import { expect } from 'chai';
import fruitsData from '../testdata/fruits.json';

describe("Fruits data verification", async function () {
    console.log(fruitsData);
    fruitsData.forEach(fruit => {
        it(`Check fruit ${fruit}`, async function () {
            console.log(fruit);
            expect(fruit).to.have.property("length")
        });
    });
});
