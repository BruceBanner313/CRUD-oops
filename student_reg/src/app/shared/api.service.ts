import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  // Post Method For Add Student
  postStudent(data:any)
  {
    return this._http.post<any>("https://crudcrud.com/api/5a7eefa0f4284c8c86d0236d9d829d11/student_det",data).pipe(map((res:any)=> {
      return res
    }))
  }

    // Get Method For All Student
    getStudent()
    {
      return this._http.get<any>("https://crudcrud.com/api/5a7eefa0f4284c8c86d0236d9d829d11/student_det").pipe(map((res:any)=> {
        return res
      }))
    }

      // Put Method For Update Student
  putStudent(data:any, id:number)
  {
    return this._http.put<any>("https://crudcrud.com/api/5a7eefa0f4284c8c86d0236d9d829d11/student_det/" + id,data).pipe(map((res:any)=> {
      return res
    }))
  }

  // Delete Method For Update Student
  deleteStudent(id:number)
  {
    return this._http.delete<any>("https://crudcrud.com/api/5a7eefa0f4284c8c86d0236d9d829d11/student_det/" + id).pipe(map((res:any)=> {
      return res
    }))
  }
    
}
