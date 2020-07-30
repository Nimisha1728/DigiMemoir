import { Component, OnInit } from '@angular/core';
import { FileModel } from '../new-files/new-file.model';
import { FileService } from '../file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
folder: FileModel[];
  constructor(private fileService: FileService,private router:Router) { }
 fileItem = new FileModel(null,null,null);
  ngOnInit(): void {
    this.fileService.getFolder().subscribe((data) =>{
      this.folder = JSON.parse(JSON.stringify(data));
    })
  }

  draftComment(){

  }
  
  deleteFile(item){
    console.log(item);
    if(confirm('Do you want to delete this?')){
      this.fileService.deleteFolder(item)
      const id=this.folder.indexOf(this.fileItem)
      this.folder.splice(id,1);
      // this.router.navigate(['/']);
    }
  }

}
