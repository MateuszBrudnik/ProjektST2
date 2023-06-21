import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gate2',
  templateUrl: './gate2.component.html',
  styleUrls: ['./gate2.component.css']
})
export class Gate2Component implements OnInit {
  oplacono: string = 'rampa zamknięta';
  bioSection = new FormGroup({
    rejestracja: new FormControl('', [Validators.required]),

  });
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
  }
  Submit() {
    console.log(this.bioSection.value.rejestracja);
    this.http.get('http://localhost:5170/PremiumGate/Premium?registration=' + this.bioSection.value.rejestracja,{responseType: 'text'} ).subscribe(result => {
      this.oplacono = result;
      sessionStorage.setItem("oplata", this.oplacono);
      alert(sessionStorage.getItem("oplata"));
    }, error => console.log(error));
  }
}
