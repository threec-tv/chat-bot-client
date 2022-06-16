import {TId} from "~/types/TId";

export interface ChannelDto {
    channelId: TId;
    profileId: TId;
    chatId: TId;
    categories: Array<Category>;
    displayName: string;
    profilePictureUrl: string;
    bannerUrl: string;
    aboutHTML: string;
    emotes: Emote[];
    streamTitle: string;
    ageLimited: boolean;
    tags?: Array<String>;
    channelMods?: Array<TId>;
    streamOnline: boolean;
    channelToHost?: ChannelDto;
    hasActiveSupporterPro: boolean;
}

interface Category {
    name: string,
    displayName: string
    categoryBannerUrl: string;
}

interface Emote {
    name: string,
    url: string
    emoteTier: EmoteTier
}

enum EmoteTier {
    GLOBAL = 'GLOBAL',
    CHANNEL = 'CHANNEL',
    BRONZE = 'BRONZE',
    SILVER = 'SILVER',
    GOLD = 'GOLD',
}
