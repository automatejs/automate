import { Message } from './message';

// global events
export var events = {
    propertyChanged: new Message(),
    refreshView: new Message()
};