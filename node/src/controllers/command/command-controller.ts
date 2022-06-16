import express from 'express';
import {Inject} from 'typescript-ioc';
import {CommandService} from "~/service/command/CommandService";
import {MessageRequest} from "~/types/MessageRequest";

export class CommandController {

    private commandService: CommandService;

    constructor(@Inject commandService: CommandService) {
        this.commandService = commandService;
    }

    public async post(req: express.Request, res: express.Response): Promise<void> {

        const messageResponse = this.commandService.handle(req.body as MessageRequest);

        res.json(messageResponse);
    }

    public async register(req: express.Request, res: express.Response): Promise<void> {

        res.json(this.commandService.register())
    }
}
