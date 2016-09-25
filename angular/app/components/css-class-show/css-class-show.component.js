class CssClassShowController{
    constructor($stateParams, $state, API,toastr){
        'ngInject';
        this.$state = $state
        this.toastr = toastr
        this.CSS = API.one('css',$stateParams.id)
        this.CSS.get().then((response)=>{
            this.css = API.copy(response)
        })
    }

    update(){
        this.CSS.put(this.css.data).then(()=>{
            this.toastr.success('Css Class Updated Successfully.','Success',{progressBar :true})
        },(response)=>{
            this.toastr.error(response.data.message , 'Error!',{progressBar :true})
        })
    }
}

export const CssClassShowComponent = {
    templateUrl: './views/app/components/css-class-show/css-class-show.component.html',
    controller: CssClassShowController,
    controllerAs: 'vm',
    bindings: {}
}