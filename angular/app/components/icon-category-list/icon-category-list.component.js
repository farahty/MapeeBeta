class IconCategoryListController{
    constructor(API){
        'ngInject';
        this.API = API
        let baseLayer = new ol.layer.Tile({
          source : new ol.source.OSM
        })
        baseLayer.set('layerTitle','Base Layer')
        baseLayer.set('layerZoomMax',0)
        baseLayer.set('layerZoomMin',21)
        this.map = new ol.Map({
          layers : [
            baseLayer
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
        this.updateLayers = ()=>{
            this.map.getLayers().forEach((obj)=>{
              let zoom = this.map.getView().getZoom()
              let max = obj.get('layerZoomMax')
              let min = obj.get('layerZoomMin')
              if(obj.get('layerTitle') != 'Base Layer'){
                if(zoom <= min && zoom >= max){
                  obj.setVisible(true)
                }else {
                  obj.setVisible(false)
                }
              }
            })
        }

      this.map.on('moveend',this.updateLayers)
    }

    $onInit(){
      this.API.all('mapee').getList().then((response)=>{
        let mapee = response.plain()
        for(let m = 0 ; m < mapee.length ; m++){
          let data = mapee[m].points
          let features = new Array()
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
              features.push(feature)
          }
          let vectorSource = new ol.source.Vector({features: features})
          let vector = new ol.layer.Vector({
            source: vectorSource
          })
          vector.set('layerTitle',mapee[m].title)
          vector.set('layerZoomMax',parseInt(mapee[m].level_start))
          vector.set('layerZoomMin',parseInt(mapee[m].level_end))
          vector.setVisible(false)
          this.map.addLayer(vector)
        }
        this.updateLayers()
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
