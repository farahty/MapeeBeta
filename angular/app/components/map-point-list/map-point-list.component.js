class MapPointListController{
constructor($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API){
        'ngInject';
        this.API = API
        this.$state = $state

        let points = this.API.all('points')
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
        let renderIcon = (data)=>{
            return `
            <div style="
                width: ${data.icon.width}px;
                height: ${data.icon.height}px;
                background-image : url('${data.icon.image.path}');
                background-position: ${data.icon.offset_y}px ${data.icon.offset_x}px;
            "></div>
            `
        }
            points.getList().then((response) => {
            let dataSet = response.plain()
            this.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('data', dataSet)
                .withOption('createdRow', createdRow)
                .withOption('responsive', true)
                .withBootstrap()

            this.dtColumns = [
                DTColumnBuilder.newColumn(null).withTitle('Icon').renderWith(renderIcon),
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
    delete (pointId) {
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
            API.one('points', pointId).remove()
                .then(() => {
                    swal({
                        title: 'Deleted!',
                        text: 'Mapee Point has been deleted.',
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

export const MapPointListComponent = {
    templateUrl: './views/app/components/map-point-list/map-point-list.component.html',
    controller: MapPointListController,
    controllerAs: 'vm',
    bindings: {}
}
