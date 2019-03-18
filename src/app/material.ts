import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatDividerModule, MatListModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatInputModule],
  exports: [MatButtonModule, MatDividerModule, MatListModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatInputModule],
})
export class MaterialModule {
}
