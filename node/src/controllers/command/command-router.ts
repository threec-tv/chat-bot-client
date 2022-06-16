import express from 'express';
import {Container} from 'typescript-ioc';
import {CommandController} from '~/controllers/command/CommandController';

const router = express.Router();

const commandController = Container.get(CommandController);

router.post('/v1/command/handler', (req, res) => {
    commandController.post(req, res);
});

router.post('/v1/command/validate', (req, res) => {
    commandController.validate(req, res);
});

router.get('/v1/command/register', (req, res) => {
    commandController.register(req, res)
})

export {router as commandRouter};
