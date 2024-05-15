import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';


export class CreateUserDto {


    @IsString()
    @IsEmail()
    @MinLength(1)
    email: string;


    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password: string;

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(1)
    userName: string;
}
