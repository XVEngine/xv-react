export class Dictionary <V> {

    protected table: {
        [key: string]: V;
    } = {};



    public hasKey(key : string){
        return typeof this.table[key] !== 'undefined';
    }


    /**
     *
     * @param key
     * @param value
     * @returns {Dictionary}
     */
    public setValue(key : string, value : V){
        this.table[key] = value;

        return this;
    }


    /**
     *
     * @param key
     * @param def
     * @returns {V}
     */
    public getValue(key : string, def : V = null) : V {
        return this.hasKey(key) ? this.table[key] : def;
    }


    public forEach(callable : (key : string, value : V) => void ){
        Object.keys(this.table).forEach((keyItem : string)=>{
            callable(keyItem, this.table[keyItem]);
        });

        return this;
    }


    public getKeys() : string[] {
        return Object.keys(this.table);
    }

    public size() : number {
        return this.getKeys.length;
    }

    public clear(){
        this.table = {};
        return this;
    }

    public remove(key: string){
        if(this.hasKey(key)){
            delete this.table[key];
        }

        return this;
    }
}
