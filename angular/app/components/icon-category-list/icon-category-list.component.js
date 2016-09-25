class IconCategoryListController{
    constructor($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API){
        'ngInject';
        this.API = API
        this.$state = $state

        let category = this.API.all('category')
        let createdRow = (row) => {
            $compile(angular.element(row).contents())($scope)
        }
        let actionsHtml = (data) => {
            return `
                <a class="btn btn-xs btn-warning" ui-sref="app.userpermissionsedit({permissionId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
        }
            category.getList().then((response) => {
            let dataSet = response.plain()
            this.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('data', dataSet)
                .withOption('createdRow', createdRow)
                .withOption('responsive', true)
                .withBootstrap()

            this.dtColumns = [
                DTColumnBuilder.newColumn('title').withTitle('Title'),
                DTColumnBuilder.newColumn('description').withTitle('Description'),
                DTColumnBuilder.newColumn('author.name').withTitle('Author'),
                DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
                    .renderWith(actionsHtml)
            ]
            this.displayTable = true
        } , () => {
            this.displayTable = false
        })

    }
    delete (categoryId) {
        let API = this.API
        let $state = this.$state

        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            html: false
        }, function () {
            API.one('category', categoryId).remove()
                .then(() => {
                    swal({
                        title: 'Deleted!',
                        text: 'Icon Category has been deleted.',
                        type: 'success',
                        confirmButtonText: 'OK',
                        closeOnConfirm: true
                    }, function () {
                        $state.reload()
                    })
                })
        })
    }
    $onInit(){

    }
}

export const IconCategoryListComponent = {
    templateUrl: './views/app/components/icon-category-list/icon-category-list.component.html',
    controller: IconCategoryListController,
    controllerAs: 'vm',
    bindings: {}
}
