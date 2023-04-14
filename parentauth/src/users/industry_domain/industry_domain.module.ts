import { Module } from '@nestjs/common';
import { IndustryDomainService } from './industry_domain.service';
import { IndustryDomainController } from './industry_domain.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustryDomain } from './entities/industry_domain.entity';

@Module({
  imports:[TypeOrmModule.forFeature([IndustryDomain])],
  controllers: [IndustryDomainController],
  providers: [IndustryDomainService]
})
export class IndustryDomainModule {}
