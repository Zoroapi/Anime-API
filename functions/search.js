const axios = require('axios').default;
const cheerio = require('cheerio');

const search = function (req, res, next) {
    const results = {
        status: "success",
        query: req.query.name,
        amount: null,
        results: []
    };
    axios.get(`https://zoro.to/search?keyword=${req.query.name}`)
        .then(response => {
            const $ = cheerio.load(response.data);
            $('div[class=tab-content]').each((i, el) => {
                const $el = $(el);
                $el.find('div[class=flw-item]').each((i, el) => {
                    const $el = $(el);
                    const title = $el.find('a[class=dynamic-name]').text();
                    const link = $el.find('a[class=dynamic-name]').attr('href');
                    const episodes = $el.find('.film-poster').text().split('Ep')[1].replace(/\n/g, '').replace(/\s/g, '');
                    const duration = $el.find('.fd-infor').text().split('m')[0].match(/\d+/)[0] + 'm';
                    results.results.push({
                        title,
                        episodes,
                        duration,
                        link,
                    });
                    results.amount = results.results.length;
                });
            }).get();
            res.send(results);
        });
};

module.exports = { search };