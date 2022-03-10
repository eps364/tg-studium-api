import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Comment extends BaseEntity {
    @Column()
    postId: string

    @Column()
    userId: string

    @Column()
    commentBody: string
}
