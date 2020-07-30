import { Component, OnInit } from '@angular/core';
import { FileModel } from '../new-files/new-file.model';
import { Router,ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.css']
})
export class EditFileComponent implements OnInit {
  f_id="";
  constructor(private fileService:FileService,
              private router:Router,
              private activatedroute:ActivatedRoute) { }
  fileItem = new FileModel(null,null,null);

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params =>{
      this.f_id = params['f_id']
    });

    console.log(this.f_id);
    this.fileService.editFolder(this.f_id).subscribe(data =>{
      this.fileItem = JSON.parse(JSON.stringify(data));

      console.log(data)
      console.log(this.fileItem);
    })
  }

  updateFile(){
     this.fileService.updateFolder(this.fileItem);
     console.log("updated");
     alert("updation success");
     this.router.navigate(['/folder']);
  }

  goBack(){
    this.router.navigate(['/folder'])
  }

}
