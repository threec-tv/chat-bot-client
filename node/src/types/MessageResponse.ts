import {TId} from "~/types/TId";

export interface IMessageResponse extends MessageResponse {
    parsedMessage: string;
    validationError: boolean;
}

export class MessageResponse implements IMessageResponse {
    channelId: TId;
    chatId: string;
    message: string;
    parsedMessage: string;
    validationError: boolean;

    constructor(channelId: TId, chatId: string, message: string, parsedMessage: string, validationError: boolean) {
        this.channelId = channelId;
        this.chatId = chatId;
        this.message = message;
        this.parsedMessage = parsedMessage;
        this.validationError = validationError;
    }


}

