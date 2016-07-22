interface ParameterBag {
    [key: string]: any;
}

export class Request {
    protected url: string;


    protected _post : ParameterBag = {};
    protected _get : ParameterBag = {};
    protected _file : ParameterBag = {};
    protected _parameters : ParameterBag = {};

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
    public async addPost(key : string, value: any)  {
        this._post[key] = await value;
        return this;
    }

    /**
     *
     * @param key
     * @param value
     * @returns {Request}
     */
    public async addGet(key: string, value: any) {
        this._get[key] = await value;
        return this;
    }

    /**
     *
     * @param key
     * @param value
     * @returns {Request}
     */
    public async addParameter(key: string, value: any) {
        this._parameters[key] = await value;
        return this;
    }

    /**
     *
     * @param key
     * @param value
     * @returns {Request}
     */
    public async addFile(key: string, value: any)  {
        this._file[key] = await value;
        return this;
    }

    public async run() {

        return this;
    }

}


