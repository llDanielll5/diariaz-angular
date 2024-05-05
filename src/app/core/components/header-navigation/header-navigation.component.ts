import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-navigation',
  standalone: true,
  imports: [MatButton, MatTooltip, MatIconModule],
  templateUrl: './header-navigation.component.html',
  styleUrl: './header-navigation.component.css',
})
export class HeaderNavigationComponent {}
