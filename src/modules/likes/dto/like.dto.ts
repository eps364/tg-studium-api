import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Like')
export class LikeDTO extends BaseDTO {
    @FilterableField()
    type: number

    @FilterableField()
    comentId: string

    @FilterableField()
    userId: string
}
