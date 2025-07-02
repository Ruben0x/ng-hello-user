import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

  helloService = inject(ApiService)

  message = signal<string>('')




  onInputName(name: string) {

    this.helloService.getHello(name)
      .subscribe(resp => {
        this.message.set(JSON.stringify(resp.mensaje))
      });

  }
}
