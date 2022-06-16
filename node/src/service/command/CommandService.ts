import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";
import {ExampleCommand} from "~/service/command/commands/ExampleCommand";
import {CommandHelper} from "~/service/command/CommandHelper";

export class CommandService {

    private readonly commands: ExampleCommand[];

    constructor() {
        this.commands = [new ExampleCommand()]
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        let commands = CommandHelper.splitCommand(messageRequest.message);

        let foundCommand = this.commands
            .filter(command => command.commandName() === commands[0])
            .find(value => value);

        if (foundCommand) {
            let errors = foundCommand.validate(messageRequest);
            if (errors.length !== 0) {
                return CommandHelper.validationError(errors)
            }
            return foundCommand.handle(messageRequest);
        }

        throw new Error("Command not found")

    }

    register() {
        return this.commands.map(value => value.commandName())
    }
}
