import {
    NestjsQueryGraphQLModule,
    PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { UserDTO } from './dto/user.dto'
import { User } from './entities/user.entity'

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([User])],
            resolvers: [
                {
                    DTOClass: UserDTO,
                    EntityClass: User,
                    CreateDTOClass: CreateUserInput,
                    UpdateDTOClass: UpdateUserInput,
                    enableTotalCount: true,
                    pagingStrategy: PagingStrategies.OFFSET,
                },
            ],
        }),
    ],
    providers: [],
})
export class UserModule {}
