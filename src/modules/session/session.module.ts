import {
    NestjsQueryGraphQLModule,
    PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { CreateSessionInput } from './dto/create-session.input'
import { SessionDTO } from './dto/session.dto'
import { UpdateSessionInput } from './dto/update-session.input'
import { Session } from './entities/session.entity'

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([Session])],
            resolvers: [
                {
                    DTOClass: SessionDTO,
                    EntityClass: Session,
                    CreateDTOClass: CreateSessionInput,
                    UpdateDTOClass: UpdateSessionInput,
                    enableTotalCount: true,
                    pagingStrategy: PagingStrategies.OFFSET,
                },
            ],
        }),
    ],
    providers: [],
})
export class SessionModule {}
