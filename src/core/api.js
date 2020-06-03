import { Message } from './message';

export function isMessage(obj) {
    return obj instanceof Message;
}