import {Container as ContainerBag} from './DI/Container';


let containerInstance = new ContainerBag();


export function container(){
    return containerInstance;
}