export interface User {
  id: number;
  name: string;
  age: number;
}

export interface GetFilteredUsersResponse {
  users: User[];
}