import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";
import {CommandResolver} from "~/service/command/CommandResolver";

export class ExampleCommand implements CommandResolver {

    commandName(): string {
        return "/example";
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        return new MessageResponse(messageRequest.channelId,
            messageRequest.chatId,
            messageRequest.message,
            "<h1>example command resolved</h1>",
            false);
    }

    validate(messageRequest: MessageRequest): string[] {
        return [];
    }

    helpText(): string {
        return "example help text";
    }

    helpTextEnabled(): boolean {
        return true;
    }

}

