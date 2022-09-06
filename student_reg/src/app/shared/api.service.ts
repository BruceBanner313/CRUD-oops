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
    return this._http.post<any>("https://crudcrud.com/api/122ce2a2611a44c29355907dc5c64887/post",data).pipe(map((res:any)=> {
      return res
    }))
  }

    // Get Method For All Student
    getStudent()
    {
      return this._http.get<any>("https://crudcrud.com/api/122ce2a2611a44c29355907dc5c64887/post").pipe(map((res:any)=> {
        return res
      }))
    }

      // Put Method For Update Student
  putStudent(data:any, id:number)
  {
    return this._http.put<any>("https://crudcrud.com/api/122ce2a2611a44c29355907dc5c64887/post/" + id,data).pipe(map((res:any)=> {
      return res
    }))
  }

  // Delete Method For Update Student
  deleteStudent(id:number)
  {
    return this._http.delete<any>("https://crudcrud.com/api/122ce2a2611a44c29355907dc5c64887/post/" + id).pipe(map((res:any)=> {
      return res
    }))
  }
    
}
