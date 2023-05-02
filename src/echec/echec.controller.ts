import { Body, Controller, Post } from '@nestjs/common';
import { Echec } from './echec.entity'
import { EchecService } from './echec.service'
@Controller('echec')
export class EchecController {
    constructor(private readonly echecService: EchecService){}

    @Post()
    createEchec(@Body() body: Echec){
        return this.echecService.create(body)
    }

}
