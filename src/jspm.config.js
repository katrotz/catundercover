SystemJS.config({
  paths: {
    "npm:": "vendor/npm/",
    "github:": "vendor/github/",
    "catundercover/": ""
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "catundercover": {
      "main": "app/index.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.less": {
          "loader": "less"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.2",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.2",
    "@angular/core": "npm:@angular/core@2.0.0-rc.2",
    "@angular/http": "npm:@angular/http@2.0.0-rc.2",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.2",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.2",
    "@angular/router": "npm:@angular/router@3.0.0-alpha.4",
    "@angular2-material/button": "npm:@angular2-material/button@2.0.0-alpha.5-2",
    "@angular2-material/card": "npm:@angular2-material/card@2.0.0-alpha.5-2",
    "@angular2-material/core": "npm:@angular2-material/core@2.0.0-alpha.5-2",
    "@angular2-material/grid-list": "npm:@angular2-material/grid-list@2.0.0-alpha.5-2",
    "@angular2-material/toolbar": "npm:@angular2-material/toolbar@2.0.0-alpha.5-2",
    "@ngrx/core": "npm:@ngrx/core@1.0.0",
    "@ngrx/store": "npm:@ngrx/store@2.0.0",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@2.4.0",
    "css": "github:systemjs/plugin-css@0.1.23",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "errno": "npm:errno@0.1.4",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "graceful-fs": "npm:graceful-fs@4.1.4",
    "image-size": "npm:image-size@0.5.0",
    "json": "github:systemjs/plugin-json@0.1.2",
    "less": "github:katrotz/jspm-less-plugin@0.0.11",
    "lodash": "npm:lodash@4.13.1",
    "mime": "npm:mime@1.3.4",
    "mkdirp": "npm:mkdirp@0.5.1",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "promise": "npm:promise@7.1.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "source-map": "npm:source-map@0.5.6",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.8",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {
    "npm:errno@0.1.4": {
      "map": {
        "prr": "npm:prr@0.0.0"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "github:katrotz/jspm-less-plugin@0.0.11": {
      "map": {
        "npm:less": "npm:less@2.7.1",
        "npm:less/lib/less-browser/index": "npm:less@2.7.1/lib/less-browser/index"
      }
    }
  }
});
