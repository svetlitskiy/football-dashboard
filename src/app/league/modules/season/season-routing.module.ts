import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonsComponent } from './components/seasons/seasons.component';

const routes: Routes = [
    {
        path: 'seasons',
        component: SeasonsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SeasonRoutingModule {}
