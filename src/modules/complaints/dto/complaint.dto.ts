import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Complaint')
export class ComplaintDTO extends BaseDTO {
    @FilterableField()
    type: number

    @FilterableField()
    comentId: string

    @FilterableField()
    userId: string
}
