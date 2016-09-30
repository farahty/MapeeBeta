class IconCategoryShowController{
    constructor($stateParams, $state, API,toastr){
        'ngInject';
        this.$state = $state
        this.toastr = toastr
        this.API = API
        this.provider = API.one('category',$stateParams.id)
        this.provider.get().then((response)=>{
            this.icon_category = API.copy(response)
        })
    }

    update(){
        this.provider.put(this.icon_category.data).then((response)=>{
            this.icon_category = this.API.copy(response)
            this.toastr.success('Icon Category Updated Successfully.','Success',{progressBar :true})
        },(response)=>{
            this.toastr.error(response.data.message , 'Error!',{progressBar :true})
        })
    }
}

export const IconCategoryShowComponent = {
    templateUrl: './views/app/components/icon-category-show/icon-category-show.component.html',
    controller: IconCategoryShowController,
    controllerAs: 'vm',
    bindings: {}
}


