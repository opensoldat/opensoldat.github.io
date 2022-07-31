const nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: 'templates',
            output: '..'
        },
        htmlTemplateEngine: 'njk'
    }
};
