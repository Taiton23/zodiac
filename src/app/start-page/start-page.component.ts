import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      male: new FormControl(undefined, [Validators.required]),
      female: new FormControl(undefined, [Validators.required])
    })
  }

  calculate(): void {
    // console.log(this.form.getRawValue());
    const maleDateObj = this.form.get('male')?.value as Date;
    const femaleDateObj = this.form.get('female')?.value as Date;

    const maleDate = maleDateObj?.toLocaleDateString();
    const femaleDate = femaleDateObj?.toLocaleDateString();

    const isValid = this.checkDates(maleDate, femaleDate);
    if (isValid) {
      this.router.navigateByUrl(`result`).then();
    } else {
      this.router.navigateByUrl(`fail`).then();
    }
  }

  private checkDates(male: string, female: string): boolean {
    if (this.isPolina(female) && this.isSasha(male)) {
      return true;
    }
    return false;
  }

  private isPolina(date: string): boolean {
    return date === '03.10.1998';
  }

  private isSasha(date: string): boolean {
    return date === '26.02.1995';
  }

}
