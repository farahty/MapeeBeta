class MapPointListController{
    constructor(API){
        'ngInject';
        this.API = API
        this.errors = []
        this.alerts = []
        this.center = {lat: 32,lng: 35.2,zoom: 8}
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

export const MapPointListComponent = {
    templateUrl: './views/app/components/map-point-list/map-point-list.component.html',
    controller: MapPointListController,
    controllerAs: 'vm',
    bindings: {}
}


