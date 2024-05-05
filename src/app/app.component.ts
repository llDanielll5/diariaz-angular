import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavigationComponent } from './core/components/header-navigation/header-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Diariaz | Seu serviço em destaque!';
}
