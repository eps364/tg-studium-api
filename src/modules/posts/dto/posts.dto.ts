import {
    FilterableField,
    FilterableOffsetConnection,
    FilterableRelation,
} from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'
import { LikeDTO } from 'src/modules/likes/dto/like.dto'
import { UserDTO } from 'src/modules/users/dto/users.dto'
import { User } from 'src/modules/users/entities/users.entity'
import { ManyToOne } from 'typeorm'

@ObjectType('Post')
@FilterableRelation('user', () => UserDTO)
@FilterableOffsetConnection('likes', () => LikeDTO)
export class PostDTO extends BaseDTO {
    @FilterableField()
    postTitle: string

    @FilterableField()
    postBody: string

    @ManyToOne(() => User, (user) => user.posts)
    user: User

    //TODO: Ralacionar com o usuario
    @FilterableField()
    userId: string

    //TODO: rascunho, agendado ou publicar agora
    //TODO: Tabela Status do Post ou ENUM
    postStatus: number

    postImageURL?: string

    // TODO: (private ou public)
    // TODO: Tabela ou ENUM
    category?: string

    //TODO: (vetor opcional*)
    tags?: string

    // TODO: (private ou public)
    // TODO: Tabela ou ENUM
    postVisibility?: number

    // TODO: Usado no agendado
    postDateTime?: Date
}
