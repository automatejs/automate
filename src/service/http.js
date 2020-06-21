import { Service } from '../view';
import { service } from '../decorator';
import * as utils from '../utils';

@service({
    namespace: 'automate',
    key: 'http'
})
export class HttpService extends Service {
    constructor() {
        super();
    }

    createXHR() {
        return new XMLHttpRequest();
    }

    createPromise(resolve, reject) {
        return new Promise(resolve, reject);
    }

    addUrlParam(url, name, value) {
        url += (url.indexOf('?') === -1 ? '?' : '&');
        url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
        return url;
    }

    setHttpRequestHeaders(xhr, config) {
        utils.forEach(config.headers, function (value, key) {
            key = utils.convertFromHumpName(key, '-');
            xhr.setRequestHeader(key, value);
        });
    }

    getHttpResponseHeaders(headers) {
        var parsed = {};

        if (!headers) {
            return parsed;
        }

        var key, val, i;

        utils.forEach(headers.split('\n'), function (line, index) {
            i = line.indexOf(':');
            key = line.substr(0, i).trim().toLowerCase();
            val = line.substr(i + 1).trim();

            if (key) {
                if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                    return;
                }
                if (key === 'set-cookie') {
                    parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                } else {
                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                }
            }
        });

        return parsed;
    }

    buildUrl(url, config) {
        var self = this;

        if (config.data != null && config.method.toLowerCase() === 'get') {
            utils.forEach(config.data, function (value, name) {
                self.addUrlParam(url, name, value);
            });
        }
        return url;
    }

    request(config) {
        var self = this;

        return this.createPromise(function (resolve, reject) {
            var xhr = self.createXHR();

            xhr.onload = function () {
                // Prepare the response
                var responseHeaders = 'getAllResponseHeaders' in xhr ? self.getHttpResponseHeaders(xhr.getAllResponseHeaders()) : null;
                var responseData = !config.responseType || config.responseType === 'text' ? xhr.responseText : xhr.response;
                var response = {
                    data: responseData,
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: responseHeaders,
                    config: config,
                    request: xhr
                };

                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    // successfully
                    resolve(response);
                }
                else {
                    // unsuccessfully
                    reject(response);
                }

                xhr = null;
            };

            var method = config.method.toLowerCase(),
                url = self.buildUrl(config.url, config);

            xhr.open(method, url, true);
            xhr.send(config.data);
        });
    }

    get(url, data, options) {
        var config = {
            method: 'get',
            url: url,
            data: data
        };

        if (options != null) {
            utils.extend(config, options);
        }

        return this.request(config);
    }

    post(url, data, options) {
        var config = {
            method: 'post',
            url: url,
            headers: {
                contentType: 'application/json'
            },
            data: JSON.stringify(data)
        };

        if (options != null) {
            utils.extend(config, options);
        }

        return this.request(config);
    }

}