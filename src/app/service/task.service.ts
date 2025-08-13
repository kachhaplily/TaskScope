import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskDto } from '../../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiEndPoint=`https://68997c19fed141b96b9fa162.mockapi.io`;

  constructor(private httpClient:HttpClient) { }


  /**
   * Method to post a new task
   * @param task
   * @returns
   */
  postTask(task: TaskDto, userId: string): Observable<TaskDto> {
    return this.httpClient.post<TaskDto>(`${this.apiEndPoint}/user/${userId}/userTask`, task);
  }


  /**
   * Method to get all tasks for a user
   * @param userId
   * @returns
   */
  getPost(userId: string): Observable<TaskDto[]> {
    return this.httpClient.get<TaskDto[]>(`${this.apiEndPoint}/user/${userId}/userTask`);
  }
}
