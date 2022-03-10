import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { CommentDTO } from './dto/comment.dto'
import { CreateCommentInput } from './dto/create-comment.input'
import { UpdateCommentInput } from './dto/update-comment.input'
import { Comment } from './entities/comment.entity'
@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([Comment])],
            resolvers: [
                {
                    DTOClass: CommentDTO,
                    EntityClass: Comment,
                    CreateDTOClass: CreateCommentInput,
                    UpdateDTOClass: UpdateCommentInput,
                },
            ],
        }),
    ],
    providers: [],
})
export class CommentModule {}
