import {container} from '../../Core/Container';
import {Request} from '../../Core/Service/Net/Request';


container().registerService({
    name: 'xv.core.net.request',
    factory: function(di){
        return new Request();
    }
});