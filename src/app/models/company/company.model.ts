export interface CompanyModel {
  name: string,
  catchPhrase: string,
  bs: string
}

export class Company implements CompanyModel {
  name = '';
  catchPhrase = '';
  bs = '';

  constructor(companyDto ?: CompanyModel) {
    if (!companyDto) {
      return;
    }
    this.name = companyDto.name;
    this.catchPhrase = companyDto.catchPhrase;
    this.bs = companyDto.bs;
  }

  static parseDto(companyResponse: CompanyModel): Company {
    if (!companyResponse) {
      return new Company();
    }
    return new Company({
      bs: companyResponse.bs,
      catchPhrase: companyResponse.catchPhrase,
      name: companyResponse.name
    });
  }
}
