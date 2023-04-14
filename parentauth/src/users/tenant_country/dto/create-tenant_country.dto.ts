import { IsNotEmpty } from "class-validator"

export class CreateTenantCountryDto {
    @IsNotEmpty()
    name:string
}
