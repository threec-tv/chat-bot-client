import {CommandHelper} from "~/service/command/CommandHelper";
import {MessageResponse} from "~/types/MessageResponse";

describe('Command helper', () => {
    test('split command', () => {
        let strings = CommandHelper.splitCommand('/test a b c');

        expect(strings).toStrictEqual(['/test', 'a', 'b', 'c'])
    });

    test('split command when empty', () => {
        let strings = CommandHelper.splitCommand('');

        expect(strings).toStrictEqual([''])
    });

    test('validation', () => {
        let validation = CommandHelper.validationError(['testError', 'testError2'], {message: '', chatId: 'chatId', channelId: {id: 'channelId'}});

        expect(validation).toStrictEqual(new MessageResponse({id: 'channelId'}, 'chatId', '', '<ol> <li>testError</li>,<li>testError2</li> </ol>', true));
    })
});
