class CreateImageFormController{
    constructor(API){
        'ngInject';
        this.API = API
        this.errors = []
        this.alerts = []
    }

    submit(){
        let images = this.API.all('images')
        let obj = {
            title: this.form_title,
            description: this.form_desc,
            path: angular.element("#img_src").val()
        }
        images.post(obj).then(() => {
            this.alerts = []
            this.errors = []
            this.alerts.push({ type: 'success', 'title': 'Success!', msg: 'Image has been added.' })
        } , (res) => {
            this.alerts = []
            this.alerts.push({ type: 'error', 'title': 'Error!', msg: res.data.message })
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


