import { Address } from '../address/address.model';
import { Company } from '../company/company.model';

export interface UserModel {

  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

export class User implements UserModel {
  id = -1;
  name = '';
  username = '';
  email = '';
  address = new Address();
  phone = '';
  website = '';
  company = new Company();

  constructor(userDto ?: UserModel) {
    if (!userDto) {
      return;
    }
    this.id = userDto.id;
    this.name = userDto.name;
    this.username = userDto.username;
    this.email = userDto.email;
    this.address = userDto.address;
    this.phone = userDto.phone;
    this.website = userDto.website;
    this.company = userDto.company;
  }

  static parseDto(userResponse: UserModel): User {
    if (!userResponse) {
      return new User();
    }
    return new User({
      address: Address.parseDto(userResponse.address),
      company: Company.parseDto(userResponse.company),
      email: userResponse.email,
      id: userResponse.id,
      name: userResponse.name,
      phone: userResponse.phone,
      username: userResponse.username,
      website: userResponse.website
    });
  }
}
