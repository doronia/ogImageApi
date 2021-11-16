const getHtml = require('../utils/getHtml');
const getPage = require('../utils/getPage');

module.exports = async (req, res) => {
    const {title = null, tag = null, author = 'חדשות ספונסר'} = req.query;
    const _title = title;
    const _tag = tag;
    const _author = author;
    const viewport = {w: 1200, h: 628};

    try {
        const html = await getHtml(viewport.w, viewport.h, _title, _tag, _author);
        // res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        // res.end(html);

        const page = await getPage();
        await page.setViewport({width: viewport.w, height: viewport.h});
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
        res.end('Internal Error', e);
    }


};
