import {
    NestjsQueryGraphQLModule,
    PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { CreatePostInput } from './dto/create-post.input'
import { PostDTO } from './dto/posts.dto'
import { UpdatePostInput } from './dto/update-post.input'
import { Post } from './entities/posts.entity'

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([Post])],
            resolvers: [
                {
                    DTOClass: PostDTO,
                    EntityClass: Post,
                    CreateDTOClass: CreatePostInput,
                    UpdateDTOClass: UpdatePostInput,
                    enableTotalCount: true,
                    pagingStrategy: PagingStrategies.OFFSET,
                },
            ],
        }),
    ],
    providers: [],
})
export class PostModule {}
