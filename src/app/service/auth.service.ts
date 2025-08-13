import { Injectable } from '@angular/core';
import { UserDto } from '../../model/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiEndPoint=`https://68997c19fed141b96b9fa162.mockapi.io/taskmanagement`;

  constructor(private httpClient:HttpClient) { }


  /**
   * method to login user
   * @param login
   * @returns
   */
  login(login:UserDto) :Observable<any>{
    return this.httpClient.get(`${this.apiEndPoint}/user/${login.userId}`);
  }
}
