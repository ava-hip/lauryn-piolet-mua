import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  sending = false;
  emailSent = false;

  serviceId = environment.EMAILJS_SERVICE_ID || '';
  templateId = environment.EMAILJS_TEMPLATE_ID || '';
  publicKey = environment.EMAILJS_PUBLIC_KEY || '';

  get email() {
  return this.contactForm.get('email')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }

  constructor(private fb: FormBuilder,  private http: HttpClient) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      honeypot: [''] 
    });
  }

  sendEmail() {
    if (this.contactForm.invalid || this.contactForm.value.honeypot) return;

    this.sending = true;
    this.emailSent = false;

    emailjs.send(
      this.serviceId,
      this.templateId,
      this.contactForm.value,
      this.publicKey
    ).then(() => {
      this.contactForm.reset();
      this.emailSent = true;
    }).finally(() => {
      this.sending = false;
    });
  }
}
