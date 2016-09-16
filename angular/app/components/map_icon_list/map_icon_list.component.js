class MapIconListController{
    constructor(API){
        'ngInject';
        this.API = API
        this.markers = new Array()
    }

    $onInit(){
		this.API.all('points').getList().then((response)=>{
			let data = response.plain()

			for(let i = 0 ; i < data.length ; i++){
				let obj = {
					lat: parseFloat(data[i].lat),
					lon: parseFloat(data[i].long),
          label:{
              message:data[i].title,
              show: false,
              showOnMouseOver: true
            },
          style:{
            image:{
              icon:{
                src   : data[i].icon.image.path,
                offset:[parseFloat(data[i].icon.offset_x),parseFloat(data[i].icon.offset_y)],
                size  :[parseFloat(data[i].icon.width),parseFloat(data[i].icon.height)]
              }
            }
          }
				 }
					this.markers.push(obj)
			}
		},(response)=>{

		})
    }
}

export const MapIconListComponent = {
    templateUrl: './views/app/components/map_icon_list/map_icon_list.component.html',
    controller: MapIconListController,
    controllerAs: 'vm',
    bindings: {}
}
