import { Service, injector } from '../view';
import { service } from '../decorator';

@service({
    namespace: 'automate',
    key: 'injector'
})
export class Injector extends Service {
    constructor() {
        super();
    }

    parseComponent(name, using, defaultNs) {
        return injector.parseComponent(name, using, defaultNs);
    }

    parseDirective(name, using, defaultNs) {
        return injector.parseDirective(name, using, defaultNs);
    }

    parseService(name, using, defaultNs) {
        return injector.parseService(name, using, defaultNs);
    }

    parseFilter(name, using, defaultNs) {
        return injector.parseFilter(name, using, defaultNs);
    }

}