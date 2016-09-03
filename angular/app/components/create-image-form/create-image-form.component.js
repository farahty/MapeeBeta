class CreateImageFormController{
    constructor(API,toastr){
        'ngInject';
        this.API = API
        this.errors = []
		this.toastr=toastr
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
        } , (res) => {
            this.errors = res.data.errors
			this.toastr.success('Image Created Sucessfully','Success',{progressBar :true})
        })

    }
}

export const CreateImageFormComponent = {
    templateUrl: './views/app/components/create-image-form/create-image-form.component.html',
    controller: CreateImageFormController,
    controllerAs: 'vm',
    bindings: {}
}


