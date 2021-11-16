const getHtml = require('../utils/getHtml');
const getPage = require('../utils/getPage');

module.exports = async (req, res) => {

    // title required
    if(!req.query.title){
        res.status(400).json({ error: 'title missing' });
    }
    // date required
    if(!req.query.date){
        res.status(400).json({ error: 'date missing' });
    }

    const {title, tag, author, date} = req.query;
    const _title = title;
    const _tag = tag || null;
    const _author = author || 'חדשות ספונסר';
    const _date = date;

    console.log({title, tag, author, date})
    console.log({_title, _tag, _author,_date})

    const viewport = {w: 1200, h: 628};

    try {
        const html = await getHtml(viewport.w, viewport.h, _title, _tag, _author, _date);

        // Dev only
        // res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        // res.end(html);

        const page = await getPage();
        await page.setViewport({width: viewport.w, height: viewport.h});
        await page.setExtraHTTPHeaders({
            'Accept-Charset': 'utf-8',
            'Content-Type': 'text/html; charset=utf-8',
        });
        await page.setContent(html.toString('utf8'), {waitUntil: 'networkidle2', timeout: 15000});
        const screenshot = await page.screenshot({type: 'png'});

        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.setHeader('Content-Type', 'image/png');
        res.end(screenshot);
    } catch (e) {
           res.status(500).json({ error: 'Internal Error',e });
    }
};
