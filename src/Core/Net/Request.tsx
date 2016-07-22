import URI = require('urijs');
import Collections = require('typescript-collections');


/**
 *
 */
export class Request {

    /**
     *
     */
    protected url:string;


    protected _post = new Collections.Dictionary<string, any>();
    protected _get = new Collections.Dictionary<string, any>();
    protected _header = new Collections.Dictionary<string, string>();
    protected _parameters = new Collections.Dictionary<string, string>();

    /**
     *
     * @param url
     */
    constructor(url:string) {
        this.url = url;

    }

    /**
     *
     * @param key
     * @param value
     * @returns {Request}
     */
    public async addPost(key:string, value:any) {
        this._post.setValue(key, await value);
        return this;
    }

    /**
     *
     * @param key
     * @param value
     * @returns {Request}
     */
    public async addGet(key:string, value:any) {
        this._get.setValue(key, await value);
        return this;
    }

    /**
     *
     * @param key
     * @param value
     * @returns {Request}
     */
    public async addParameter(key:string, value:any) {
        this._parameters.setValue(key, await value);
        return this;
    }


    /**
     *
     * @param key
     * @param value
     * @returns {Request}
     */
    public async addHeader(key:string, value:any) {
        this._header.setValue(key, await value);
        return this;
    }


    /**
     *
     * @returns {Response}
     */
    public async run() {

        let headers = new Headers();
        this._header.forEach((k:string, v:any) => {
            headers.append(k, v);
        });

        let data = new FormData();
        this._post.forEach((k:string, v:any) => {
            data.append(k, v);
        });


        let requestParameters = {
            'method': this._post.size ? 'POST' : 'GET',
            'headers': headers,
            'cache': 'no-cache'
        };

        let parameters : any = {};

        this._parameters.forEach((k:string, v:string) => {
            parameters[k] = v;
        });

        let urlUri = URI.expand(this.url, parameters);

        urlUri.search((data: any) => {
            this._get.forEach((k:string, v:any) => {
                data[k] = v;
            });
        });



        let req = new Request(urlUri.toString(), requestParameters);

        return await fetch(req);
    }

}


