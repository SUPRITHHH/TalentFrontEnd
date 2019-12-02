import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../req-service.service';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  constructor(private service:ReqServiceService) { }
  sendReq(data){
    this.service.send(data).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err)
    },()=>{
      console.log("sent successfully")
    })
  }
  ngOnInit() {
  }

}
