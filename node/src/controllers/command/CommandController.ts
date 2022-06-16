import express from 'express';
import {Inject} from 'typescript-ioc';
import {CommandService} from "~/service/command/CommandService";
import {MessageRequest} from "~/types/MessageRequest";

export class CommandController {

    private commandService: CommandService;

    constructor(@Inject commandService: CommandService) {
        this.commandService = commandService;
    }

    public post(req: express.Request, res: express.Response) {
        const messageResponse = this.commandService.handle(req.body as MessageRequest);

        res.json(messageResponse);
    }

    public register(req: express.Request, res: express.Response) {
        res.json(this.commandService.register())
    }

    validate(req: express.Request, res: express.Response) {
        let strings = this.commandService.validate(req.body as MessageRequest);
        res.json(strings);
    }
}
