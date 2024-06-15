import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
  ) { }


}
