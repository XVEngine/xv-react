import {container} from '../../Core/Container';
import {RequestHandler} from '../../Core/Service/Handler/RequestHandler';


container().registerService({
    name: 'xv.core.handler.request',
    factory: function(di){
        return new RequestHandler();
    },
    tags : ['handler']
});
