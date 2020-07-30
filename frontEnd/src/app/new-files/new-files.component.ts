import { Component, OnInit } from '@angular/core';
import { FileModel } from './new-file.model';
import { Router } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-new-files',
  templateUrl: './new-files.component.html',
  styleUrls: ['./new-files.component.css']
})
export class NewFilesComponent implements OnInit {
url:string
  constructor(private fileService:FileService,private router:Router) { }
 fileItem = new FileModel(null,null,null);
  ngOnInit(): void {
  }

  AddFile(){
    this.fileService.newFile(this.fileItem);

    console.log("called");
    console.log(this.fileItem)
    alert("success");
    this.router.navigate(['/folder'])
  }

  // Function to go back to previous page
 goBack() {
  
  // window.location.reload();
  this.router.navigate(['/folder'])
 }

}
