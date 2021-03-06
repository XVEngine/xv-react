import {Request} from './Core/Net/Request';
import {AbstractComponent} from './Core/Component/AbstractComponent';
import {AbstractEmitter} from './Core/Component/AbstractEmitter';
import {HtmlComponent} from './Component/Utils/HtmlComponent';
import {container as ContainerFunction} from './Core/Container';

declare var require: any;

function requireAll(r : any) { r.keys().forEach(r); }
requireAll(require.context('./', true, /\.tsx$/));

export var Core = {
    'Component': {
        'AbstractComponent' : AbstractComponent,
        'AbstractEmitter' : AbstractEmitter
    },
    'Net': {
        'Request': Request
    }
};

export var Component = {
    'Utils': {
        'HtmlComponent': HtmlComponent
    }
};

export var Container = ContainerFunction;