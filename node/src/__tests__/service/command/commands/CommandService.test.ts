import {CommandService} from '~/service/command/CommandService';
import {MessageRequest} from "~/types/MessageRequest";
import {TestCommand} from "~/__tests__/service/command/commands/TestCommand";
import {ValidationFailTestCommand} from "~/__tests__/service/command/commands/ValidationFailTestCommand";
import {RegisterResponse} from "~/types/RegisterResponse";

let underTest: CommandService;
describe('Command Service Tests', () => {

    describe('Valid command', () => {
        beforeEach(() => {
            underTest = new CommandService();
            underTest.commands = [new TestCommand()]
        })

        test('returns registered', () => {
            const actualGreeting = underTest.register();

            const expected: RegisterResponse = {
                commandName: `/testCommand`,
                helpText: '',
                helpTextEnabled: false
            }
            expect(actualGreeting).toStrictEqual([expected]);
        });

        test('calls command when called', () => {
            let messageResponse = underTest.handle({message: '/testCommand thisIsATest'} as MessageRequest);

            expect(messageResponse.parsedMessage).toStrictEqual('test')
        });

        test('errors when no command found', () => {
            expect(() => underTest.handle({message: '/notACommand thisIsATest'} as MessageRequest))
                .toThrow(new Error("Command not found"));
        })
    })

    describe('invalid commands', () => {
        beforeEach(() => {
            underTest = new CommandService();
            underTest.commands = [new ValidationFailTestCommand()]
        })

        test('expect validation fails when called', () => {
            let messageResponse = underTest.handle({message: '/validationTest'} as MessageRequest);

            expect(messageResponse.parsedMessage).toStrictEqual('<ol> <li>Normally I should do logic</li> </ol>')
        });
    });

});
