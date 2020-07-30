import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FileService {
  

  constructor(private http:HttpClient) { }


getFolder(){
  return this.http.get("http://localhost:3000/folder");
}

newFile(item){
  return this.http.post("http://localhost:3000/insert",{"file":item})
    .subscribe(data =>{console.log(data)})
}

deleteFolder(id){
  return this.http.post("http://localhost:3000/delete",{"id":id})
  .subscribe(data =>{console.log(data)})
}

editFolder(id){
  return this.http.get("http://localhost:3000/edit/"+id);
}

updateFolder(item){
   return this.http.post("http://localhost:3000/update",{"file":item})
   .subscribe(data =>{console.log("updated"+data)})
}


}