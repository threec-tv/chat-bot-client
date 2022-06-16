import {TId} from "~/types/TId";

export interface MessageRequest {
    channelId: TId;
    chatId: string;
    message: string;
}
