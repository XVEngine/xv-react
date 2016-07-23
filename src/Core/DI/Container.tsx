import {ServiceRegisterInterface} from './ServiceRegisterInterface';
import {Dictionary} from './../Utils/Collection/Dictionary'


export class Container {

    protected parameters = new Dictionary<any>();

    protected services = new Dictionary<ServiceRegisterInterface>();

    protected serviceInstances = new Dictionary<any>();

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
        return this.services.hasKey(name.toLowerCase());
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
        if (!this.parameters.hasKey(name)) {

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
        if (this.serviceInstances.hasKey(service.name.toLowerCase())) {
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