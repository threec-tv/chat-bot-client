import {MessageRequest} from "~/types/MessageRequest";
import {MessageResponse} from "~/types/MessageResponse";

export interface CommandResolver {
    commandName(): string;

    helpText(): string;

    helpTextEnabled(): boolean;

    validate(messageRequest: MessageRequest): string[];

    handle(messageRequest: MessageRequest): MessageResponse;

}
