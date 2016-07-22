import * as React from 'react';




export abstract class AbstractComponent<P, S> extends React.Component<P, S>  {

    /**
     *
     * @type {string}
     */
    protected id : string = null;


    public getId() : string {
        return this.id;
    }

    public setId(id : string) {
        this.id = id;
        return this;
    }


    public addClass(classes : string){

        return this;
    }


    public alterClass() : string {
        return ''
    }

}
