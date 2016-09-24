class IconCategoryListController{
    constructor(API){
        'ngInject';
        this.API = API
        this.markers = new Array()
        this.map = new ol.Map({
          layers : [
            new ol.layer.Tile({
              source : new ol.source.OSM
            })
          ],
          target : 'map',
          view : new ol.View({
            projection: 'EPSG:4326',
            extent: [ 34.1015625,31.1846091357,35.6286621094,33.3397070042 ],
            minZoom : 8,
            center : [35.2043795586,31.9048856826],
            zoom : 8
          })
        })
    }

    $onInit(){
      this.API.all('points').getList().then((response)=>{
        let data = response.plain()
        for(let i = 0 ; i < data.length ; i++){
            let feature = new ol.Feature(new ol.geom.Point([
              parseFloat(data[i].long),
              parseFloat(data[i].lat)
            ]))
            feature.setStyle(new ol.style.Style({
              image : new ol.style.Icon({
                src   : data[i].icon.image.path,
                offset:[parseFloat(data[i].icon.offset_x),parseFloat(data[i].icon.offset_y)],
                size  :[parseFloat(data[i].icon.width),parseFloat(data[i].icon.height)]
              }),
              text : new ol.style.Text({
                text : data[i].title,
                offsetY: 10
              })
            }))
            this.markers.push(feature)
        }
        let features = this.markers
        let vectorSource = new ol.source.Vector({features: features})
        let vector = new ol.layer.Vector({source: vectorSource})
        this.map.addLayer(vector)
      },(response)=>{

      })
    }
}

export const IconCategoryListComponent = {
    templateUrl: './views/app/components/icon-category-list/icon-category-list.component.html',
    controller: IconCategoryListController,
    controllerAs: 'vm',
    bindings: {}
}
