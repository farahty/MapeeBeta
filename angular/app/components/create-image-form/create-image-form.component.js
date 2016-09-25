class CreateImageFormController{
    constructor(API,toastr,$state){
        'ngInject';
        this.API = API
        this.errors = []
		    this.toastr=toastr
        this.$state = $state
      }

    submit(){
        let images = this.API.all('images')
        let obj = {
            title: this.form_title,
            description: this.form_desc,
            path: angular.element("#img_src").val()
        }
        images.post(obj).then(() => {
            this.errors = []
            this.toastr.success('Image Created Sucessfully','Success',{progressBar :true})
            this.$state.go('app.image_list')
        } , (res) => {
            this.errors = res.data.errors
        })

    }
}

export const CreateImageFormComponent = {
    templateUrl: './views/app/components/create-image-form/create-image-form.component.html',
    controller: CreateImageFormController,
    controllerAs: 'vm',
    bindings: {}
}
