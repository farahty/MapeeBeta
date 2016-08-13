class CreateImageFormController{
    constructor(API){
        'ngInject';
        this.API = API
        this.errors = []
    }

    submit(){
        let images = this.API.all('images')
        let obj = {
            title: this.form_title,
            description: this.form_desc,
            path: angular.element("#img_src").val()
        }
        images.post(obj).then(() => {} , (res) => {
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


