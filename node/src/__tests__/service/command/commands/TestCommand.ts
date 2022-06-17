import {CommandResolver} from "~/service/command/CommandResolver";
import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";

export class TestCommand implements CommandResolver {
    commandName(): string {
        return "/testCommand";
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        return new MessageResponse(messageRequest.channelId, messageRequest.chatId, messageRequest.message, 'test', false);
    }

    validate(messageRequest: MessageRequest): string[] {
        return [];
    }

    helpText(): string {
        return "";
    }

    helpTextEnabled(): boolean {
        return false;
    }

}
