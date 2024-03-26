import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShowToastrService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title: string) {
    this.toastr.success('Sucesso', title);
  }

  showError(title: string) {
    this.toastr.error('Erro', title);
  }

  showWarning(title: string) {
    this.toastr.warning('Atenção', title);
  }

  showInfo(title: string) {
    this.toastr.info('Informação', title);
  }
}