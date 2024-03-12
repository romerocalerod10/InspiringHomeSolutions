import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MailRequest} from "./MailRequest";
// import * as sgMail from '@sendgrid/mail';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // private API_SEND_EMAIL = 'http://194.164.166.109:8080/inspiringhomesolutions/api/mail/send';
  private API_SEND_EMAIL = '/inspiringhomesolutions/api/mail/send';
  constructor(private http: HttpClient) {
  }

  enviarCorreo(mailRequest: MailRequest): Observable<any> {
    return this.http.post(this.API_SEND_EMAIL, mailRequest);
  }
}
