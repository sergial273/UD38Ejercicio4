import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private data: any[] = [];

  constructor() {}

  setData(data: any) {
    this.data.push({ ...data });
  }

  getData() {
    return this.data;
  }

  removeData(id: String, desc: String) {
    this.data = this.data.filter(
      (cliente) => cliente.codigo !== id || cliente.descripcion !== desc
    );
  }

  change(id: String, desc: String) {
    const cliente = this.data.find(
      (c) => c.codigo === id && c.descripcion === desc
    );

    if (cliente) {
      cliente.seleccionado = true;
    }
  }
}
