import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _getUrl = 'http://localhost:3000/api/student';
  private _postUrl = 'http://localhost:3000/api/student/add';
  private _updateUrl = 'http://localhost:3000/api/student/:id';
  
  constructor(private http: HttpClient) { }

  getStudent() {
    return this.http.get<any>(this._getUrl);
  }

  postStudent(data) {
    return this.http.post<any>(this._postUrl, data);
  }
  deleteStudent(id) {
    return this.http.delete<any>(`http://localhost:3000/api/student/delete/${id}`);
  }
  updateStudent(id,data){
    return this.http.post<any>(`http://localhost:3000/api/student/${id}`,data);
  }
}
