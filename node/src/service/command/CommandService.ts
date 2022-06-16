import {MessageResponse} from "~/types/MessageResponse";
import {MessageRequest} from "~/types/MessageRequest";
import {ExampleCommand} from "~/service/command/commands/ExampleCommand";
import {CommandHelper} from "~/service/command/CommandHelper";
import {CommandResolver} from "~/service/command/CommandResolver";
import {AnotherCommandWithValidationFailure} from "~/service/command/commands/AnotherCommandWithValidationFailure";

export class CommandService {

    private _commands: CommandResolver[];

    constructor() {
        this._commands = [new ExampleCommand(), new AnotherCommandWithValidationFailure()]
    }

    handle(messageRequest: MessageRequest): MessageResponse {
        let foundCommand = this.findCommand(messageRequest);

        if (foundCommand) {
            let errors = foundCommand.validate(messageRequest);
            if (errors.length !== 0) {
                return CommandHelper.validationError(errors, messageRequest)
            }
            return foundCommand.handle(messageRequest);
        }

        throw new Error("Command not found")

    }

    validate(messageRequest: MessageRequest): string[] {
        let foundCommand = this.findCommand(messageRequest);
        if (foundCommand) {
            return foundCommand.validate(messageRequest);
        }
        return [];
    }

    register() {
        return this._commands.map(value => value.commandName())
    }

    private findCommand(messageRequest: MessageRequest) {
        let commands = CommandHelper.splitCommand(messageRequest.message);

        return this._commands
            .filter(command => command.commandName() === commands[0])
            .find(value => value);
    }

    /**
     * testing only :(
     * @param value
     */
    set commands(value: CommandResolver[]) {
        this._commands = value;
    }


}
