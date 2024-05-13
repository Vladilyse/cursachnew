import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class QueryAllDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  search: string;
}

export class SearchDTO {
  search?: string;
}

export class Search<T> {
  OR: {
    [k in keyof T]: {
      contains: string;
      mode: 'default' | 'insensitive';
    };
  }[];
}
