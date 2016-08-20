class CssClassFormController{
    constructor(API){
        'ngInject';
        this.API = API
        this.errors = []
        this.alerts = []
    }
    submit(){
        let css_class = this.API.all('css')
        let obj = {
            title: this.title,
            description: this.description
        }
        css_class.post(obj).then(() => {
            this.alerts = []
            this.errors = []
            this.alerts.push({ type: 'success', 'title': 'Success!', msg: 'CSS Class has been added.' })
        } , (res) => {
            this.alerts = []
            this.alerts.push({ type: 'error', 'title': 'Error!', msg: res.data.message })
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


