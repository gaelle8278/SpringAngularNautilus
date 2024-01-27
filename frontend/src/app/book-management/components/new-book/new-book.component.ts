import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent {
	
	constructor(private router : Router) {}

}
