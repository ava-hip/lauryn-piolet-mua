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
      honeypot: [''] // champ invisible anti-bot
    });
  }

  sendEmail() {
    if (this.contactForm.invalid || this.contactForm.value.honeypot) return;

    this.sending = true;
    this.emailSent = false;

    this.http.post('/.netlify/functions/send-email', this.contactForm.value).subscribe({
      next: () => {
        this.contactForm.reset();
        this.emailSent = true;
      },
      error: (err) => {
        console.error('Erreur lors de l’envoi du mail :', err);
      },
      complete: () => {
        this.sending = false;
      }
    });
  }
}
