class LevelShowController{
    constructor($stateParams, $state, API,toastr){
        'ngInject';
        this.$state = $state
        this.toastr = toastr
        this.API = API
        this.slider = {
            floor: 1, 
            ceil: 21 ,
            showTicksValues: true,
            onEnd : (id)=>{
                this.update()
            }

        }
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

export const LevelShowComponent = {
    templateUrl: './views/app/components/level-show/level-show.component.html',
    controller: LevelShowController,
    controllerAs: 'vm',
    bindings: {}
}


