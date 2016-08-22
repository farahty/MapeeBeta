class MapPointListController{
    constructor(API){
        'ngInject';
        this.API = API
        this.errors = []
        this.alerts = []
        this.center = {lat: 51.505,lng: -0.09,zoom: 8}
        this.markers = new Array()
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


