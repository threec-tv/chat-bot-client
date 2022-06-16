import {TId} from "~/types/TId";

export interface IMessageResponse extends MessageResponse {
    parsedMessage: string;
}

export class MessageResponse implements IMessageResponse {
    private readonly _channelId: TId;
    private readonly _chatId: string;
    private readonly _message: string;
    private readonly _parsedMessage: string;

    constructor(channelId: TId, chatId: string, message: string, parsedMessage: string) {
        this._channelId = channelId;
        this._chatId = chatId;
        this._message = message;
        this._parsedMessage = parsedMessage;
    }

    get channelId(): TId {
        return this._channelId;
    }

    get chatId(): string {
        return this._chatId;
    }

    get message(): string {
        return this._message;
    }

    get parsedMessage(): string {
        return this._parsedMessage;
    }
}

