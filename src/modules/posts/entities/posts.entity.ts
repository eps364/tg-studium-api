import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Column, Entity } from 'typeorm'

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

    //TODO: Ralacionar com o usuario
    @Column()
    userId: string

    @Column()
    postImageURL: string

    // TODO: (private ou public)
    // TODO: Tabela ou ENUM
    @Column()
    category: string

    //TODO: (vetor opcional*)
    @Column()
    tags: string

    // TODO: (private ou public)
    // TODO: Tabela ou ENUM
    @Column()
    postVisibility: number

    // TODO: Usado no agendado
    @Column()
    postDateTime: Date
}
