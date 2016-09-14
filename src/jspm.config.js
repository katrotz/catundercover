SystemJS.config({
  lessOptions: {
    "append": false
  },
  buildCSS: false,
  paths: {
    "npm:": "vendor/npm/",
    "github:": "vendor/github/",
    "local:": "vendor/local/",
    "catundercover/": "app/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "dist/catundercover.js": [
        "github:katrotz/systemjs-less-plugin@1.8.5/less.js",
        "github:katrotz/systemjs-less-plugin@1.8.5.json",
        "catundercover/index.js",
        "catundercover/modules/app.module.js",
        "catundercover/modules/app.component.js",
        "npm:@angular/router@3.0.0-rc.2/bundles/router.umd.js",
        "npm:@angular/router@3.0.0-rc.2.json",
        "npm:rxjs@5.0.0-beta.11/BehaviorSubject.js",
        "npm:rxjs@5.0.0-beta.11.json",
        "npm:rxjs@5.0.0-beta.11/util/ObjectUnsubscribedError.js",
        "npm:rxjs@5.0.0-beta.11/Subject.js",
        "npm:rxjs@5.0.0-beta.11/symbol/rxSubscriber.js",
        "npm:rxjs@5.0.0-beta.11/util/root.js",
        "npm:rxjs@5.0.0-beta.11/SubjectSubscription.js",
        "npm:rxjs@5.0.0-beta.11/Subscription.js",
        "npm:rxjs@5.0.0-beta.11/util/UnsubscriptionError.js",
        "npm:rxjs@5.0.0-beta.11/util/errorObject.js",
        "npm:rxjs@5.0.0-beta.11/util/tryCatch.js",
        "npm:rxjs@5.0.0-beta.11/util/isFunction.js",
        "npm:rxjs@5.0.0-beta.11/util/isObject.js",
        "npm:rxjs@5.0.0-beta.11/util/isArray.js",
        "npm:rxjs@5.0.0-beta.11/Subscriber.js",
        "npm:rxjs@5.0.0-beta.11/Observer.js",
        "npm:rxjs@5.0.0-beta.11/Observable.js",
        "npm:rxjs@5.0.0-beta.11/symbol/observable.js",
        "npm:rxjs@5.0.0-beta.11/util/toSubscriber.js",
        "npm:rxjs@5.0.0-beta.11/operator/last.js",
        "npm:rxjs@5.0.0-beta.11/util/EmptyError.js",
        "npm:rxjs@5.0.0-beta.11/observable/fromPromise.js",
        "npm:rxjs@5.0.0-beta.11/observable/PromiseObservable.js",
        "npm:rxjs@5.0.0-beta.11/operator/first.js",
        "npm:rxjs@5.0.0-beta.11/operator/concatAll.js",
        "npm:rxjs@5.0.0-beta.11/operator/mergeAll.js",
        "npm:rxjs@5.0.0-beta.11/util/subscribeToResult.js",
        "npm:rxjs@5.0.0-beta.11/InnerSubscriber.js",
        "npm:rxjs@5.0.0-beta.11/symbol/iterator.js",
        "npm:rxjs@5.0.0-beta.11/util/isPromise.js",
        "npm:rxjs@5.0.0-beta.11/OuterSubscriber.js",
        "npm:rxjs@5.0.0-beta.11/operator/catch.js",
        "npm:rxjs@5.0.0-beta.11/operator/reduce.js",
        "npm:rxjs@5.0.0-beta.11/operator/mergeMap.js",
        "npm:rxjs@5.0.0-beta.11/operator/map.js",
        "npm:rxjs@5.0.0-beta.11/operator/every.js",
        "npm:rxjs@5.0.0-beta.11/observable/of.js",
        "npm:rxjs@5.0.0-beta.11/observable/ArrayObservable.js",
        "npm:rxjs@5.0.0-beta.11/util/isScheduler.js",
        "npm:rxjs@5.0.0-beta.11/observable/EmptyObservable.js",
        "npm:rxjs@5.0.0-beta.11/observable/ScalarObservable.js",
        "npm:rxjs@5.0.0-beta.11/observable/from.js",
        "npm:rxjs@5.0.0-beta.11/observable/FromObservable.js",
        "npm:rxjs@5.0.0-beta.11/operator/observeOn.js",
        "npm:rxjs@5.0.0-beta.11/Notification.js",
        "npm:rxjs@5.0.0-beta.11/observable/ArrayLikeObservable.js",
        "npm:rxjs@5.0.0-beta.11/observable/IteratorObservable.js",
        "npm:@angular/core@2.0.0-rc.6/bundles/core.umd.js",
        "npm:@angular/core@2.0.0-rc.6.json",
        "npm:@angular/common@2.0.0-rc.6/bundles/common.umd.js",
        "npm:@angular/common@2.0.0-rc.6.json",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.12.json",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "catundercover/modules/app.routing.js",
        "catundercover/modules/core/core.module.js",
        "catundercover/modules/core/services/index.js",
        "catundercover/modules/core/services/WorksActions.js",
        "catundercover/modules/core/services/TagsActions.js",
        "catundercover/modules/core/pipes/index.js",
        "catundercover/modules/core/pipes/split-list.pipe.js",
        "npm:lodash@4.15.0/lodash.js",
        "npm:lodash@4.15.0.json",
        "catundercover/modules/core/directives/index.js",
        "catundercover/modules/core/directives/sticky.directive.js",
        "catundercover/modules/core/components/navbar/navbar.component.js",
        "catundercover/modules/core/components/navbar/navbar.component.html",
        "github:systemjs/plugin-text@0.0.8.json",
        "catundercover/modules/core/components/footer/footer.component.js",
        "catundercover/modules/core/components/footer/footer.component.html!github:systemjs/plugin-text@0.0.8/text.js",
        "catundercover/modules/core/routes/index.js",
        "catundercover/modules/core/reducers/index.js",
        "catundercover/modules/core/reducers/moodboard.js",
        "catundercover/modules/core/reducers/works.js",
        "catundercover/modules/core/reducers/tags.js",
        "npm:@ngrx/store@2.1.2/index.js",
        "npm:@ngrx/store@2.1.2.json",
        "npm:@ngrx/store@2.1.2/utils.js",
        "npm:@ngrx/store@2.1.2/store.js",
        "npm:@ngrx/core@1.1.0/operator/select.js",
        "npm:@ngrx/core@1.1.0.json",
        "npm:rxjs@5.0.0-beta.11/operator/distinctUntilChanged.js",
        "npm:rxjs@5.0.0-beta.11/operator/pluck.js",
        "npm:@ngrx/store@2.1.2/state.js",
        "npm:rxjs@5.0.0-beta.11/scheduler/queue.js",
        "npm:rxjs@5.0.0-beta.11/scheduler/QueueScheduler.js",
        "npm:rxjs@5.0.0-beta.11/scheduler/AsyncScheduler.js",
        "npm:rxjs@5.0.0-beta.11/Scheduler.js",
        "npm:rxjs@5.0.0-beta.11/scheduler/QueueAction.js",
        "npm:rxjs@5.0.0-beta.11/scheduler/AsyncAction.js",
        "npm:rxjs@5.0.0-beta.11/scheduler/Action.js",
        "npm:rxjs@5.0.0-beta.11/operator/scan.js",
        "npm:rxjs@5.0.0-beta.11/operator/withLatestFrom.js",
        "npm:@ngrx/store@2.1.2/reducer.js",
        "npm:@ngrx/store@2.1.2/ng2.js",
        "npm:@ngrx/store@2.1.2/dispatcher.js",
        "npm:rxjs@5.0.0-beta.11/add/operator/let.js",
        "npm:rxjs@5.0.0-beta.11/operator/let.js",
        "npm:rxjs@5.0.0-beta.11/add/operator/map.js",
        "catundercover/modules/common/common.module.js",
        "catundercover/modules/common/services/index.js",
        "catundercover/modules/common/pipes/index.js",
        "catundercover/modules/common/directives/index.js",
        "catundercover/modules/common/routes/index.js",
        "npm:@angular2-material/button@2.0.0-alpha.8-1/button.umd.js",
        "npm:@angular2-material/button@2.0.0-alpha.8-1.json",
        "npm:@angular2-material/core@2.0.0-alpha.8-1/core.umd.js",
        "npm:@angular2-material/core@2.0.0-alpha.8-1.json",
        "npm:@angular/platform-browser@2.0.0-rc.6/bundles/platform-browser.umd.js",
        "npm:@angular/platform-browser@2.0.0-rc.6.json",
        "npm:@angular2-material/grid-list@2.0.0-alpha.8-1/grid-list.umd.js",
        "npm:@angular2-material/grid-list@2.0.0-alpha.8-1.json",
        "npm:@angular2-material/toolbar@2.0.0-alpha.8-1/toolbar.umd.js",
        "npm:@angular2-material/toolbar@2.0.0-alpha.8-1.json",
        "npm:@angular2-material/card@2.0.0-alpha.8-1/card.umd.js",
        "npm:@angular2-material/card@2.0.0-alpha.8-1.json",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/toConsumableArray.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.6/bundles/platform-browser-dynamic.umd.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.6.json",
        "npm:@angular/compiler@2.0.0-rc.6/bundles/compiler.umd.js",
        "npm:@angular/compiler@2.0.0-rc.6.json"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "catundercover": {
      "main": "index.js",
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
    "github:*/*.json",
    "local:*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.6",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.6",
    "@angular/core": "npm:@angular/core@2.0.0-rc.6",
    "@angular/http": "npm:@angular/http@2.0.0-rc.6",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.6",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.6",
    "@angular/router": "npm:@angular/router@3.0.0-rc.2",
    "@angular2-material/button": "npm:@angular2-material/button@2.0.0-alpha.8-1",
    "@angular2-material/card": "npm:@angular2-material/card@2.0.0-alpha.8-1",
    "@angular2-material/core": "npm:@angular2-material/core@2.0.0-alpha.8-1",
    "@angular2-material/grid-list": "npm:@angular2-material/grid-list@2.0.0-alpha.8-1",
    "@angular2-material/toolbar": "npm:@angular2-material/toolbar@2.0.0-alpha.8-1",
    "@ngrx/core": "npm:@ngrx/core@1.1.0",
    "@ngrx/store": "npm:@ngrx/store@2.1.2",
    "angular2-masonry": "npm:angular2-masonry@0.2.0",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "clean-css": "npm:clean-css@3.4.19",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@2.4.1",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.27",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "errno": "npm:errno@0.1.4",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "graceful-fs": "npm:graceful-fs@4.1.6",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "image-size": "npm:image-size@0.5.0",
    "json": "github:systemjs/plugin-json@0.1.2",
    "less": "github:katrotz/systemjs-less-plugin@1.8.5",
    "lightbox2": "npm:lightbox2@2.8.2",
    "lodash": "npm:lodash@4.15.0",
    "mime": "npm:mime@1.3.4",
    "mkdirp": "npm:mkdirp@0.5.1",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "promise": "npm:promise@7.1.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.8",
    "rxjs": "npm:rxjs@5.0.0-beta.11",
    "source-map": "npm:source-map@0.5.6",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.8",
    "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zone.js": "npm:zone.js@0.6.21"
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
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "inherits": "npm:inherits@2.0.3"
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
    "npm:clean-css@3.4.19": {
      "map": {
        "source-map": "npm:source-map@0.4.4",
        "commander": "npm:commander@2.8.1"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:commander@2.8.1": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "cipher-base": "npm:cipher-base@1.0.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.5",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:angular2-masonry@0.2.0": {
      "map": {
        "masonry-layout": "npm:masonry-layout@4.1.1"
      }
    },
    "npm:masonry-layout@4.1.1": {
      "map": {
        "get-size": "npm:get-size@2.0.2",
        "outlayer": "npm:outlayer@2.1.0"
      }
    },
    "npm:outlayer@2.1.0": {
      "map": {
        "get-size": "npm:get-size@2.0.2",
        "fizzy-ui-utils": "npm:fizzy-ui-utils@2.0.3",
        "ev-emitter": "npm:ev-emitter@1.0.3"
      }
    },
    "npm:fizzy-ui-utils@2.0.3": {
      "map": {
        "desandro-matches-selector": "npm:desandro-matches-selector@2.0.1"
      }
    },
    "npm:rxjs@5.0.0-beta.11": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.2"
      }
    },
    "github:jspm/nodelibs-timers@0.2.0-alpha": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.9"
      }
    }
  }
});
