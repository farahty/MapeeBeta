class MapIconShowController{
    constructor($stateParams, $state, API,toastr){
        'ngInject';
        this.$state = $state
        this.toastr = toastr
        this.API = API
        this.provider = API.one('levels',$stateParams.id)
        this.provider.get().then((response)=>{
            this.level = API.copy(response)
        })
    }

    update(){
        this.provider.put(this.level.data).then((response)=>{
            this.level = this.API.copy(response)
            this.toastr.success('Map Level Updated Successfully.','Success',{progressBar :true})
        },(response)=>{
            this.toastr.error(response.data.message , 'Error!',{progressBar :true})
        })
    }
}

export const MapIconShowComponent = {
    templateUrl: './views/app/components/map_icon_show/map_icon_show.component.html',
    controller: MapIconShowController,
    controllerAs: 'vm',
    bindings: {}
}


