import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Succes } from './succes.entity'
import { Repository } from 'typeorm'
import { create } from 'domain';

@Injectable()
export class SuccesService {constructor(
    @InjectRepository(Succes)
    private readonly succesRepository: Repository<Succes>  
){}

create(succes: Succes):Promise<Succes>{
    return this.succesRepository.save(succes)
}}
    