import {Container} from './Container'

export interface ServiceRegisterInterface {
    name : string,
    factory : (x : Container) => Object;
    tags? : string[];

}

