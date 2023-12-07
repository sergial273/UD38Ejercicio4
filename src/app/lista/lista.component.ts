import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {

  clientes:any[] = []
  constructor(private service: CustomerService) {
    this.clientes = service.getData();
  }

  remove(id:String, descr:String){
    this.service.removeData(id, descr);
    this.clientes = this.service.getData();
  }

  change(id:String, descr:String){
    this.service.change(id, descr);
    this.clientes = this.service.getData();
  }

}
