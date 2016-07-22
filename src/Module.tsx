import {Request} from './Core/Net/Request';
import {AbstractComponent} from './Core/Component/AbstractComponent';
import {AbstractEmitter} from './Core/Component/AbstractEmitter';
import {HtmlComponent} from './Component/Utils/HtmlComponent';

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