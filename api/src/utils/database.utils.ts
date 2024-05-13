import { Search, SearchDTO } from 'src/api/dtos/query.dto';

export class DatabaseUtils {
  static getSearch<T>(
    { search }: SearchDTO,
    ...fields: (keyof T)[]
  ): Search<T> | object {
    if (!search) return {};
    const searchedNames = search.split(/\s+/g);
    return {
      AND: searchedNames.map((search) => ({
        OR: fields.map((field) => ({
          [field]: {
            contains: search,
            mode: 'insensitive',
          },
        })),
      })),
    };
  }
}
