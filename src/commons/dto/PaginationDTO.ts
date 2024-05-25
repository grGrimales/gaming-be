
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDTO {

    @IsPositive({message: 'Query parameter page must be a positive integer'})
    @Type(() => Number)
    page?: number;
  
    @IsPositive({message: 'Query parameter limit must be a positive integer'})
    @Type(() => Number)
    limit?: number;

}