import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string

    @Column()
    email: string
}
