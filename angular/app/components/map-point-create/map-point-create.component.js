class MapPointCreateController{
    constructor(API) {
        'ngInject';
        this.API = API
        this.errors = []
        this.alerts = []
        this.select_cat = []
        this.select_icon = []
        this.select_level_icon = []
        this.select_level_title = []
        API.all('category').getList().then((response)=>{
            this.select_cat = response
        })
        API.all('category').getList().then((response)=>{
            this.select_icon = response
        })
        API.all('levels').getList().then((response)=>{
            this.select_level_icon = response
        })
        API.all('levels').getList().then((response)=>{
            this.select_level_title = response
        })
    }

}

export const MapPointCreateComponent = {
    templateUrl: './views/app/components/map-point-create/map-point-create.component.html',
    controller: MapPointCreateController,
    controllerAs: 'vm',
    bindings: {}
}


