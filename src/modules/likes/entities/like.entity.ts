import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Post } from 'src/modules/posts/entities/posts.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Like extends BaseEntity {
    @Column()
    userId: string

    @ManyToOne(() => Post, (post) => post.likes)
    post: Post

    @Column()
    postId: string
}
