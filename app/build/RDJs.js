"use strict";
exports.__esModule = true;
if (exports === undefined) {
    var exports = {};
}
var RD = (function () {
    function RD() {
    }
    RD.prototype.baseXhr = function (type, url, headers, resolve, reject, async) {
        if (async === void 0) { async = true; }
        var xhr = new XMLHttpRequest();
        xhr.open(type, url, async);
        if (headers !== undefined && headers.length > 0) {
            headers.forEach(function (element) {
                xhr.setRequestHeader(element.key, element.value);
            });
        }
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 201) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(xhr.responseText);
                }
            }
        };
        return xhr;
    };
    RD.prototype.all = function (promises, sucess, fail) {
        var results = Promise.all(promises).then(sucess)["catch"](fail);
        return results;
    };
    RD.prototype.trace = function (promises, sucess, fail) {
        var results = Promise.race(promises).then(sucess)["catch"](fail);
        return results;
    };
    RD.prototype.get = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("GET", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    RD.prototype.post = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("POST", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    RD.prototype.put = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("PUT", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    RD.prototype.patch = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("PATCH", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    RD.prototype["delete"] = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("DELETE", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    return RD;
}());
var RDJs = new RD();
exports.RDJs = RDJs;
