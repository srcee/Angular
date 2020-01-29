import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLElement>;

  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount < this.selectedCause.neededAmount / 3
    ) {
      return 'orange';
    }
    return 'red';
  }

  get selectedCause() { return this.causesService.selectedCause; };

  constructor(private causesService: CausesService) { }

  ngOnInit() {
  }
  makeDonationHandler() {
    this.causesService.selectedCause.collectedAmount = +this.causesService.selectedCause.collectedAmount + +this.amountInput.nativeElement.value;
    this.amountInput.nativeElement.value = '';
  }

}
