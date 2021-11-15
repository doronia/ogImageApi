const getHtml = require('../utils/getHtml');
const getPage = require('../utils/getPage');

module.exports = async (req, res) => {

    // const {title = null, tags = null, author = 'חדשות ספונסר'} = req;

    const _title = 'בנק מזרחי מתחיל להוות תחרות לפועלים ולאומי';
    const _tag = `דוחות כספיים`;
    //const html = `<html> <head> <style> * { margin: 0; padding: 0; direction: rtl} *, *:before, *:after { box-sizing: border-box; } html, body {background: #ddd ; width: 1200px; height: 628px; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; } div { width: 1200px; height: 628px; padding: 0 200px; display: flex; align-items: center; justify-content: center; } h1 { font-size: 48px; line-height: 56px; color: #fff; margin: 0; text-align: center; } </style> </head> <body> <div> <h1>${_title}</h1> </div> </body> </html>`;
    try {
        // const isDev = await getTest();
        // res.status(200).send(isDev);
        const html = await getHtml(_title, _tag);
        // res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        // res.end(html);


        const page = await getPage();
        await page.setViewport({width: 1200, height: 630});
        await page.setContent(html, {waitUntil: 'networkidle2', timeout: 15000});

        const buffer = await page.screenshot({type: 'png'});

        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.setHeader('Content-Type', 'image/png');
        res.end(buffer);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    }

    // try{
    //     const page = await getPage();
    //
    //     res.status(200).send(html);
    // } catch (error) {
    //     console.error(error);
    //
    //     res.statusCode = 500;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    // }

    // try {
    //     const page = await getPage();
    //     await page.setViewport({width: 1200, height: 630});
    //     await page.setContent(html, {waitUntil: 'networkidle2', timeout: 15000});
    //
    //     const buffer = await page.screenshot({type: 'png'});
    //
    //     res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
    //     res.setHeader('Content-Type', 'image/png');
    //     res.end(buffer);
    // } catch (error) {
    //     console.error(error);
    //
    //     res.statusCode = 500;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    // }


};
