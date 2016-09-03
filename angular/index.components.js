import {MapIconEditComponent} from './app/components/map_icon_edit/map_icon_edit.component';
import {MapIconShowComponent} from './app/components/map_icon_show/map_icon_show.component';
import {MapIconListComponent} from './app/components/map_icon_list/map_icon_list.component';
import {MapIconCreateComponent} from './app/components/map_icon_create/map_icon_create.component';
import {MapPointEditComponent} from './app/components/map-point-edit/map-point-edit.component';
import {MapPointShowComponent} from './app/components/map-point-show/map-point-show.component';
import {MapPointListComponent} from './app/components/map-point-list/map-point-list.component';
import {MapPointCreateComponent} from './app/components/map-point-create/map-point-create.component';
import {CssClassShowComponent} from './app/components/css-class-show/css-class-show.component';
import {CssClassListComponent} from './app/components/css-class-list/css-class-list.component';
import {CssClassFormComponent} from './app/components/css-class-form/css-class-form.component';
import {IconCategoryShowComponent} from './app/components/icon-category-show/icon-category-show.component';
import {IconCategoryListComponent} from './app/components/icon-category-list/icon-category-list.component';
import {IconCategoryFormComponent} from './app/components/icon-category-form/icon-category-form.component';
import {LevelShowComponent} from './app/components/level-show/level-show.component';
import {LevelListComponent} from './app/components/level-list/level-list.component';
import {LevelFormComponent} from './app/components/level-form/level-form.component';
import {ImageListComponent} from './app/components/image-list/image-list.component';
import {CreateImageFormComponent} from './app/components/create-image-form/create-image-form.component';
import {UploadImageComponent} from './app/components/upload-image/upload-image.component';
import { UserProfileComponent } from './app/components/user-profile/user-profile.component'
import { UserVerificationComponent } from './app/components/user-verification/user-verification.component'
import { UserEditComponent } from './app/components/user-edit/user-edit.component'
import { UserPermissionsEditComponent } from './app/components/user-permissions-edit/user-permissions-edit.component'
import { UserPermissionsAddComponent } from './app/components/user-permissions-add/user-permissions-add.component'
import { UserPermissionsComponent } from './app/components/user-permissions/user-permissions.component'
import { UserRolesEditComponent } from './app/components/user-roles-edit/user-roles-edit.component'
import { UserRolesAddComponent } from './app/components/user-roles-add/user-roles-add.component'
import { UserRolesComponent } from './app/components/user-roles/user-roles.component'
import { UserListsComponent } from './app/components/user-lists/user-lists.component'
import { DashboardComponent } from './app/components/dashboard/dashboard.component'
import { NavSidebarComponent } from './app/components/nav-sidebar/nav-sidebar.component'
import { NavHeaderComponent } from './app/components/nav-header/nav-header.component'
import { LoginLoaderComponent } from './app/components/login-loader/login-loader.component'
import { ResetPasswordComponent } from './app/components/reset-password/reset-password.component'
import { ForgotPasswordComponent } from './app/components/forgot-password/forgot-password.component'
import { LoginFormComponent } from './app/components/login-form/login-form.component'
import { RegisterFormComponent } from './app/components/register-form/register-form.component'

angular.module('app.components')
	.component('mapIconEdit', MapIconEditComponent)
	.component('mapIconShow', MapIconShowComponent)
	.component('mapIconList', MapIconListComponent)
	.component('mapIconCreate', MapIconCreateComponent)
	.component('mapPointEdit', MapPointEditComponent)
	.component('mapPointShow', MapPointShowComponent)
	.component('mapPointList', MapPointListComponent)
	.component('mapPointCreate', MapPointCreateComponent)
	.component('cssClassShow', CssClassShowComponent)
	.component('cssClassList', CssClassListComponent)
	.component('cssClassForm', CssClassFormComponent)
	.component('iconCategoryShow', IconCategoryShowComponent)
	.component('iconCategoryList', IconCategoryListComponent)
	.component('iconCategoryForm', IconCategoryFormComponent)
	.component('levelShow', LevelShowComponent)
	.component('levelList', LevelListComponent)
	.component('levelForm', LevelFormComponent)
	.component('imageList', ImageListComponent)
	.component('createImageForm', CreateImageFormComponent)
	.component('uploadImage', UploadImageComponent)
  .component('userProfile', UserProfileComponent)
  .component('userVerification', UserVerificationComponent)
  .component('userEdit', UserEditComponent)
  .component('userPermissionsEdit', UserPermissionsEditComponent)
  .component('userPermissionsAdd', UserPermissionsAddComponent)
  .component('userPermissions', UserPermissionsComponent)
  .component('userRolesEdit', UserRolesEditComponent)
  .component('userRolesAdd', UserRolesAddComponent)
  .component('userRoles', UserRolesComponent)
  .component('userLists', UserListsComponent)
  .component('dashboard', DashboardComponent)
  .component('navSidebar', NavSidebarComponent)
  .component('navHeader', NavHeaderComponent)
  .component('loginLoader', LoginLoaderComponent)
  .component('resetPassword', ResetPasswordComponent)
  .component('forgotPassword', ForgotPasswordComponent)
  .component('loginForm', LoginFormComponent)
  .component('registerForm', RegisterFormComponent)
