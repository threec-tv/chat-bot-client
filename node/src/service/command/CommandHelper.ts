import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";

export class CommandHelper {

    static splitCommand(fullCommand: string): string[] {
        // example arg1 arg2

        return fullCommand.split(' ');
    }

    static validationError(errors: string[], messageRequest: MessageRequest): MessageResponse {
        let error = `<ol> ${errors.map(error => `<li>${error}</li>`)} </ol>`

        return new MessageResponse(messageRequest.channelId,
            messageRequest.chatId,
            messageRequest.message,
            error,
            true);

    }
}
