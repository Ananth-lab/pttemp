import { IsNotEmpty } from "class-validator"

export class CreateIndustryDomainDto {
    @IsNotEmpty()
    name:string
}
