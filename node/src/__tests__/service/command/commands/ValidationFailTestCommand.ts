import {CommandResolver} from "~/service/command/CommandResolver";
import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";

export class ValidationFailTestCommand implements CommandResolver {
    commandName(): string {
        return "/validationTest";
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        return new MessageResponse(messageRequest.channelId, messageRequest.chatId, messageRequest.message, 'test', false);
    }

    validate(messageRequest: MessageRequest): string[] {
        return ['Normally I should do logic'];
    }

    helpText(): string {
        return "";
    }

    helpTextEnabled(): boolean {
        return false;
    }

}
