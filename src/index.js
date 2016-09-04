(function(System, Promise) {
    'use strict';

    Promise.all([
        System.import('catundercover/index.js')
    ]).then(function(imports) {
            imports[0].run();
        })
        .catch(function(e) {
            console.error(e);
        });
})(window.System, window.Promise);
