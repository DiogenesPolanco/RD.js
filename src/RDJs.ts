export interface Header {
  key: string;
  value: string;
}

export interface RequestOptions {
  headers?: Header[];
  async?: boolean;
}

export class RD {
  private baseXhr(
    type: string,
    url: string,
    headers: Header[],
    resolve: (value: unknown) => void,
    reject: (reason?: unknown) => void,
    isAsync: boolean = true
  ): XMLHttpRequest {
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
        } else {
          reject(xhr.responseText);
        }
      }
    };

    xhr.onerror = function () {
      reject(xhr.responseText);
    };

    return xhr;
  }

  public async all(
    promises: Promise<unknown>[],
    success: (value: unknown) => unknown,
    fail?: (reason: unknown) => unknown
  ): Promise<unknown> {
    try {
      const results = await Promise.all(promises);
      return success(results);
    } catch (error) {
      if (fail) {
        return fail(error);
      }
      throw error;
    }
  }

  public async trace(
    promises: Promise<unknown>[],
    success: (value: unknown) => unknown,
    fail?: (reason: unknown) => unknown
  ): Promise<unknown> {
    try {
      const result = await Promise.race(promises);
      return success(result);
    } catch (error) {
      if (fail) {
        return fail(error);
      }
      throw error;
    }
  }

  public get(url: string, params?: unknown, options: RequestOptions = {}): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '';
      this.baseXhr('GET', url + queryString, options.headers || [], resolve, reject, options.async ?? true)
        .send();
    });
  }

  public post(url: string, params?: unknown, options: RequestOptions = {}): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.baseXhr('POST', url, options.headers || [], resolve, reject, options.async ?? true)
        .send(params as string | null);
    });
  }

  public put(url: string, params?: unknown, options: RequestOptions = {}): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.baseXhr('PUT', url, options.headers || [], resolve, reject, options.async ?? true)
        .send(params as string | null);
    });
  }

  public delete(url: string, params?: unknown, options: RequestOptions = {}): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '';
      this.baseXhr('DELETE', url + queryString, options.headers || [], resolve, reject, options.async ?? true)
        .send();
    });
  }
}

const RDJs = new RD();
export { RDJs };
