import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./security/login/login.module').then( m => m.LoginPageModule)
  // }

  {
    path: '',
    redirectTo: 'home', // Redirección inicial por defecto
    pathMatch: 'full'
  },
  {
   path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./security/login/login.module').then( m => m.LoginPageModule)
  },
//   {
		
//     path: 'security', loadChildren: () => import('./security/security.module').then( m => m.SecurityModule)
// },
// {
//     path: 'no-encontrado', component: PaginaErrorComponent, data: { message: 'Pagina no encontrada' }
// },
// {
//     path: '**', redirectTo: '/no-encontrado'
// }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
