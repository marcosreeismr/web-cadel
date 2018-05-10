import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal',
    template: `
            <div class="modal-header">
            <h4 class="modal-title">{{title}}</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <p>{{content}}</p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancelar</button>
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Confirm click')">Sim</button>
            </div>
        `
})
export class ModalComponent {
    closeResult: string;

    constructor(
        private modalService: NgbModal,
        public activeModal: NgbActiveModal
    ) { }

    open() {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.title = 'Confirmação';
        modalRef.componentInstance.content = 'Deseja realmente sair do sistema?';
    }
}