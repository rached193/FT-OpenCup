import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets } from 'typeorm';
import { TitleEntity } from '../entities/title.entity';

@Injectable()
export class TemtemService {
  constructor(@InjectRepository(TitleEntity) private repo: Repository<TitleEntity>) {
  }

  stats(id): Promise<any[]> {
    return this.repo.createQueryBuilder()
      .select('stats.stat', 'category')
      .addSelect(`'Base'`, 'serie')
      .addSelect('stats.value', 'value')
      .addSelect('stats.order', 'order')
      .from('temtem_stats', 'stats')
      .where('stats.temtem = :id', { id: id })
      .orderBy({'stats.order': 'DESC'})
      .getRawMany();
  }
}