import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { User } from 'src/modules/users/entities/users.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Post extends BaseEntity {
    @Column()
    title: string

    @Column()
    description: string

    @Column()
    author: string

    @Column()
    publish: Date

    @Column()
    postArticle: Date

    @ManyToOne(() => User, (user) => user.posts)
    user: User
}
