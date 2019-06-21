import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { Routes, RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { HomeComponent } from './home/home.component';
import { FormExamenNuevoComponent } from './form-examen-nuevo/form-examen-nuevo.component';
import { ListaExamComponent } from './lista-exam/lista-exam.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { AddpreguntaFormComponent } from './addpregunta-form/addpregunta-form.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { AddRespuestaFormComponent } from './add-respuesta-form/add-respuesta-form.component';
import { ListAnswerComponent } from './list-answer/list-answer.component';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';
import { ListaExamenAlumnosComponent } from './interfaces-Alumnos/lista-examen-alumnos/lista-examen-alumnos.component';
import { FormAddStudentExamComponent } from './form-add-student-exam/form-add-student-exam.component';
import { ClaveQuestionComponent } from './clave-question/clave-question.component';
import { ListClaveComponent } from './list-clave/list-clave.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/password/response-reset/response-reset.component';
import { JarwisService } from './Services/jarwis.service';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { PresentarExamComponent } from './interfaces-Alumnos/presentar-exam/presentar-exam.component';
import { ValueArrayPipe } from './value-array.pipe';
import { ListCalificacionesComponent } from './interfaces-Alumnos/list-calificaciones/list-calificaciones.component';
import { ResultadosComponent } from './interfaces-Alumnos/resultados/resultados.component';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes=[
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'alumno', component:AlumnoComponent,
  canActivate: [AfterLoginService]},
  { path:'alumnoLista/:idAl', component:ListaExamenAlumnosComponent,
  canActivate: [AfterLoginService]},
  { path:'presentarExamen/:id/:idExa', component:PresentarExamComponent,
  canActivate: [AfterLoginService]},
  { path:'form', component:FormAlumnoComponent,
  canActivate: [AfterLoginService]},
  { path:'formExamen', component:FormExamenNuevoComponent,
  canActivate: [AfterLoginService]},
  { path:'listaExamen', component:ListaExamComponent,
  canActivate: [AfterLoginService]},
  { path:'addAlumno/:id', component:AddAlumnoComponent,
  canActivate: [AfterLoginService]},
  { path:'addPregunta/:id', component:AddpreguntaFormComponent,
  canActivate: [AfterLoginService]},
  { path:'addPregunta', component:AddpreguntaFormComponent,
  canActivate: [AfterLoginService]},
  { path:'form/:id', component:FormAlumnoComponent,
  canActivate: [AfterLoginService]},
  { path:'details/:idExa', component:DetallesComponent,
  canActivate: [AfterLoginService]},
  { path:'calificacionesExa/:idAlu', component:ListCalificacionesComponent,
  canActivate: [AfterLoginService]},
  { path:'formExamen/:id', component:FormExamenNuevoComponent,
  canActivate: [AfterLoginService]},
  { path:'listaQue/:idExa', component:ListQuestionComponent,
  canActivate: [AfterLoginService]},
  { path:'editPregunta/:id', component:EditQuestionComponent,
  canActivate: [AfterLoginService]},
  { path:'editRespuesta/:id', component:EditAnswerComponent,
  canActivate: [AfterLoginService]},
  { path:'addRespuesta/:id', component:AddRespuestaFormComponent,
  canActivate: [AfterLoginService]},
  { path:'addRespuesta', component:AddRespuestaFormComponent,
  canActivate: [AfterLoginService]},
  { path:'listaAns/:idQue', component:ListAnswerComponent,
  canActivate: [AfterLoginService]},
  { path:'AlumnosExam', component:ListaExamenAlumnosComponent,
  canActivate: [AfterLoginService]},
  { path:'AddAlumnosExam/:idExa/:id', component:FormAddStudentExamComponent,
  canActivate: [AfterLoginService]},
  { path:'AddClaveExam/:idQue/:idAns', component:ClaveQuestionComponent,
  canActivate: [AfterLoginService]},
  { path:'listCla/:id', component:ListClaveComponent,
  canActivate: [AfterLoginService]},
  { path:'resultado/:idAl/:idEx', component:ResultadosComponent,
  canActivate: [AfterLoginService]},
  {
    path:'login',
    component:LoginComponent,
    canActivate: [BeforeLoginService]
    
  },
  {
    path:'singup',
    component:SignupComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'response-password-reset',
    component:ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },


];

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    FormAlumnoComponent,
    HomeComponent,
    FormExamenNuevoComponent,
    ListaExamComponent,
    AddAlumnoComponent,
    AddpreguntaFormComponent,
    ListQuestionComponent,
    EditQuestionComponent,
    AddRespuestaFormComponent,
    ListAnswerComponent,
    EditAnswerComponent,
    ListaExamenAlumnosComponent,
    FormAddStudentExamComponent,
    ClaveQuestionComponent,
    ListClaveComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    PresentarExamComponent,
    ValueArrayPipe,
    ListCalificacionesComponent,
    ResultadosComponent,
    DetallesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientXsrfModule,
    SnotifyModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

