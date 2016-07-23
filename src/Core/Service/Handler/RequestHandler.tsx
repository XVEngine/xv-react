import {HandlerInterface} from './HandlerInterface';

export class RequestHandler implements HandlerInterface{

    public async execute(parameters : any){

        return this;
    }
}