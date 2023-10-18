import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule,RouterModule.forChild([
        { path: '', component: AuthComponent }
    ]),SharedModule]
})
export class AuthModule {

}