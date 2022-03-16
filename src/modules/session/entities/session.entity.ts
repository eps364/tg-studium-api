import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Session extends BaseEntity {
    @Column()
    token: string
}
