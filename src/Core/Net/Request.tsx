import URI = require('urijs');
import URITemplate = require('urijs/src/URITemplate');
import {Dictionary} from '../Utils/Collection/Dictionary';

declare var global: any;

/**
 *
 */
export class Request {

    /**
     *
     */
    protected url:string;


    protected _post = new Dictionary<any>();
    protected _get = new Dictionary<any>();
    protected _header = new Dictionary<string>();
    protected _parameters = new Dictionary<string>();

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

        let template : any = URITemplate;

        let urlUri = template(this.url)
            .expand(parameters)
            .search((data: any) => {
            this._get.forEach((k:string, v:any) => {
                data[k] = v;
            });
        });



        let env = (typeof global !== 'undefined') ? global : window;

        return await fetch(
            new env.Request(urlUri.toString(), requestParameters)
        );
    }

}


