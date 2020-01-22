import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatButtonModule,  MatMenuModule, MatListModule, MatSidenavModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatStepperModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatCardModule, MatSortModule, MatPaginatorModule, MatSliderModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatExpansionModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSliderModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents,
    CommonModule
  ],
  exports: [MaterialComponents]
})

export class MaterialModule { }
