import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'nz-demo-modal-basic',
  template: `
   
    <nz-modal [(nzVisible)]="isVisible" nzTitle="The first Modal" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
        <ng-content></ng-content>
      </ng-container>
    </nz-modal>
  `
})
export class NzDemoModalBasicComponent {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>()

  // 1. stexcum es eventemitter(outputov);
  // 2. lsum es iran cnox componenti html um;
  // 3. emit es anum informacian/vochmiban;
  // 4. erb vor emit a linum childic, cnox componentum irakanuma method@ vor@ kceles htmlum et eventin.
  constructor() {}

//   showModal(): void {
//     this.isVisible = true;
//     // this.eventEmitt()
//   }

  handleOk(): void {
    console.log('Button ok clicked!');
    // this.isVisible = false;
    this.eventEmitt()
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    // this.isVisible = false;
    this.eventEmitt()
  }

  eventEmitt(): void{
    this.isVisibleChange.emit(false)
  }
}