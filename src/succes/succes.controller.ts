import { Body, Controller, Post } from '@nestjs/common';
import { Succes } from './succes.entity';
import { SuccesService } from './succes.service';

@Controller('succes')
export class SuccesController {
    constructor(private readonly succesService: SuccesService){}

    @Post()
    createSucces(@Body() body:Succes){
        return this.succesService.create(body)
    }
}
