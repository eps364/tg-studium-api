import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { Post } from '../../posts/entities/posts.entity'

@Entity()
export class User extends BaseEntity {
    @Column()
    userName: string

    @Column()
    userEmail: string

    @Column()
    userPassword: string

    @OneToMany(() => Post, (posts) => posts.user)
    posts: Post[]
}
