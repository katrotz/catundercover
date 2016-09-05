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
        "catundercover/components/catundercover/catundercover.component.js",
        "catundercover/components/footer/footer.component.js",
        "catundercover/components/footer/footer.component.html!github:systemjs/plugin-text@0.0.8/text.js",
        "github:systemjs/plugin-text@0.0.8.json",
        "npm:@angular2-material/toolbar@2.0.0-alpha.5-2/toolbar.js",
        "npm:@angular2-material/toolbar@2.0.0-alpha.5-2.json",
        "npm:@angular/core@2.0.0-rc.5/index.js",
        "npm:@angular/core@2.0.0-rc.5.json",
        "npm:@angular/core@2.0.0-rc.5/src/security.js",
        "npm:zone.js@0.6.12/dist/zone.js",
        "npm:zone.js@0.6.12.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json",
        "npm:reflect-metadata@0.1.8/Reflect.js",
        "npm:reflect-metadata@0.1.8.json",
        "npm:@angular/core@2.0.0-rc.5/src/animation/animation_player.js",
        "npm:@angular/core@2.0.0-rc.5/src/facade/lang.js",
        "npm:@angular/core@2.0.0-rc.5/src/facade/exceptions.js",
        "npm:@angular/core@2.0.0-rc.5/src/facade/exception_handler.js",
        "npm:@angular/core@2.0.0-rc.5/src/facade/collection.js",
        "npm:@angular/core@2.0.0-rc.5/src/facade/base_wrapped_exception.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/metadata.js",
        "npm:@angular/core@2.0.0-rc.5/private_export.js",
        "npm:@angular/core@2.0.0-rc.5/src/util/decorators.js",
        "npm:@angular/core@2.0.0-rc.5/src/render/api.js",
        "npm:@angular/core@2.0.0-rc.5/src/reflection/reflector_reader.js",
        "npm:@angular/core@2.0.0-rc.5/src/reflection/reflection_capabilities.js",
        "npm:@angular/core@2.0.0-rc.5/src/reflection/reflection.js",
        "npm:@angular/core@2.0.0-rc.5/src/reflection/reflector.js",
        "npm:@angular/core@2.0.0-rc.5/src/profile/wtf_init.js",
        "npm:@angular/core@2.0.0-rc.5/src/metadata/view.js",
        "npm:@angular/core@2.0.0-rc.5/src/metadata/lifecycle_hooks.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/view_utils.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/exceptions.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/change_detection_util.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/element.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/view_type.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/view_container_ref.js",
        "npm:@angular/core@2.0.0-rc.5/src/profile/profile.js",
        "npm:@angular/core@2.0.0-rc.5/src/profile/wtf_impl.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/element_ref.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/decorators.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/metadata.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/change_detection.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/constants.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/change_detector_ref.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/differs/keyvalue_differs.js",
        "npm:@angular/core@2.0.0-rc.5/src/di.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/opaque_token.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/reflective_exceptions.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/reflective_key.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/forward_ref.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/reflective_provider.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/provider_util.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/provider.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/reflective_injector.js",
        "npm:@angular/core@2.0.0-rc.5/src/di/injector.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/differs/iterable_differs.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/differs/default_keyvalue_differ.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection/differs/default_iterable_differ.js",
        "npm:@angular/core@2.0.0-rc.5/src/application_tokens.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/view.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/view_ref.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/element_injector.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/debug_context.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/view_animation_map.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/animation_group_player.js",
        "npm:@angular/core@2.0.0-rc.5/src/facade/math.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/template_ref.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/ng_module_factory.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/component_factory_resolver.js",
        "npm:@angular/core@2.0.0-rc.5/src/debug/debug_renderer.js",
        "npm:@angular/core@2.0.0-rc.5/src/debug/debug_node.js",
        "npm:@angular/core@2.0.0-rc.5/src/console.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/animation_styles.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/animation_style_util.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/animation_constants.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/animation_sequence_player.js",
        "npm:@angular/core@2.0.0-rc.5/src/animation/animation_keyframe.js",
        "npm:@angular/core@2.0.0-rc.5/src/facade/async.js",
        "npm:rxjs@5.0.0-beta.6/Observable.js",
        "npm:rxjs@5.0.0-beta.6.json",
        "npm:rxjs@5.0.0-beta.6/util/toSubscriber.js",
        "npm:rxjs@5.0.0-beta.6/symbol/rxSubscriber.js",
        "npm:rxjs@5.0.0-beta.6/util/root.js",
        "npm:rxjs@5.0.0-beta.6/Subscriber.js",
        "npm:rxjs@5.0.0-beta.6/Observer.js",
        "npm:rxjs@5.0.0-beta.6/Subscription.js",
        "npm:rxjs@5.0.0-beta.6/util/UnsubscriptionError.js",
        "npm:rxjs@5.0.0-beta.6/util/errorObject.js",
        "npm:rxjs@5.0.0-beta.6/util/tryCatch.js",
        "npm:rxjs@5.0.0-beta.6/util/isFunction.js",
        "npm:rxjs@5.0.0-beta.6/util/isObject.js",
        "npm:rxjs@5.0.0-beta.6/util/isArray.js",
        "npm:rxjs@5.0.0-beta.6/symbol/observable.js",
        "npm:rxjs@5.0.0-beta.6/Subject.js",
        "npm:rxjs@5.0.0-beta.6/util/ObjectUnsubscribedError.js",
        "npm:rxjs@5.0.0-beta.6/util/throwError.js",
        "npm:rxjs@5.0.0-beta.6/SubjectSubscription.js",
        "npm:@angular/core@2.0.0-rc.5/src/application_module.js",
        "npm:@angular/core@2.0.0-rc.5/src/metadata.js",
        "npm:@angular/core@2.0.0-rc.5/src/metadata/ng_module.js",
        "npm:@angular/core@2.0.0-rc.5/src/metadata/directives.js",
        "npm:@angular/core@2.0.0-rc.5/src/metadata/di.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/dynamic_component_loader.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/compiler.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/component_resolver.js",
        "npm:@angular/core@2.0.0-rc.5/src/application_ref.js",
        "npm:@angular/core@2.0.0-rc.5/src/zone/ng_zone.js",
        "npm:@angular/core@2.0.0-rc.5/src/zone/ng_zone_impl.js",
        "npm:@angular/core@2.0.0-rc.5/src/testability/testability.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/component_factory.js",
        "npm:@angular/core@2.0.0-rc.5/src/application_init.js",
        "npm:@angular/core@2.0.0-rc.5/src/platform_core_providers.js",
        "npm:@angular/core@2.0.0-rc.5/src/platform_directives_and_pipes.js",
        "npm:@angular/core@2.0.0-rc.5/src/change_detection.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/systemjs_component_resolver.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/system_js_ng_module_factory_loader.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/query_list.js",
        "npm:@angular/core@2.0.0-rc.5/src/linker/ng_module_factory_loader.js",
        "npm:@angular/core@2.0.0-rc.5/src/render.js",
        "npm:@angular/core@2.0.0-rc.5/src/zone.js",
        "npm:@angular/core@2.0.0-rc.5/src/util.js",
        "npm:@angular/router@3.0.0-rc.1/index.js",
        "npm:@angular/router@3.0.0-rc.1.json",
        "npm:@angular/router@3.0.0-rc.1/src/url_tree.js",
        "npm:@angular/router@3.0.0-rc.1/src/utils/collection.js",
        "npm:@angular/router@3.0.0-rc.1/src/shared.js",
        "npm:rxjs@5.0.0-beta.6/observable/of.js",
        "npm:rxjs@5.0.0-beta.6/observable/ArrayObservable.js",
        "npm:rxjs@5.0.0-beta.6/util/isScheduler.js",
        "npm:rxjs@5.0.0-beta.6/observable/EmptyObservable.js",
        "npm:rxjs@5.0.0-beta.6/observable/ScalarObservable.js",
        "npm:rxjs@5.0.0-beta.6/observable/fromPromise.js",
        "npm:rxjs@5.0.0-beta.6/observable/PromiseObservable.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/last.js",
        "npm:rxjs@5.0.0-beta.6/operator/last.js",
        "npm:rxjs@5.0.0-beta.6/util/EmptyError.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/concatAll.js",
        "npm:rxjs@5.0.0-beta.6/operator/concatAll.js",
        "npm:rxjs@5.0.0-beta.6/operator/mergeAll.js",
        "npm:rxjs@5.0.0-beta.6/util/subscribeToResult.js",
        "npm:rxjs@5.0.0-beta.6/InnerSubscriber.js",
        "npm:rxjs@5.0.0-beta.6/symbol/iterator.js",
        "npm:rxjs@5.0.0-beta.6/util/isPromise.js",
        "npm:rxjs@5.0.0-beta.6/OuterSubscriber.js",
        "npm:@angular/router@3.0.0-rc.1/src/router_state.js",
        "npm:@angular/router@3.0.0-rc.1/src/utils/tree.js",
        "npm:rxjs@5.0.0-beta.6/BehaviorSubject.js",
        "npm:@angular/router@3.0.0-rc.1/src/router_providers.js",
        "npm:@angular/router@3.0.0-rc.1/src/common_router_providers.js",
        "npm:@angular/router@3.0.0-rc.1/src/router_outlet_map.js",
        "npm:@angular/router@3.0.0-rc.1/src/router_config_loader.js",
        "npm:@angular/router@3.0.0-rc.1/src/router.js",
        "npm:@angular/router@3.0.0-rc.1/src/resolve.js",
        "npm:rxjs@5.0.0-beta.6/observable/forkJoin.js",
        "npm:rxjs@5.0.0-beta.6/observable/ForkJoinObservable.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/toPromise.js",
        "npm:rxjs@5.0.0-beta.6/operator/toPromise.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/map.js",
        "npm:rxjs@5.0.0-beta.6/operator/map.js",
        "npm:@angular/router@3.0.0-rc.1/src/recognize.js",
        "npm:@angular/router@3.0.0-rc.1/src/create_url_tree.js",
        "npm:@angular/router@3.0.0-rc.1/src/create_router_state.js",
        "npm:@angular/router@3.0.0-rc.1/src/config.js",
        "npm:@angular/router@3.0.0-rc.1/src/apply_redirects.js",
        "npm:rxjs@5.0.0-beta.6/observable/from.js",
        "npm:rxjs@5.0.0-beta.6/observable/FromObservable.js",
        "npm:rxjs@5.0.0-beta.6/operator/observeOn.js",
        "npm:rxjs@5.0.0-beta.6/Notification.js",
        "npm:rxjs@5.0.0-beta.6/observable/ArrayLikeObservable.js",
        "npm:rxjs@5.0.0-beta.6/observable/IteratorObservable.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/catch.js",
        "npm:rxjs@5.0.0-beta.6/operator/catch.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/first.js",
        "npm:rxjs@5.0.0-beta.6/operator/first.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/every.js",
        "npm:rxjs@5.0.0-beta.6/operator/every.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/reduce.js",
        "npm:rxjs@5.0.0-beta.6/operator/reduce.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/mergeAll.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/mergeMap.js",
        "npm:rxjs@5.0.0-beta.6/operator/mergeMap.js",
        "npm:@angular/common@2.0.0-rc.5/index.js",
        "npm:@angular/common@2.0.0-rc.5.json",
        "npm:@angular/common@2.0.0-rc.5/src/localization.js",
        "npm:@angular/common@2.0.0-rc.5/src/location.js",
        "npm:@angular/common@2.0.0-rc.5/src/location/location.js",
        "npm:@angular/common@2.0.0-rc.5/src/location/location_strategy.js",
        "npm:@angular/common@2.0.0-rc.5/src/location/path_location_strategy.js",
        "npm:@angular/common@2.0.0-rc.5/src/location/platform_location.js",
        "npm:@angular/common@2.0.0-rc.5/src/facade/lang.js",
        "npm:@angular/common@2.0.0-rc.5/src/facade/exceptions.js",
        "npm:@angular/common@2.0.0-rc.5/src/facade/exception_handler.js",
        "npm:@angular/common@2.0.0-rc.5/src/facade/collection.js",
        "npm:@angular/common@2.0.0-rc.5/src/facade/base_wrapped_exception.js",
        "npm:@angular/common@2.0.0-rc.5/src/location/hash_location_strategy.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/validators.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/model.js",
        "npm:@angular/common@2.0.0-rc.5/src/facade/async.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/validators.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/select_control_value_accessor.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/control_value_accessor.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_model.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/shared.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/select_multiple_control_value_accessor.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/radio_control_value_accessor.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_control.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/abstract_control_directive.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/number_value_accessor.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/normalize_validator.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/default_value_accessor.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/checkbox_value_accessor.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_form_model.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/control_container.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_form_control.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_form.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_control_status.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_control_name.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives/ng_control_group.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/form_builder.js",
        "npm:@angular/common@2.0.0-rc.5/src/forms-deprecated/directives.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/ng_template_outlet.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/ng_switch.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/ng_style.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/ng_plural.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/ng_if.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/ng_for.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/ng_class.js",
        "npm:@angular/common@2.0.0-rc.5/src/directives/core_directives.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/uppercase_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/invalid_pipe_argument_exception.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/slice_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/replace_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/number_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/facade/intl.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/lowercase_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/json_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/i18n_select_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/i18n_plural_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/date_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/common_pipes.js",
        "npm:@angular/common@2.0.0-rc.5/src/pipes/async_pipe.js",
        "npm:@angular/common@2.0.0-rc.5/src/common_directives.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/index.js",
        "npm:@angular/platform-browser@2.0.0-rc.5.json",
        "npm:@angular/platform-browser@2.0.0-rc.5/private_export.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/shared_styles_host.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/dom_tokens.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/dom_adapter.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/facade/lang.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/facade/collection.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/events/dom_events.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/events/event_manager.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/facade/exceptions.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/facade/exception_handler.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/facade/base_wrapped_exception.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/dom_renderer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/util.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/animation_driver.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/core_private.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/debug/ng_probe.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/security/dom_sanitization_service.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/security/url_sanitizer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/security/style_sanitizer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/security/html_sanitizer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/events/key_events.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/events/hammer_gestures.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/events/hammer_common.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/testability.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/location/browser_platform_location.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/location/history.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/browser_adapter.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/generic_browser_adapter.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/web_animations_driver.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/web_animations_player.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/worker_app.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/worker/worker_adapter.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/worker/renderer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/worker/event_deserializer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/serializer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/serialized_types.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/render_store.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/messaging_api.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/message_bus.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/client_message_broker.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/service_message_broker.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/post_message_bus.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/facade/async.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/shared/api.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/worker_render.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/ui/renderer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/ui/event_dispatcher.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/ui/event_serializer.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/ui/location_providers.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/ui/platform_location.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/worker/location_providers.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/web_workers/worker/platform_location.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/dom/debug/by.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/tools/tools.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/tools/common_tools.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/facade/browser.js",
        "npm:@angular/platform-browser@2.0.0-rc.5/src/browser/title.js",
        "npm:@angular/router@3.0.0-rc.1/src/router_module.js",
        "npm:@angular/router@3.0.0-rc.1/src/directives/router_outlet.js",
        "npm:@angular/router@3.0.0-rc.1/src/directives/router_link_active.js",
        "npm:@angular/router@3.0.0-rc.1/src/directives/router_link.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.12.json",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "catundercover/components/navbar/navbar.component.js",
        "catundercover/components/navbar/navbar.component.html",
        "catundercover/pipes/split-list.pipe.js",
        "npm:lodash@4.13.1/lodash.js",
        "npm:lodash@4.13.1.json",
        "npm:@angular2-material/button@2.0.0-alpha.5-2/button.js",
        "npm:@angular2-material/button@2.0.0-alpha.5-2.json",
        "catundercover/routes/index.js",
        "catundercover/pages/work/view.component.js",
        "catundercover/components/portfolio/portfolio-item.component.js",
        "catundercover/directives/sticky.js",
        "catundercover/components/portfolio/portfolio.service.js",
        "catundercover/reducers/works.js",
        "catundercover/reducers/tags.js",
        "catundercover/actions/index.js",
        "catundercover/actions/works.js",
        "catundercover/actions/tags.js",
        "npm:@ngrx/store@2.0.1/index.js",
        "npm:@ngrx/store@2.0.1.json",
        "npm:@ngrx/store@2.0.1/utils.js",
        "npm:@ngrx/store@2.0.1/store.js",
        "npm:@ngrx/core@1.0.0/operator/select.js",
        "npm:@ngrx/core@1.0.0.json",
        "npm:rxjs@5.0.0-beta.6/operator/distinctUntilChanged.js",
        "npm:rxjs@5.0.0-beta.6/operator/pluck.js",
        "npm:@ngrx/core@1.0.0/SyncSubject.js",
        "npm:@ngrx/store@2.0.1/state.js",
        "npm:rxjs@5.0.0-beta.6/scheduler/queue.js",
        "npm:rxjs@5.0.0-beta.6/scheduler/QueueScheduler.js",
        "npm:rxjs@5.0.0-beta.6/scheduler/FutureAction.js",
        "npm:rxjs@5.0.0-beta.6/scheduler/QueueAction.js",
        "npm:rxjs@5.0.0-beta.6/operator/scan.js",
        "npm:rxjs@5.0.0-beta.6/operator/withLatestFrom.js",
        "npm:@ngrx/store@2.0.1/reducer.js",
        "npm:@ngrx/store@2.0.1/ng2.js",
        "npm:@ngrx/store@2.0.1/dispatcher.js",
        "catundercover/components/portfolio/portfolio-item.component.html!github:systemjs/plugin-text@0.0.8/text.js",
        "npm:@angular2-material/grid-list@2.0.0-alpha.5-2/grid-list.js",
        "npm:@angular2-material/grid-list@2.0.0-alpha.5-2.json",
        "npm:@angular2-material/core@2.0.0-alpha.5-2/line/line.js",
        "npm:@angular2-material/core@2.0.0-alpha.5-2.json",
        "npm:@angular2-material/core@2.0.0-alpha.5-2/rtl/dir.js",
        "npm:@angular2-material/grid-list@2.0.0-alpha.5-2/grid-list-errors.js",
        "npm:@angular2-material/core@2.0.0-alpha.5-2/errors/error.js",
        "npm:@angular2-material/grid-list@2.0.0-alpha.5-2/tile-styler.js",
        "npm:@angular2-material/grid-list@2.0.0-alpha.5-2/tile-coordinator.js",
        "npm:@angular2-material/grid-list@2.0.0-alpha.5-2/grid-tile.js",
        "npm:@angular2-material/card@2.0.0-alpha.5-2/card.js",
        "npm:@angular2-material/card@2.0.0-alpha.5-2.json",
        "catundercover/pages/work/index.component.js",
        "catundercover/components/portfolio/portfolio.component.js",
        "catundercover/components/portfolio/portfolio-showcase.component.js",
        "catundercover/components/portfolio/portfolio-showcase.component.html!github:systemjs/plugin-text@0.0.8/text.js",
        "catundercover/components/portfolio/portfolio.component.html!github:systemjs/plugin-text@0.0.8/text.js",
        "catundercover/pages/thoughts/index.component.js",
        "catundercover/pages/moodboard/index.component.js",
        "catundercover/components/moodboard/moodboard.component.js",
        "catundercover/reducers/moodboard.js",
        "catundercover/components/moodboard/moodboard.component.html!github:systemjs/plugin-text@0.0.8/text.js",
        "catundercover/pages/about/index.component.js",
        "catundercover/components/about/about.component.js",
        "catundercover/components/about/about.component.html!github:systemjs/plugin-text@0.0.8/text.js",
        "catundercover/reducers/index.js",
        "npm:rxjs@5.0.0-beta.6/add/operator/let.js",
        "npm:rxjs@5.0.0-beta.6/operator/let.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/index.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5.json",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/xhr/xhr_impl.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/facade/lang.js",
        "npm:@angular/compiler@2.0.0-rc.5/index.js",
        "npm:@angular/compiler@2.0.0-rc.5.json",
        "npm:@angular/compiler@2.0.0-rc.5/private_export.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/view_compiler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/view_builder.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/util.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/util.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/output_ast.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/facade/lang.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/facade/collection.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/identifiers.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/compile_metadata.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/url_resolver.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/selector.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/facade/exceptions.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/facade/exception_handler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/facade/base_wrapped_exception.js",
        "npm:@angular/compiler@2.0.0-rc.5/core_private.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/constants.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/compile_view.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/compile_query.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/compile_pipe.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/compile_method.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/compile_element.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/template_parser/template_ast.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/value_util.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/animation/animation_compiler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/animation/animation_parser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/animation/styles_collection.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/animation/animation_ast.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/parse_util.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/facade/math.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/view_binder.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/property_binder.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/expression_converter.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/expression_parser/ast.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/compile_binding.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/lifecycle_binder.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/view_compiler/event_binder.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/config.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/template_parser/template_parser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/template_parser/template_preparser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/tags.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/style_url_resolver.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/schema/element_schema_registry.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/provider_analyzer.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/interpolation_config.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/assertions.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/icu_ast_expander.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/ast.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/html_parser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/parser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/lexer.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/chars.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/html_tags.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/expression_parser/parser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/expression_parser/lexer.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/style_compiler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/shadow_css.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/schema/dom_element_schema_registry.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/schema/dom_security_schema.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/ts_emitter.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/abstract_emitter.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/path_util.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ng_module_compiler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/metadata_resolver.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/pipe_resolver.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ng_module_resolver.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/lifecycle_reflector.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/directive_resolver.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/directive_normalizer.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/xhr.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/compiler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/runtime_compiler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/output_jit.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/abstract_js_emitter.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/output/output_interpreter.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/offline_compiler.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/index.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/serializers/xtb.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/parse_util.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/xml_parser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/ml_parser/xml_tags.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/serializers/xmb.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/serializers/xml_helper.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/message_bundle.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/extractor_merger.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/i18n_parser.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/serializers/placeholder.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/i18n_ast.js",
        "npm:@angular/compiler@2.0.0-rc.5/src/i18n/digest.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/xhr/xhr_cache.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/facade/exceptions.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/facade/exception_handler.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/facade/collection.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/facade/base_wrapped_exception.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/src/platform_providers.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/platform_browser_private.js",
        "npm:@angular/platform-browser-dynamic@2.0.0-rc.5/core_private.js"
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
    "clean-css": "npm:clean-css@3.4.19",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "less": "github:katrotz/systemjs-less-plugin@1.8.5",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "@angular/router": "npm:@angular/router@3.0.0-rc.1",
    "@angular/http": "npm:@angular/http@2.0.0-rc.5",
    "@angular/common": "npm:@angular/common@2.0.0-rc.5",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.5",
    "@angular/core": "npm:@angular/core@2.0.0-rc.5",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.5",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.5",
    "@angular2-material/button": "npm:@angular2-material/button@2.0.0-alpha.5-2",
    "@angular2-material/card": "npm:@angular2-material/card@2.0.0-alpha.5-2",
    "@angular2-material/core": "npm:@angular2-material/core@2.0.0-alpha.5-2",
    "@angular2-material/grid-list": "npm:@angular2-material/grid-list@2.0.0-alpha.5-2",
    "@angular2-material/toolbar": "npm:@angular2-material/toolbar@2.0.0-alpha.5-2",
    "@ngrx/core": "npm:@ngrx/core@1.0.0",
    "@ngrx/store": "npm:@ngrx/store@2.0.1",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@2.4.0",
    "css": "github:systemjs/plugin-css@0.1.25",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "errno": "npm:errno@0.1.4",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "graceful-fs": "npm:graceful-fs@4.1.4",
    "image-size": "npm:image-size@0.5.0",
    "json": "github:systemjs/plugin-json@0.1.2",
    "lightbox2": "npm:lightbox2@2.8.2",
    "lodash": "npm:lodash@4.13.1",
    "mime": "npm:mime@1.3.4",
    "mkdirp": "npm:mkdirp@0.5.1",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "promise": "npm:promise@7.1.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.8",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "source-map": "npm:source-map@0.5.6",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.8",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
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
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "inherits": "npm:inherits@2.0.1"
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
        "inherits": "npm:inherits@2.0.1",
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
        "inherits": "npm:inherits@2.0.1",
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
        "inherits": "npm:inherits@2.0.1",
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
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
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
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
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
        "inherits": "npm:inherits@2.0.1"
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
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
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
    }
  }
});
