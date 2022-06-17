import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";
import {CommandResolver} from "~/service/command/CommandResolver";

export class AnotherCommandWithValidationFailure implements CommandResolver {

    commandName(): string {
        return "/validationFail";
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        return new MessageResponse(messageRequest.channelId,
            messageRequest.chatId,
            messageRequest.message,
            "<h1>you shouldnt see me. </h1>",
            false);
    }

    validate(messageRequest: MessageRequest): string[] {
        return ['validation failure', 'nuu uhh'];
    }

    helpText(): string {
        return "validation help text";
    }

    helpTextEnabled(): boolean {
        return false;
    }

}

