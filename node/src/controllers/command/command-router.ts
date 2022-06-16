import express from 'express';
import {Container} from 'typescript-ioc';
import {CommandController} from 'src/controllers/command/command-controller';

const router = express.Router();

const commandController = Container.get(CommandController);

router.post('/v1/command/handler', (req, res) => {
    commandController.post(req, res);
});

router.get('/v1/command/register', (req, res) => {
    commandController.register(req, res)
})

export {router as commdandRouter};
