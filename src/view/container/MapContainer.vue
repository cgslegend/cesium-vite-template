<template>
    <div id="cesiumContainer">
    
    </div>
</template>

<script setup>
import * as Cesium from "cesium";
import {onMounted} from "vue";
import {cesiumOptions} from "../../utils/options/cesiumOptions.js";
import CesiumNavigation from "cesium-navigation-es6"
import {navigationOptions} from "../../utils/options/navigationOptions.js";
import {useStore} from 'vuex';

let viewer

const store = useStore();

onMounted(() => {
    init()
    const navigation = new CesiumNavigation(viewer, navigationOptions)
})
const init = () => {
    viewer = new Cesium.Viewer("cesiumContainer", cesiumOptions);
    store.dispatch('initializeViewer', viewer);
    // 如果要应用天地图底图，可以取消下面的注释，需要在 tdtLayerOption 文件中设置 WebKey
    // let arrayImagery = viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider(tdtCostumeLevelOptions));
    // arrayImagery.hue = 2
    // arrayImagery.contrast = -1.1
    // let annoImagery = viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider(tdtAnnoLayerOptions));
    // annoImagery.hue = 2
    // annoImagery.contrast = -1.1
}
</script>

<style scoped>
#cesiumContainer {
    display: flex;
    align-items: end;
}
</style>
