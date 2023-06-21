import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import {Timestamp} from "rxjs";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
interface TICKETS {
  registration: String;
  entryTime: Date;
  isPremium: Boolean;
  payed: number;
  toPay: number;
  parkingTime: Date;
  departureTime: Date;
}

interface TICKET {
  id: number;
  registration: String;
  entryTime: Date;
  isPremium: Boolean;
  payed: number;
  departureTime: Date;
}

export interface DialogData {
  registration: string
}
@Component({
  selector: 'app-administracja',
  templateUrl: './administracja.component.html',
  styleUrls: ['./administracja.component.css']
})
export class AdministracjaComponent implements OnInit {
  edytowano: string = "";
  Tickets: TICKETS[] = [];
  premium: string = "false";
  oplacono: number = 0;
  constructor(private http: HttpClient, public dialog: MatDialog) {

  }
  ngOnInit() {
    this.http.get<any>('http://localhost:5170/Admin/Tickets',{responseType: 'json'} ).subscribe(result => {

      this.Tickets = result;
    }, error => console.log(error));
  }

  Usun(x: string){
    this.http.delete('http://localhost:5170/ExitGate/Exit?registration=' + x,{responseType: 'text'} ).subscribe(result => {
      this.edytowano = result;
      sessionStorage.setItem("oplata", this.edytowano);
      alert(sessionStorage.getItem("oplata"));
      window.location.reload();
    }, error => console.log(error));
  }

  Wypusc(x: string){
    this.http.delete('http://localhost:5170/Admin/LetOut?registration=' + x,{responseType: 'text'} ).subscribe(result => {
      this.edytowano = result;
      sessionStorage.setItem("oplata", this.edytowano);
      alert(sessionStorage.getItem("oplata"));
      window.location.reload();
    }, error => console.log(error));
  }

  openDialog(regist: string): void {

    const dialogRef = this.dialog.open(DialogEdit, {
      data: {
        registration: regist
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'success') {
        this.ngOnInit();
      }
    });
  }
}

@Component({
  selector: 'app-administracja-dialog',
  templateUrl: './administracja.dialog.component.html',
  styleUrls: ['./administracja.component.css']
})
export class DialogEdit implements OnInit{

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DialogEdit>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _formBuilder: FormBuilder
  ) {

  }
  FormEdit: FormGroup;
  id: number;
  isPremium = this._formBuilder.group({
    isPremium: false,
  });

  ngOnInit() {
    this.FormEdit = new FormGroup({
      registration: new FormControl("", [Validators.required]),
      entryTime: new FormControl("", [Validators.required]),
      isPremium: new FormControl("", [Validators.required]),
      amount: new FormControl("", [Validators.required]),
      exitTime: new FormControl("", [Validators.required])
    });
    this.getTicket(this.data.registration);
  }

  getTicket = (registration: string) => {
    const apiAddress: string = "http://localhost:5170/Admin/Ticket?registration=" + registration;
    this.http.get<TICKET>(apiAddress, {responseType: 'json'})
      .subscribe({
        next: (com: TICKET) => {
          this.FormEdit.patchValue({
            registration: com.registration,
            entryTime: com.entryTime,
            isPremium: com.isPremium,
            amount: com.payed,
            exitTime: com.departureTime,
          });
          this.id = com.id;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  SaveEdit = (FormValue: any) => {
    const dane = {...FormValue};

    const ForAuth: TICKET = {
      id: this.id,
      registration: dane.registration,
      entryTime: dane.entryTime,
      isPremium: dane.isPremium,
      payed: dane.amount,
      departureTime: dane.exitTime
    }
    const apiAddress: string = "http://localhost:5170/Admin/Update";
    this.http.put(apiAddress, ForAuth)
      .subscribe({
        next: () => {

          this.dialogRef.close("success");
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
  }

  onNoClick(): void {

    this.dialogRef.close();
  }


}
