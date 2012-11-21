define(['handlebars'],
function (Handlebars) {

    var loadResource = function (resourceName, parentRequire, callback, config) {

        if (resourceName.indexOf(".html") == -1)
        {
            resourceName += ".html";
        }

        parentRequire([("text!" + resourceName)],
            function (templateContent) {
                var template = Handlebars.compile(templateContent);                
                callback(template);
            }
        );
    };

    return {
        load: loadResource
    };

});