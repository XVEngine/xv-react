import {Request as RequestClass} from './../../Net/Request';

export class Request {

    public create(url: string) : RequestClass {
        let request = new RequestClass(url);


        return request;
    }
}