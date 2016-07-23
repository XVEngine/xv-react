import {ServiceRegisterInterface} from './ServiceRegisterInterface';
import Collections = require('typescript-collections');


export class Container {

    protected parameters = new Collections.Dictionary<string, any>();

    protected services = new Collections.Dictionary<string, ServiceRegisterInterface>();

    protected serviceInstances = new Collections.Dictionary<string, any>();

    /**
     *
     * @param service
     * @returns {Container}
     */
    public registerService(service:ServiceRegisterInterface) {

        this.services.setValue(
            (service.name as string).toLowerCase(),
            service
        );

        return this;
    }


    public async getService(name : string) {

        if(!this.hasService(name)){
            throw new Error(); //@todo
        }

        return this.getServiceInstance(
            this.services.getValue(name.toLowerCase())
        );
    }

    /**
     *
     * @param name
     * @returns {boolean}
     */
    public hasService(name:string):boolean {
        return this.services.containsKey(name.toLowerCase());
    }


    /**
     *
     * @param name
     * @param value
     * @returns {Container}
     */
    public registerParameter(name:string, value:any) {
        this.parameters.setValue(name, value);

        return this;
    }


    public getParameter(name:string) {
        if (!this.parameters.containsKey(name)) {

        }

        return this.parameters.getValue(name);
    }

    /**
     *
     * @param tagName
     * @returns {Array}
     */
    public getTaggedServicesNames(tagName:string) : string[] {
        let result : string[] = [];
        this.services.forEach((key : string, v : ServiceRegisterInterface) => {
            if(v.tags && v.tags.indexOf(tagName)){
                result.push(key as string);
            }
        });

        return result;
    }


    /**
     *
     * @param service
     * @returns {any}
     */
    protected async getServiceInstance(service:ServiceRegisterInterface) {
        if (this.serviceInstances.containsKey(service.name.toLowerCase())) {
            return this.serviceInstances.getValue(service.name.toLowerCase());
        }

        let instance = await service.factory(this);
        this.serviceInstances.setValue(
            service.name.toLowerCase(),
            instance
        );

        return instance;
    }
}