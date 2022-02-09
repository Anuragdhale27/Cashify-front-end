import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  

  course : any = [];
  url = `http://localhost:8080`
  constructor(private http: HttpClient) { 
    
      this.http.get<any>(this.url+'/courses').subscribe(
        data => {
          this.course = data;
          console.log(data);
        });  
    }

  ngOnInit(): void { }

  

  

}
