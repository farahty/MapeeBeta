export function RoutesConfig ($stateProvider, $urlRouterProvider) {
  'ngInject'

  var getView = (viewName) => {
    return `./views/app/pages/${viewName}/${viewName}.page.html`
  }

  var getLayout = (layout) => {
    return `./views/app/pages/layout/${layout}.page.html`
  }

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('app', {
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@app': {
          templateUrl: getView('header')
        },
        'footer@app': {
          templateUrl: getView('footer')
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-red sidebar-mini'
      }
    })
    .state('app.landing', {
      url: '/',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          templateUrl: getView('landing')
        }
      }
    })
    .state('app.image_create', {
        url: '/image/create',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<create-image-form></create-image-form>'
          }
        }
      })
      .state('app.map_point_create', {
        url: '/map-point/create',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<map-point-create></map-point-create>'
          }
        }
      })
      .state('app.map_point_list', {
        url: '/map-point',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<map-point-list></map-point-list>'
          }
        }
      })
      .state('app.map_point_show', {
        url: '/map-point/show',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<map-point-show></map-point-show>'
          }
        }
      })
      .state('app.map_icon_list', {
        url: '/map-icon',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<map-icon-list></map-icon-list>'
          }
        }
      })
      .state('app.map_icon_create', {
        url: '/map-icon/create',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<map-icon-create></map-icon-create>'
          }
        }
      })
      .state('app.map-icon_show', {
        url: '/map-icon/show',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<map-icon-show></map-icon-show>'
          }
        }
      })
      .state('app.css_class_list', {
        url: '/css-class',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<css-class-list></css-class-list>'
          }
        }
      })
      .state('app.css_class_create', {
        url: '/css-class/create',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<css-class-form></css-class-form>'
          }
        }
      })
      .state('app.css_class_show', {
        url: '/css-class/show',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<css-class-show></css-class-show>'
          }
        }
      })
      .state('app.icon_category_list', {
        url: '/icon-category',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<icon-category-list></icon-category-list>'
          }
        }
      })
      .state('app.level_create', {
        url: '/level/create',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<level-form></level-form>'
          }
        }
      })
      .state('app.level_list', {
        url: '/level',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<level-list></level-list>'
          }
        }
      })
      .state('app.level_show', {
        url: '/level/show',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<level-show></level-show>'
          }
        }
      })

      .state('app.image_list', {
        url: '/image',
        data: {
          auth: true
        },
        views: {
          'main@app': {
            template: '<image-list></image-list>'
          }
        }
      })
      .state('app.profile', {
      url: '/profile',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-profile></user-profile>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userlist', {
      url: '/user-lists',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-lists></user-lists>'
        }
      }
    })
    .state('app.useredit', {
      url: '/user-edit/:userId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-edit></user-edit>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })
    .state('app.userroles', {
      url: '/user-roles',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles></user-roles>'
        }
      }
    })
    .state('app.userpermissions', {
      url: '/user-permissions',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions></user-permissions>'
        }
      }
    })
    .state('app.userpermissionsadd', {
      url: '/user-permissions-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-add></user-permissions-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userpermissionsedit', {
      url: '/user-permissions-edit/:permissionId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-edit></user-permissions-edit>'
        }
      },
      params: {
        alerts: null,
        permissionId: null
      }
    })
    .state('app.userrolesadd', {
      url: '/user-roles-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-add></user-roles-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userrolesedit', {
      url: '/user-roles-edit/:roleId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-edit></user-roles-edit>'
        }
      },
      params: {
        alerts: null,
        roleId: null
      }
    })

    .state('login', {
      url: '/login',
      views: {
        'layout': {
          templateUrl: getView('login')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        registerSuccess: null,
        successMsg: null
      }
    })
    .state('loginloader', {
      url: '/login-loader',
      views: {
        'layout': {
          templateUrl: getView('login-loader')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'layout': {
          templateUrl: getView('register')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition register-page'
      }
    })
    .state('userverification', {
      url: '/userverification/:status',
      views: {
        'layout': {
          templateUrl: getView('user-verification')
        }
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        status: null
      }
    })
    .state('forgot_password', {
      url: '/forgot-password',
      views: {
        'layout': {
          templateUrl: getView('forgot-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('reset_password', {
      url: '/reset-password/:email/:token',
      views: {
        'layout': {
          templateUrl: getView('reset-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('app.logout', {
      url: '/logout',
      views: {
        'main@app': {
          controller: function ($rootScope, $scope, $auth, $state, AclService) {
            $auth.logout().then(function () {
              delete $rootScope.me
              AclService.flushRoles()
              AclService.setAbilities({})
              $state.go('login')
            })
          }
        }
      }
    })
}
