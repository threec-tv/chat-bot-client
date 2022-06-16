import { assert } from 'chai';
import { GreeterService } from '../../../src/service/greeter-service/GreeterService';
import { Container } from 'typescript-ioc';

const greeterService = Container.get(GreeterService);

describe('Greeter Service Tests', () => {

    it('greet returns greeting', () => {

        const name = "Bob";

        const expectedGreeting = `Hello, ${name}!`;

        const actualGreeting = greeterService.greet(name);

        assert.equal(actualGreeting, expectedGreeting);
    });
});
