import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Like extends BaseEntity {
    // TODO: Tabela ou ENUM
    // TODO: Comments, Posts
    @Column()
    type: number

    @Column()
    comentId: string

    @Column()
    userId: string
}
