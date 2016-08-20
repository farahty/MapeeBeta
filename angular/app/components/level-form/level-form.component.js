class LevelFormController{
    constructor(API){
        'ngInject';
        this.API = API
        this.type = 'icon'
        this.errors = []
        this.alerts = []
    }
    submit(){
        let level = this.API.all('levels')
        let obj = {
            title: this.title,
            description: this.description,
            type: this.type,
            level_start : this.level_start,
            level_end : this.level_end
        }
        level.post(obj).then(() => {
            this.alerts = []
            this.errors = []
            this.alerts.push({ type: 'success', 'title': 'Success!', msg: 'Level has been added.' })
        } , (res) => {
            this.alerts = []
            this.alerts.push({ type: 'error', 'title': 'Error!', msg: res.data.message })
            this.errors = res.data.errors
        })

    }

}

export const LevelFormComponent = {
    templateUrl: './views/app/components/level-form/level-form.component.html',
    controller: LevelFormController,
    controllerAs: 'vm',
    bindings: {}
}


