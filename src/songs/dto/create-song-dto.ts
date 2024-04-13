import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString({ each: true }) // each: true means that each item in the array should be a string
  @IsNotEmpty()
  @IsArray()
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString() // date 2024-04-13
  readonly releaseDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime() // time 02:34
  readonly duration: Date;
}
