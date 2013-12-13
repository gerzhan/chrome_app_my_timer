/**
 * Created by Nikolay Gerzhan <nikolay.gerzhan@gmail.com>
 */

({
    baseUrl: "./src",
    optimize: 'none',
    paths: {
        'cs': '../../lib/require-cs/cs',
        'coffee-script': '../../lib/require-cs/coffee-script',
        'underscore': '../../lib/underscore-amd/underscore-min',
        'domReady': '../../lib/requirejs-domready/domReady',
        'angular': '../../lib/angular/angular.min',
        'angular-resource': '../../lib/angular-resource/angular-resource',
        'angular-route': '../../lib/angular-route/angular-route'
    },
    name: "main",
    out: "./build/application.js"
})
