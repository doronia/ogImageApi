const getHtml = require('../utils/getHtml');
const getPage = require('../utils/getPage');

module.exports = async (req, res) => {

    // const {title = null, tags = null, author = 'חדשות ספונסר'} = req;

    const _title = 'בנק מזרחי מתחיל להוות תחרות לפועלים ולאומי';
    const _tag = `דוחות כספיים`;

    try {
        const html = await getHtml(_title, _tag);
        // res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        // res.end(html);

        const page = await getPage();
        await page.setViewport({width: 1200, height: 630});
        await page.setExtraHTTPHeaders({
            'Accept-Charset': 'utf-8',
            'Content-Type': 'text/html; charset=utf-8',
        });
        await page.setContent(html.toString('utf8'), {waitUntil: 'networkidle2', timeout: 15000});

        const buffer = await page.screenshot({type: 'png'});

        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.setHeader('Content-Type', 'image/png');
        res.end(buffer);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    }




};
