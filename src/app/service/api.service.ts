import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface Message {
  mensaje: string
}

@Injectable({ providedIn: 'root' })
export class ApiService {

  private baseUrl = 'https://us-central1-api-python-464715.cloudfunctions.net/saludo'

  private http = inject(HttpClient)

  getHello(name: string) {
    return this.http.get<Message>(this.baseUrl, {
      params: { nombre: name }
    })
  }
}
