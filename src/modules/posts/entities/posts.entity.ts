import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Like } from 'src/modules/likes/entities/like.entity'
import { User } from 'src/modules/users/entities/users.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

@Entity()
export class Post extends BaseEntity {
    @Column()
    postTitle: string

    @Column()
    postBody: string

    //TODO: rascunho, agendado ou publicar agora
    //TODO: Tabela Status do Post ou ENUM
    @Column()
    postStatus: number

    @ManyToOne(() => User, (user) => user.posts)
    user: User

    @Column()
    userId: string

    @Column({ nullable: true })
    postImageURL: string

    // TODO: (private ou public)
    // TODO: Tabela ou ENUM
    @Column({ nullable: true })
    category: string

    //TODO: (vetor opcional*)
    @Column({ nullable: true })
    tags: string

    // TODO: (private ou public)
    // TODO: Tabela ou ENUM
    @Column({ nullable: true })
    postVisibility: number

    // TODO: Usado no agendado
    @Column({ nullable: true })
    postDateTime: Date

    @OneToMany(() => Like, (like) => like.post)
    likes: Like[]
}
