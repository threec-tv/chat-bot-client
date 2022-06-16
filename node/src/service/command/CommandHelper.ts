import {MessageResponse} from "~/types/MessageResponse";

export class CommandHelper {

    static splitCommand(fullCommand: string): string[] {
        // example arg1 arg2

        return fullCommand.split(' ');
    }

    static validationError(errors: string[]): MessageResponse {
        return null as unknown as MessageResponse;

    }
}
