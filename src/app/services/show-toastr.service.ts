import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShowToastrService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title: string) {
    this.toastr.success(title, 'Sucesso');
  }

  showError(title: string) {
    this.toastr.error(title, 'Erro');
  }

  showWarning(title: string) {
    this.toastr.warning(title, 'Atenção');
  }

  showInfo(title: string) {
    this.toastr.info(title, 'Informação');
  }
}