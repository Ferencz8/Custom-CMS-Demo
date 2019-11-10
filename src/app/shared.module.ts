import { NgModule } from '@angular/core';
import { MatGridListModule, MatButtonModule, MatTabsModule, MatToolbarModule, MatSliderModule, MatTableModule } from '@angular/material';
import { MatCardModule, MatInputModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { MatIconModule, MatTooltipModule, MatIconRegistry } from '@angular/material';

@NgModule({
  imports: [
    MatSliderModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule
  ],
  exports: [
    MatSliderModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule
  ],
  providers: [
    MatIconRegistry
  ]
})

export class SharedMaterialModule { }
