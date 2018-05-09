import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './vgLoadingSpinner.component.html',
  styleUrls: ['./vgLoadingSpinner.component.scss']
})
export class VgLoadingSpinnerComponent {
  @Input() isLoading: boolean;
  @Input() message: string;
}
