import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { CreateLikeInput } from './dto/create-like.input'
import { LikeDTO } from './dto/like.dto'
import { UpdateLikeInput } from './dto/update-like.input'
import { Like } from './entities/like.entity'

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([Like])],
            resolvers: [
                {
                    DTOClass: LikeDTO,
                    EntityClass: Like,
                    CreateDTOClass: CreateLikeInput,
                    UpdateDTOClass: UpdateLikeInput,
                    enableTotalCount: true,
                },
            ],
        }),
    ],
    providers: [],
})
export class LikeModule {}
