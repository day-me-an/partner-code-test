export enum UserAccess {
  READ = "READ",
  WRITE = "WRITE",
  ADMIN = "ADMIN",
}

export enum UserState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  INVITED = "INVITED",
}

export interface User {
  uuid: string;
  email: string;
  access: UserAccess;
  state: UserState;
}
