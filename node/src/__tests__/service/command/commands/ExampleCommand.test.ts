import {ExampleCommand} from "~/service/command/commands/ExampleCommand";

import {MessageResponse} from "~/types/MessageResponse";

describe('Example Command test', () => {
    const underTest = new ExampleCommand();
    const messageRequest = {message: '/test', channelId: {id: 'channelId'}, chatId: 'chatId'};

    test('Validation returns empty', () => {
        expect(underTest.validate(messageRequest)).toStrictEqual([]);
    });

    test('Handler returns option', () => {

        expect(underTest.handle(messageRequest))
            .toStrictEqual(new MessageResponse({id: 'channelId'},
                'chatId',
                '/test',
                "<h1>test</h1>",
                false));
    })
});
