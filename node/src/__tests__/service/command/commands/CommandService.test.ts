import {CommandService} from '~/service/command/CommandService';
import {Container} from 'typescript-ioc';
import {tests} from "tsconfig-paths/lib/__tests__/data/match-path-data";
import {MessageRequest} from "~/types/MessageRequest";
import {TestCommand} from "~/__tests__/service/command/commands/TestCommand";
import {ValidationFailTestCommand} from "~/__tests__/service/command/commands/ValidationFailTestCommand";

let underTest: CommandService;
describe('Command Service Tests', () => {

    describe('Valid command', () => {
        beforeEach(() => {
            underTest = new CommandService();
            underTest.commands = [new TestCommand()]
        })

        test('returns registered', () => {
            const actualGreeting = underTest.register();

            expect(actualGreeting).toStrictEqual([`/testCommand`]);
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
