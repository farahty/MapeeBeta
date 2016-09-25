class MapPointCreateController{
    constructor(API,leafletData,$scope,toastr,$state) {
        'ngInject';
        this.API = API
        this.toastr=toastr
        this.$state = $state
        this.errors = []
        this.select_cat = []
        this.select_icon = []
        this.select_level_icon = []
        let created_marker = {}
        this.events = {markers:{enable: [ 'dragend' ]}}
        this.API.all('category').getList().then((response)=>{
            this.select_cat = response
        })

        this.API.all('levels').getList().then((response)=>{
            this.select_level_icon = response
        })

        this.defaults = {
                tileLayer: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                maxZoom: 14,
                path: {weight: 10,color: '#800000',opacity: 1}
            }
        this.center = {lat: 32,lng: 35.2,zoom: 8}
        this.markers = new Array()
        $scope.$on("leafletDirectiveMap.click" , (event, args) => {
            let leafEvent = args.leafletEvent
            this.lat = leafEvent.latlng.lat
            this.long = leafEvent.latlng.lng
            created_marker = {
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                    message: "الرجاء اختيار مكانك",
                    draggable: true,
                    focus: true
                }
            this.markers = new Array(created_marker)
        })
        $scope.$on("leafletDirectiveMarker.dragend",(event, args)=>{
            this.lat = args.model.lat
            this.long = args.model.lng
        })
    }
    refresh_points(){
        this.select_icon = []
        this.API.one('iconcat',this.cat_id).getList().then((response)=>{
            this.select_icon = response
        })
    }
    submit(){
        let obj = {
            title : this.title ,
            description : this.description ,
            lat : this.lat,
            long : this.long,
            icon_id : this.icon_id,
            cat_id : this.cat_id,
            icon_level_id : this.icon_level_id
        }
        this.API.all('points').post(obj).then(() => {
            this.errors = []
            this.toastr.success('Mapee Point Created Sucessfully','Success',{progressBar :true})
            this.$state.go('app.map_point_list')
        } , (res) => {
            this.errors = res.data.errors
        })
    }
}

export const MapPointCreateComponent = {
    templateUrl: './views/app/components/map-point-create/map-point-create.component.html',
    controller: MapPointCreateController,
    controllerAs: 'vm',
    bindings: {}
}
