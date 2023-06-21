import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  public Rej: any;
  public Czas: any;
  public Data: any;
  public Godzina: any;
  public Rejestracja: string = "";
  public DoOplaty: any;
  oplacono: string = '';
  bioSection = new FormGroup({
    rejestracja: new FormControl('', [Validators.required]),
  });
  bioSection1 = new FormGroup({
    oplata: new FormControl('', [Validators.required]),
  });
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
  }
  Submit() {
    console.log(this.bioSection.value.rejestracja);
    this.http.get<any>('http://localhost:5170/Payment/Calculate?registration=' + this.bioSection.value.rejestracja,{responseType: 'json'} ).subscribe(result => {
      this.Czas = result.entryTime;
      this.Data = this.Czas.slice(0,10);
      this.Godzina = this.Czas.slice(11,19);
      this.Rej = result.registration;
      this.Rejestracja = this.Rej;
      this.DoOplaty = result.toPay;
      this.bioSection1.value.oplata = this.DoOplaty;
    }, error => console.log(error));
  }

  Submit1() {
    console.log(this.bioSection1.value.oplata);
    this.http.put<any>('http://localhost:5170/Payment/Oplacono?registration=' + this.bioSection.value.rejestracja + '&amount=' + this.bioSection1.value.oplata,{responseType: 'text'} ).subscribe(result => {
      this.oplacono = result;
      sessionStorage.setItem("oplata", this.oplacono);
      alert(sessionStorage.getItem("oplata"));
      window.location.reload();
    }, error => console.log(error));
  }
}
