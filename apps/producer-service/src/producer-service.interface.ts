import { Observable } from 'rxjs';

export interface GetFilteredUsersRequest {
  id: number;
  name: string;
  age: number;
}

export interface GetFilteredUsersRequestList {
  users: GetFilteredUsersRequest[];
}

export interface UserService {
  getFilteredUsers(data: GetFilteredUsersRequestList): Observable<void>
}