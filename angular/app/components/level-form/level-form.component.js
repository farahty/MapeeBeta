class LevelFormController{
    constructor(){
        'ngInject';

        this.type = 'icon'
    }

    $onInit(){
    }
}

export const LevelFormComponent = {
    templateUrl: './views/app/components/level-form/level-form.component.html',
    controller: LevelFormController,
    controllerAs: 'vm',
    bindings: {}
}


