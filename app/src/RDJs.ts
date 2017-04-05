// var exports ={}; 
/**
 * Instance is an RDJs controller.  
 */

export class RDJs {

  private baseXhr(type: string, url: string, headers: { key: string; value: any; }[], resolve: Function, reject: Function, async: boolean = true): XMLHttpRequest {
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, async);
    if (headers !== undefined && headers.length > 0) {
      headers.forEach(element => {
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
    return xhr;
  }
  public all(promises: Promise<any>[], 
    sucess: (value: any) => any | PromiseLike<any>, 
    fail: ((reason: any) => any | PromiseLike<any>) | undefined | null): Promise<any> {

    var results = Promise.all(promises).then(sucess).catch(fail);
    return results;
  }
  public trace(promises: Promise<any>[], 
    sucess: (value: any) => any | PromiseLike<any>, 
    fail: ((reason: any) => any | PromiseLike<any>) | undefined | null): Promise<any> {

    var results = Promise.race(promises).then(sucess).catch(fail);
    return results;
  }

  public get(url: string, params: any, headers: { key: string; value: any; }[], async: boolean = true): Promise<any> {

    let results = new Promise<any>((resolve, reject) => {
      this.baseXhr("GET", url, headers, resolve, reject)
        .send(params === undefined ? undefined : params);
    });
    return results;
  }

  public post(url: string, params: any, headers: { key: string; value: any; }[], async: boolean = true): Promise<any> {
    let results = new Promise<any>((resolve, reject) => {
      this.baseXhr("POST", url, headers, resolve, reject)
        .send(params === undefined ? undefined : params);
    });
    return results;
  }

  public put(url: string, params: any, headers: { key: string; value: any; }[], async: boolean = true): Promise<any> {
    let results = new Promise<any>((resolve, reject) => {
      this.baseXhr("PUT", url, headers, resolve, reject)
        .send(params === undefined ? undefined : params);
    });
    return results;
  }
  public delete(url: string, params: any, headers: { key: string; value: any; }[], async: boolean = true): Promise<any> {
    let results = new Promise<any>((resolve, reject) => {
      this.baseXhr("DELETE", url, headers, resolve, reject)
        .send(params === undefined ? undefined : params);
    });
    return results;
  }
}

//window.RDJs =  new RDJs(); 