import {ServiceRegisterInterface} from './ServiceRegisterInterface';
import Collections = require('typescript-collections');


export class Container {

    protected parameters  = new Collections.Dictionary<string, any>();

    protected services  = new Collections.Dictionary<string, ServiceRegisterInterface>();

    /**
     *
     * @param service
     * @returns {Container}
     */
    public registerService(service: ServiceRegisterInterface){

        this.services.setValue(
            service.name,
            service
        );

        return this;
    }


    public async getService(name : string){

        return '';
    }

    /**
     *
     * @param name
     * @returns {boolean}
     */
    public hasService(name : string) : boolean{
        return this.services.containsKey(name);
    }


    /**
     *
     * @param name
     * @param value
     * @returns {Container}
     */
    public registerParameter(name : string, value : any){
        this.parameters.setValue(name, value);

        return this;
    }


    public getParameter(name : string){
        if(!this.parameters.containsKey(name)){

        }

        return this.parameters.getValue(name);
    }

    /**
     *
     * @param tagName
     * @returns {Array}
     */
    public getTaggedServices(tagName : string) : any[]{

        return [];
    }
}