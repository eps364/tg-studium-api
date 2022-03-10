import { InputType, PartialType } from '@nestjs/graphql'
import { CreateComplaintInput } from './create-complaint.input'

@InputType()
export class UpdateComplaintInput extends PartialType(CreateComplaintInput) {
    id: number
}
