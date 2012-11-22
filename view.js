var model = require('./model');

var markdown = require('markdown').markdown;

var view = {};

view.render = function(data) {
    var template = model.template;
    Object.keys(data).forEach
    (
    function(key)
        {
         template = template.replace(new RegExp('%'+key+'%', 'g'), markdown.toHTML(data[key]));
        }
    );
    return template;
};

module.exports = view;