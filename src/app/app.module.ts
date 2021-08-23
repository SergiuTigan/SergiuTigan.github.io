import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_REDUCER } from './store/app.reducers';
import { ENVIRONMENT } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '@app/store/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: ENVIRONMENT.production ? NgxLoggerLevel.OFF : NgxLoggerLevel.LOG,
      serverLogLevel: NgxLoggerLevel.OFF
    }),
    StoreModule.forRoot({ state: APP_REDUCER }),
    StoreDevtoolsModule.instrument({
      name: 'INVICTI',
      maxAge: 25,
      logOnly: ENVIRONMENT.production,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    EffectsModule.forRoot([
      AppEffects
    ]),
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
