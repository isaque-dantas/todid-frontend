import { Component } from '@angular/core';
import {LogoComponent} from "../logo/logo.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
