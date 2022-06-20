import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";

export type Command = string;

export type CommandArgs = Map<Command, string[]>;

export class CommandHelper {

    static splitCommand(fullCommand: string): CommandArgs {
        // example arg1 arg2

        if (!fullCommand)
            return new Map<Command, string[]>();

        let args = fullCommand.trim().split(' ');
        const master: Command = args[0];
        args.shift();

        return new Map<Command, string[]>().set(master, args);
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
