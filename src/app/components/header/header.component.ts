import { Component, Input } from '@angular/core'; // Ajout de Input

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title = ''; // Nouvelle propriété d'entrée
}