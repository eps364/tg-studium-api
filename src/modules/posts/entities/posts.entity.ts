import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Post extends BaseEntity {
    @Column()
    title: string

    @Column()
    description: string

    @Column()
    author: string

    @Column()
    publish: string

    @Column()
    postArticle: string
}
