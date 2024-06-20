import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpenedStatusChanged = new EventEmitter<boolean>()
  private _isOpen!: boolean

  get isOpen() {
    return this._isOpen;
  }

  constructor() { }

  open() {
    this._isOpen = true;
    this.sidebarOpenedStatusChanged.emit(this._isOpen);
  }

  close() {
    this._isOpen = false;
    this.sidebarOpenedStatusChanged.emit(this._isOpen);
  }

  subscribe(f: (state: boolean) => void) {
    this.sidebarOpenedStatusChanged.subscribe(f);
  }
}
