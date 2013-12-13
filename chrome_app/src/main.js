require.config({
    baseUrl: ".",
    paths: {
        'cs': '../../lib/require-cs/cs',
        'coffee-script': '../../lib/require-cs/coffee-script',
        'underscore': '../../lib/underscore-amd/underscore-min',
        'domReady': '../../lib/requirejs-domready/domReady',
        'angular': '../../lib/angular/angular.min',
        'angular-resource': '../../lib/angular-resource/angular-resource',
        'angular-route': '../../lib/angular-route/angular-route'
    },
    shim: {
        'angular': {
            exports: 'ng'
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});

require(['domReady', 'angular'], function(domReady) {
    domReady(function() {
        console.log('test init', angular);
    });
});
