import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fail-page',
  templateUrl: './fail-page.component.html',
  styleUrls: ['./fail-page.component.scss']
})
export class FailPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigateByUrl('');
  }
}
