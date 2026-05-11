import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  age: number;
}

export interface GetFilteredUsersResponse {
  users: User[];
}

export interface Empty {}

export interface UserService {
  getFilteredUsers(data: Empty): Observable<GetFilteredUsersResponse>;
}