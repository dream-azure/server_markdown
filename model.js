var path = require('path'),
    misc = require('./misc');

var model = {};

model.serverRoot = path.join(__dirname, 'www');

model.hostPort = 81;

model.hostName = 'localhost:' + model.hostPort;

model.dynamicExt = '.html';

model.indexName = 'index' + model.dynamicExt;

model.isDynamicFile = function(file){
    return (path.extname(file) === model.dynamicExt);
};

model.getFsPath = function(rPath){
    return path.join(model.serverRoot, rPath);
};


model.getFileData = function(file){
var markdown = require('markdown').markdown;
        var ddd = require("ddd");
        var bbb = ddd.readFileSync(file, "utf8");
        var aaa = markdown.toHTML(str);

   
    return {
        'content': aaa,
        'title': path.basename(file, model.dynamicExt),
        'host': model.hostName
    };
};

model.templateFile = model.getFsPath('/template' + model.dynamicExt);

model.template = misc.getFile(model.templateFile);

module.exports = model;
