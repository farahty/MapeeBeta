class CssClassFormController{
    constructor(API,toastr,$state){
        'ngInject';
        this.API = API
        this.errors = []
		    this.toastr = toastr
        this.$state = $state
    }
    submit(){
        let css_class = this.API.all('css')
        let obj = {
            title: this.title,
            description: this.description
        }
        css_class.post(obj).then(() => {
            this.errors = []
			      this.toastr.success('CSS Class has been added.','Success',{progressBar :true})
            this.$state.go('app.css_class_list')		
        } , (res) => {
            this.errors = res.data.errors
        })

    }
}

export const CssClassFormComponent = {
    templateUrl: './views/app/components/css-class-form/css-class-form.component.html',
    controller: CssClassFormController,
    controllerAs: 'vm',
    bindings: {}
}
