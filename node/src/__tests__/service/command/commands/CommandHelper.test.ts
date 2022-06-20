import {Command, CommandHelper} from "~/service/command/CommandHelper";
import {MessageResponse} from "~/types/MessageResponse";
import {ChannelDto} from "~/types/ChannelDto";

describe('Command helper', () => {
    test('split command', () => {
        let strings = CommandHelper.splitCommand('/test a b c');

        let expected = new Map<Command, string[]>([
            ['/test' as Command, ['a', 'b', 'c']],
        ]);
        expect(strings).toStrictEqual(expected)
    });

    test('split command when empty', () => {
        let strings = CommandHelper.splitCommand('');

        expect(strings).toStrictEqual(new Map())
    });

    test('split command when undefined', () => {
        // @ts-ignore
        let strings = CommandHelper.splitCommand(undefined);

        expect(strings).toStrictEqual(new Map())
    });

    test('split command when just command', () => {
        let strings = CommandHelper.splitCommand('/test');

        let expected = new Map<Command, string[]>([
            ['/test' as Command, []],
        ]);
        expect(strings).toStrictEqual(expected)
    });

    test('validation', () => {
        let validation = CommandHelper.validationError(['testError', 'testError2'], {message: '', chatId: 'chatId', channelId: {id: 'channelId'}, channel: null as unknown as ChannelDto});

        expect(validation).toStrictEqual(new MessageResponse({id: 'channelId'}, 'chatId', '', '<ol> <li>testError</li>,<li>testError2</li> </ol>', true));
    })
});
