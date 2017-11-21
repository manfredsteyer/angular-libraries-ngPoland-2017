

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../shared/auth/auth.guard';
import { AuthLoadGuard } from '../shared/auth/auth.load.guard';
import { SimpleAuthService } from '../shared/auth/simple-auth.service';
import { AuthService } from '../shared/auth/auth.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // Shell
        // Components, Directives, Pipes
    ],
    providers: [],
    exports: [

    ]
})
export class AuthModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                AuthGuard,
                { provide: AuthLoadGuard, useClass: AuthLoadGuard },
                { provide: AuthService, useClass: SimpleAuthService }
            ]
        }
    }

}