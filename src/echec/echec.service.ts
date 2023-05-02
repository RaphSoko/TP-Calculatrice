import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Echec } from './echec.entity'
import { Repository } from 'typeorm'
import { create } from 'domain';

@Injectable()
export class SuccesService {constructor(
    @InjectRepository(Echec)
    private readonly echecRepository: Repository<Echec>  
){}

create(echec: Echec):Promise<Echec>{
    return this.echecRepository.save(echec)
}}

    