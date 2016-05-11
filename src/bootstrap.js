(function(System, Promise) {
    'use strict';

    Promise.all([
        System.import('app/index')
    ]).then(function(imports) {
            imports[0].bootstrap();
        })
        .catch(function(e) {
            console.error(e);
        });
})(window.System, window.Promise);
