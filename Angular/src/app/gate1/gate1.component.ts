import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gate1',
  templateUrl: './gate1.component.html',
  styleUrls: ['./gate1.component.css']
})
export class Gate1Component implements OnInit {
  public Rej: any;
  public Czas: any;
  public Data: any;
  public Godzina: any;
  public Qr: string = "";
  bioSection = new FormGroup({
    rejestracja: new FormControl('', [Validators.required]),

  });
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
  }
  Submit() {
    console.log(this.bioSection.value.rejestracja);
    this.http.post<any>('http://localhost:5170/Gate1/GetTicket?registration=' + this.bioSection.value.rejestracja,{responseType: 'json'} ).subscribe(result => {
      this.Czas = result.entryTime;
      this.Data = this.Czas.slice(0,10);
      this.Godzina = this.Czas.slice(11,19);
      this.Rej = result.registration;
      this.Qr = this.Rej;
      //sessionStorage.setItem("UserName", this.Rej);
      //alert(sessionStorage.getItem("UserName"));
    }, error => console.log(error));
  }
}
