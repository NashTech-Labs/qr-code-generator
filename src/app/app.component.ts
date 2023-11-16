import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QR-code-generator';

  public QrCode!: string;

  constructor() {
    this.QrCode = 'My First QR code';
  }
}
