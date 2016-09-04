'use strict';

System.register('catundercover/less.js', ['./components/catundercover/catundercover.component.less!less'], function (_export, _context) {
  "use strict";

  var lessContent;
  return {
    setters: [function (_componentsCatundercoverCatundercoverComponentLessLess) {
      lessContent = _componentsCatundercoverCatundercoverComponentLessLess.default;
    }],
    execute: function () {

      if (lessContent) console.log('lessContent loaded');else console.log('lessContent is empty');
    }
  };
});
System.registerDynamic("github:katrotz/systemjs-less-plugin@1.8.3.json", [], false, function() {
  return {
    "main": "less"
  };
});

System.registerDynamic('github:katrotz/systemjs-less-plugin@1.8.3/less.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  if (typeof window !== 'undefined') {

    // Failing to set this will hide the DOM body
    // See also http://stackoverflow.com/questions/35702313/whats-adding-style-type-text-cssbody-display-none-important-style
    window.less = {
      async: true
    };

    var head = document.getElementsByTagName('head')[0];

    // get all injected style tags in the page
    var styles = document.getElementsByTagName('style');
    var styleIds = [];
    for (var i = 0; i < styles.length; i++) {
      if (!styles[i].hasAttribute("data-href")) {
        continue;
      }
      styleIds.push(styles[i].getAttribute("data-href"));
    }

    var loadStyle = function (url, less_browser) {

      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
          if (request.responseText) {
            //request.status >= 200 && request.status < 400) {
            // Success!
            var responseData = request.responseText;

            //render it using less
            less_browser.render(responseData, {
              filename: url,
              rootpath: url.replace(/[^\/]*$/, '')
            }).then(function (data) {
              resolve(data.css);
            });
          } else {
            // We reached our target server, but it returned an error
            reject();
          }
        };

        request.onerror = function (e) {
          reject(e);
        };

        request.send();
      });
    };

    exports.fetch = function (load) {
      // don't reload styles loaded in the head
      for (var j = 0; i < styleIds.length; j++) {
        if (load.address === styleIds[j]) {
          return '';
        }
      }
      //var less_browser = require('less.js');
      return this.import('./lessjs/less.browser.js', {
        name: module.id
      }).then(function (less_browser) {
        return loadStyle(load.address, less_browser);
      });
    };

    exports.translate = function (load) {
      // Read SystemJS configurations of the plugin
      var lessOptions = this.lessOptions || {};

      var appendStyles = lessOptions.append;

      if (appendStyles) {
        //inject it into the head as a style tag
        var style = document.createElement('style');
        style.textContent = load.source + '/*# sourceURL=' + load.address + '*/';
        style.setAttribute('type', 'text/css');
        //store original type in the data-type attribute
        style.setAttribute('data-type', 'text/less');
        //store the url in the data-href attribute
        style.setAttribute('data-href', load.address);
        head.appendChild(style);

        load.metadata.format = 'defined';
      } else {
        if (this.builder || this.transpiler) {
          load.metadata.format = 'esm';
          return 'export default ' + JSON.stringify(load.source) + ';';
        }

        load.metadata.format = 'amd';
        return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
      }
    };
  } else {}
  return module.exports;
});
//# sourceMappingURL=catundercover.js.map