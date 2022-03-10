import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateLikeInput {
    type: number

    comentId: string

    userId: string
}
