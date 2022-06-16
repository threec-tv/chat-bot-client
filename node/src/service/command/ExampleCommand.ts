import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";
import {CommandResolver} from "~/service/command/CommandResolver";

export class ExampleCommand implements CommandResolver {

    commandName(): string {
        return "example";
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        return null as unknown as MessageResponse;
    }

    validate(messageRequest: MessageRequest): string[] {
        return [];
    }

}

