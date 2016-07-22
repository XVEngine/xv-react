export abstract class AbstractEmitter {

    //protected events;

    public on(eventName:string, event : any) {

        return this;
    }

    public  async trigger(eventName:string) {

        return this;
    }

    public off(eventName?:string) {
        return this;
    }
}