export class RD {
    baseXhr(type, url, headers, resolve, reject, isAsync = true) {
        const xhr = new XMLHttpRequest();
        xhr.open(type, url, isAsync);
        if (headers && headers.length > 0) {
            headers.forEach((element) => {
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
        xhr.onerror = function () {
            reject(xhr.responseText);
        };
        return xhr;
    }
    async all(promises, success, fail) {
        try {
            const results = await Promise.all(promises);
            return success(results);
        }
        catch (error) {
            if (fail) {
                return fail(error);
            }
            throw error;
        }
    }
    async trace(promises, success, fail) {
        try {
            const result = await Promise.race(promises);
            return success(result);
        }
        catch (error) {
            if (fail) {
                return fail(error);
            }
            throw error;
        }
    }
    get(url, params, options = {}) {
        return new Promise((resolve, reject) => {
            const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
            this.baseXhr('GET', url + queryString, options.headers || [], resolve, reject, options.async ?? true)
                .send();
        });
    }
    post(url, params, options = {}) {
        return new Promise((resolve, reject) => {
            this.baseXhr('POST', url, options.headers || [], resolve, reject, options.async ?? true)
                .send(params);
        });
    }
    put(url, params, options = {}) {
        return new Promise((resolve, reject) => {
            this.baseXhr('PUT', url, options.headers || [], resolve, reject, options.async ?? true)
                .send(params);
        });
    }
    delete(url, params, options = {}) {
        return new Promise((resolve, reject) => {
            const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
            this.baseXhr('DELETE', url + queryString, options.headers || [], resolve, reject, options.async ?? true)
                .send();
        });
    }
}
const RDJs = new RD();
export { RDJs };
//# sourceMappingURL=RDJs.js.map