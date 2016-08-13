class UploadImageController{
    constructor(FileUploader){
        'ngInject';
        this.FileUploader = FileUploader
        this.uploader = ''
    }

    $onInit(){
        this.uploader = new this.FileUploader({
            queueLimit: 1
        })
        this.uploader.autoUpload = true
        this.uploader.url = 'api/images/upload'
        let id = this.input
        this.uploader.onCompleteItem = function(item, response){
            item.img_src = response.data.img_src
            angular.element('#'+id).val(response.data.img_src)

        }
    }
    remove(item){
        item.remove()
        angular.element('#'+this.input).val('')

    }
}

export const UploadImageComponent = {
    templateUrl: './views/app/components/upload-image/upload-image.component.html',
    controller: UploadImageController,
    controllerAs: 'vm',
    bindings: {
        title : "@",
        input : "@"
    }
}


