import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Post } from 'src/modules/posts/entities/posts.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Comment extends BaseEntity {
    @Column()
    userId: string

    @Column()
    commentBody: string

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post

    @Column()
    postId: string
}
