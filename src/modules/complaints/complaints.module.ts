import {
    NestjsQueryGraphQLModule,
    PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { ComplaintDTO } from './dto/complaint.dto'
import { CreateComplaintInput } from './dto/create-complaint.input'
import { UpdateComplaintInput } from './dto/update-complaint.input'
import { Complaint } from './entities/complaint.entity'

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([Complaint])],
            resolvers: [
                {
                    DTOClass: ComplaintDTO,
                    EntityClass: Complaint,
                    CreateDTOClass: CreateComplaintInput,
                    UpdateDTOClass: UpdateComplaintInput,
                    enableTotalCount: true,
                    pagingStrategy: PagingStrategies.OFFSET,
                },
            ],
        }),
    ],
    providers: [],
})
export class ComplaintModule {}
