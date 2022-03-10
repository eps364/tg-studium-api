import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateComplaintInput {
    type: number

    comentId: string

    userId: string
}
