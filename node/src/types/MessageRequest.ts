import {TId} from "~/types/TId";
import {ChannelDto} from "~/types/ChannelDto";

export interface MessageRequest {
    channelId: TId;
    chatId: string;
    message: string;
    channel: ChannelDto;
}
