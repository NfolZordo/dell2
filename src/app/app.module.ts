import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BabichComponent } from './students/babich/babich.component';
import { VerbivskyiComponent } from './students/verbivskyi/verbivskyi.component';
import { HladkyiComponent } from './students/hladkyi/hladkyi.component';
import { DementievComponent } from './students/dementiev/dementiev.component';
import { ZadorozhnyiComponent } from './students/zadorozhnyi/zadorozhnyi.component';
import { KomarComponent } from './students/komar/komar.component';
import { KrivkoComponent } from './students/krivko/krivko.component';
import { KutsenkoComponent } from './students/kutsenko/kutsenko.component';
import { PankoComponent } from './students/panko/panko.component';
import { PustovitComponent } from './students/pustovit/pustovit.component';
import { RiabchykComponent } from './students/riabchyk/riabchyk.component';
import { SerhienkoComponent } from './students/serhienko/serhienko.component';
import { SokolovComponent } from './students/sokolov/sokolov.component';
import { StrichevskyiComponent } from './students/strichevskyi/strichevskyi.component';
import { StroganovComponent } from './students/stroganov/stroganov.component';
import { TsybenkoComponent } from './students/tsybenko/tsybenko.component';
import { StudentComponent } from './component/student/student.component';
import { ShramenkoComponent } from './students/shramenko/shramenko.component';
import { SlideshowComponent } from './component/slideshow/slideshow.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  { path: 'babich', component: BabichComponent },
  { path: 'verbivskyi', component: VerbivskyiComponent },
  { path: 'hladkyi', component: HladkyiComponent },
  { path: 'dementiev', component: DementievComponent },
  { path: 'zadorozhnyi', component: ZadorozhnyiComponent },
  { path: 'komar', component: KomarComponent },
  { path: 'krivko', component: KrivkoComponent },
  { path: 'kutsenko', component: KutsenkoComponent },
  { path: 'panko', component: PankoComponent },
  { path: 'pustovit', component: PustovitComponent },
  { path: 'riabchyk', component: RiabchykComponent },
  { path: 'serhienko', component: SerhienkoComponent },
  { path: 'sokolov', component: SokolovComponent },
  { path: 'strichevskyi', component: StrichevskyiComponent },
  { path: 'stroganov', component: StroganovComponent },
  { path: 'tsybenko', component: TsybenkoComponent },
  { path: 'student', component: StudentComponent },
  { path: 'shramenko', component: ShramenkoComponent },];
@NgModule({
  declarations: [
    AppComponent,
    BabichComponent,
    VerbivskyiComponent,
    HladkyiComponent,
    DementievComponent,
    ZadorozhnyiComponent,
    KomarComponent,
    KrivkoComponent,
    KutsenkoComponent,
    PankoComponent,
    PustovitComponent,
    RiabchykComponent,
    SerhienkoComponent,
    SokolovComponent,
    StrichevskyiComponent,
    StroganovComponent,
    TsybenkoComponent,
    StudentComponent,
    ShramenkoComponent,
    SlideshowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
