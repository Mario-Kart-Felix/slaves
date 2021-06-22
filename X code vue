"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var vue_property_decorator_1 = require("vue-property-decorator");
var index_module_scss_1 = require("./index.module.scss");
var monaco_editor_nls_1 = require("monaco-editor-nls");
var zh_hans_json_1 = require("monaco-editor-nls/locale/zh-hans.json");
monaco_editor_nls_1.setLocaleData(zh_hans_json_1["default"]);
var monaco = require('monaco-editor/esm/vs/editor/editor.api');
var XCodeEditor = /** @class */ (function (_super) {
    __extends(XCodeEditor, _super);
    function XCodeEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = '';
        return _this;
    }
    XCodeEditor.prototype.handleValueChange = function (nv) {
        var _a, _b;
        if (nv !== this.code) {
            this.code = nv;
            (_b = (_a = this.editor) === null || _a === void 0 ? void 0 : _a.getModel()) === null || _b === void 0 ? void 0 : _b.setValue(this.code);
        }
    };
    XCodeEditor.prototype.handleLangChange = function (nv) {
        var model = this.editor.getModel();
        if (model) {
            monaco.editor.setModelLanguage(model, this.lang);
        }
    };
    XCodeEditor.prototype.handleReadOnlyChange = function (nv) {
        this.editor.updateOptions({
            readOnly: nv
        });
    };
    XCodeEditor.prototype.emitInput = function (nv) {
        return nv;
    };
    XCodeEditor.prototype.emitChange = function (nv) {
        return nv;
    };
    /**
     * 初始化编辑器组件
     */
    XCodeEditor.prototype.initEditor = function () {
        var _this = this;
        var _a;
        this.editor = monaco.editor.create(this.$el, {
            language: this.lang,
            value: this.code,
            fontSize: 17,
            tabSize: 2,
            readOnly: this.readonly
        });
        (_a = this.editor.getModel()) === null || _a === void 0 ? void 0 : _a.onDidChangeContent(function (e) {
            _this.code = _this.editor.getValue();
            _this.emitInput(_this.code);
            _this.emitChange(_this.code);
        });
    };
    XCodeEditor.prototype.mounted = function () {
        this.initEditor();
    };
    XCodeEditor.prototype.render = function () {
        return (React.createElement("div", { "class": index_module_scss_1["default"].com },
            React.createElement("div", { "class": index_module_scss_1["default"].container })));
    };
    __decorate([
        vue_property_decorator_1.Prop({ "default": '' })
    ], XCodeEditor.prototype, "value");
    __decorate([
        vue_property_decorator_1.Prop({ "default": '' })
    ], XCodeEditor.prototype, "lang");
    __decorate([
        vue_property_decorator_1.Prop({ "default": false })
    ], XCodeEditor.prototype, "readonly");
    __decorate([
        vue_property_decorator_1.Watch('value', { immediate: true })
    ], XCodeEditor.prototype, "handleValueChange");
    __decorate([
        vue_property_decorator_1.Watch('lang')
    ], XCodeEditor.prototype, "handleLangChange");
    __decorate([
        vue_property_decorator_1.Watch('readonly')
    ], XCodeEditor.prototype, "handleReadOnlyChange");
    __decorate([
        vue_property_decorator_1.Emit('input')
    ], XCodeEditor.prototype, "emitInput");
    __decorate([
        vue_property_decorator_1.Emit('change')
    ], XCodeEditor.prototype, "emitChange");
    XCodeEditor = __decorate([
        vue_property_decorator_1.Component
    ], XCodeEditor);
    return XCodeEditor;
}(vue_property_decorator_1.Vue));
exports["default"] = XCodeEditor;
