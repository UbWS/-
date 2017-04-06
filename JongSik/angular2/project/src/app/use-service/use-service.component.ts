import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-use-service',
  templateUrl: './use-service.component.html',
  styleUrls: ['./use-service.component.css']
})
export class UseServiceComponent implements OnInit {
  title = '컴포넌트 변수';
  public MEMBER = [];

  constructor(private servService: ServService) {
    this.MEMBER = servService.getMember();
  }

  ngOnInit() {
  }

}
