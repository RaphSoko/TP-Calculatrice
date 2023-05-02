import { Module } from '@nestjs/common';
import { EchecController } from './echec.controller';
import { EchecService } from './echec.service';

@Module({
  controllers: [EchecController],
  providers: [EchecService]
})
export class EchecModule {}
