import {MessageResponse} from "~/types/MessageResponse";

export class CommandHelper {
    static splitCommand(fullCommand: string): string[] {
        return [];
    }

    static validationError(errors: string[]): MessageResponse {
        return null as unknown as MessageResponse;

    }
}
