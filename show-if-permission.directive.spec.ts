import { ShowIfPermissionDirective } from './show-if-permission.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('ShowIfPermissionDirective', () => {
  let templateRef: TemplateRef<any>;
  let viewContainerRef: ViewContainerRef;

  it('should create an instance', () => {
    const directive = new ShowIfPermissionDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
