import {TId} from "~/types/TId";

export interface ProfileDto {
    id: TId;
    userName: string;
    displayName: string;
    authName: string;
    email: string;
    profilePictureUrl: string;
    bannerUrl: string;
    supporter?: boolean;
    metadata?: Map<string, string>;
    hasActiveSupporterPro: boolean;
}
