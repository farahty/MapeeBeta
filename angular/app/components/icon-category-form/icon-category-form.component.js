class IconCategoryFormController{
constructor(API,toastr,$state){
        'ngInject';
        this.API = API
        this.type = 'icon'
        this.errors = []
		    this.toastr = toastr
        this.$state = $state
    }
    submit(){
        let level = this.API.all('category')
        let obj = {
            title: this.title,
            description: this.description
        }
        level.post(obj).then(() => {
            this.errors = []
		    this.toastr.success('Icon Category has been added.','Success',{progressBar :true})
            this.$state.go('app.icon_category_list')
        } , (res) => {
            this.errors = res.data.errors
        })

    }
}

export const IconCategoryFormComponent = {
    templateUrl: './views/app/components/icon-category-form/icon-category-form.component.html',
    controller: IconCategoryFormController,
    controllerAs: 'vm',
    bindings: {}
}


