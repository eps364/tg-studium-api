import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { UserDTO } from './dto/users.dto'
import { User } from './entities/users.entity'

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
                },
            ],
        }),
    ],
    providers: [],
})
export class UserModule {}
