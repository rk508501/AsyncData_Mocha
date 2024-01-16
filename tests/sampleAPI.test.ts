/// <reference path="../global-types.d.ts" />

import fs from "fs"
import {spec} from "pactum"

it('should get a response with status code 200', async () => {
    let resp: MyApiResponse = await spec()
        .get('https://isro.vercel.app/api/spacecrafts')
        .expectStatus(200)
        .toss()

    console.log(resp.body.spacecrafts[0]);
    // fs.writeFileSync("testdata/spacedata.json", JSON.stringify(resp.body.spacecrafts))
    // console.log("Space data written successfully");

});
