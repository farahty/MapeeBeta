class LevelFormController{
    constructor(API,toastr,$state){
        'ngInject';
        this.API = API
        this.type = 'icon'
        this.errors = []
		this.toastr = toastr
        this.$state = $state
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
            this.errors = []
			      this.toastr.success('Level has been added.','Success',{progressBar :true})
            this.$state.go('app.level_list')
        } , (res) => {
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
