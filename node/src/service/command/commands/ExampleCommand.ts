import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";
import {CommandResolver} from "~/service/command/CommandResolver";

export class ExampleCommand implements CommandResolver {

    commandName(): string {
        return "example";
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        return new MessageResponse(messageRequest.channelId,
            messageRequest.chatId,
            messageRequest.message,
            "<h1>test</h1>");
    }

    validate(messageRequest: MessageRequest): string[] {
        return [];
    }

}

