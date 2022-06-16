import {CommandService} from '~/service/command/CommandService';
import {Container} from 'typescript-ioc';

const commandServiceTest = Container.get(CommandService);

describe('Command Service Tests', () => {

    test('returns registered', () => {

        const actualGreeting = commandServiceTest.register();

        expect(actualGreeting).toStrictEqual([`example`]);
    });
});
