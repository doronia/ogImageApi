

// try {
//     browser = await puppeteer.launch({
//         "args": chromium.args,
//         "executablePath": await chromium.executablePath,
//         "headless": chromium.headless,
//     });
//
//     const page = await browser.newPage();
//     await page.setViewport({ "width": 800, "height": 600 });
//     await page.goto(url, {});
//
//     rawScreenshot = await page.screenshot({});
//     await page.close();
//
// } catch (e) {
//     console.log(e);
//
//     callback(null, {
//         "statusCode": 500,
//         "body": e.message,
//         "headers": {
//             'Content-Type': 'text/plain',
//         },
//     });
// } finally {
//     if (browser !== null) {
//         await browser.close();
//     }
// }
//
// res.set("Content-Type", "image/png");
// res.send(imageBuffer);


module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    res.status(200).send(`Hello ${name}!`);
};