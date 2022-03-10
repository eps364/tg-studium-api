import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Complaint')
export class ComplaintDTO extends BaseDTO {
    type: number

    comentId: string

    userId: string
}
