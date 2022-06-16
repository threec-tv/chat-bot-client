import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";
import {ExampleCommand} from "~/service/command/commands/ExampleCommand";
import {CommandHelper} from "~/service/command/CommandHelper";
import {CommandResolver} from "~/service/command/CommandResolver";

export class CommandService {

    private _commands: CommandResolver[];

    constructor() {
        this._commands = [new ExampleCommand()]
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        let commands = CommandHelper.splitCommand(messageRequest.message);

        let foundCommand = this._commands
            .filter(command => command.commandName() === commands[0])
            .find(value => value);

        if (foundCommand) {
            let errors = foundCommand.validate(messageRequest);
            if (errors.length !== 0) {
                return CommandHelper.validationError(errors, messageRequest)
            }
            return foundCommand.handle(messageRequest);
        }

        throw new Error("Command not found")

    }

    register() {
        return this._commands.map(value => value.commandName())
    }

    /**
     * testing only :(
     * @param value
     */
    set commands(value: CommandResolver[]) {
        this._commands = value;
    }
}
