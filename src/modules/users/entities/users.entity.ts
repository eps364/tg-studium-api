import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Post } from 'src/modules/posts/entities/posts.entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string

    @Column()
    email: string

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}
