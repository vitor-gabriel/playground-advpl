import { Component } from '@angular/core';
import { PoDialogService, PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  menus: Array<PoMenuItem> = [
    {
      label: 'Editor',
      link: '/index.html/text-editor',
      icon: 'po-icon-home',
      shortLabel: 'Home'
    },
    {
      label: 'Explorer',
      link: '/index.html/customers',
      icon: 'po-icon-users',
      shortLabel: 'Clientes'
    }
  ]
}
