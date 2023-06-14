import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { ReportType } from "src/data";

export class CreateReportDto {
    @IsString()
    @IsNotEmpty()
    source: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    amount: number;
}

export class UpdateReportDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    amount: number;
}

export class ReportResponseDto {
    id: string
    source: string
    amount: number

    @Expose({"name":"createdAt"})
    transformCreatedAt(){
        return this.created_at
    }

    @Exclude()
    created_at: Date

    @Exclude()
    updated_at: Date
    type: ReportType

    constructor(partial : Partial<ReportResponseDto>){
        Object.assign(this, partial)
    }
}