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
					lat : parseFloat(data[i].lat), 
					lng : parseFloat(data[i].long),
					title : data[i].title
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


