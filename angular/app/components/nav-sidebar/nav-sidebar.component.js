class NavSidebarController {
  constructor (AclService, ContextService,$state) {
    'ngInject'

    this.$state = $state
    let navSideBar = this

    this.can = AclService.can

    ContextService.me(function (data) {
      navSideBar.userData = data
    })
  }
  isActive(root){
    return this.$state.includes(root)
  }
  $onInit () {}
}

export const NavSidebarComponent = {
  templateUrl: './views/app/components/nav-sidebar/nav-sidebar.component.html',
  controller: NavSidebarController,
  controllerAs: 'vm',
  bindings: {}
}
