import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Bundle } from './bundle.entity';
import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';

@Entity()
export class Bsmap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => Bundle, (bundle) => bundle.bsmaps, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  bundle: Bundle;

  @ManyToOne((type) => Tsubmodule, (tsubmodule) => tsubmodule.bsmaps, {
    nullable: false,
  })
  tsubmodule: Tsubmodule;
}
