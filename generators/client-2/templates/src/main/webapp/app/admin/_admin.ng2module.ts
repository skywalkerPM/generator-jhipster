import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AuditsService } from './audits/audits.service';
import { <%=jhiPrefixCapitalized%>ConfigurationService } from './configuration/configuration.service';
import { <%=jhiPrefixCapitalized%>HealthService } from './health/health.service';
import { LogsService } from './logs/logs.service';
import { ParseLinks } from "../components/util/parse-links.service";

import { OrderByPipe } from '../shared/order-by.pipe';
import { FilterPipe } from '../shared/filter.pipe';
import { TranslatePipe } from '../shared/translate.pipe';

import { AuditsComponent } from './audits/audits.component';
import { <%=jhiPrefixCapitalized%>ConfigurationComponent } from './configuration/configuration.component';
import { <%=jhiPrefixCapitalized%>HealthCheckComponent } from './health/health.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [
        FilterPipe,
        OrderByPipe,
        TranslatePipe,
        AuditsComponent,
        <%=jhiPrefixCapitalized%>ConfigurationComponent,
        <%=jhiPrefixCapitalized%>HealthCheckComponent,
        LogsComponent,
        OrderByPipe,
        FilterPipe,
        TranslatePipe
    ],
    providers: [
        AuditsService,
        <%=jhiPrefixCapitalized%>ConfigurationService,
        <%=jhiPrefixCapitalized%>HealthService,
        LogsService,
        ParseLinks,
        {
            provide: XSRFStrategy,
            useValue:  new CookieXSRFStrategy('CSRF-TOKEN', 'X-CSRF-TOKEN')
        }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%=angular2AppName%>AdminModule {}