<script setup>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import * as Cesium from "cesium";
import {getCameraInfo} from "../utils/method/getCameraInfo.js";


const cameraInfo = ref({})
const store = useStore();

// 使用 computed 访问 Vuex store 中的 viewer
const viewer = computed(() => store.getters.getViewer);

// 初始化 viewer 并设置事件处理器
onMounted(() => {
    checkViewer(viewer);
});
const setHandler = (viewer) => {
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction((movement) => {
        const ellipsoid = viewer.scene.globe.ellipsoid;
        const cartesian = viewer.scene.camera.pickEllipsoid(movement.position, ellipsoid);
        const cameraInfo2 = getCameraInfo(viewer);
        if (cartesian) {
            const cartographic = ellipsoid.cartesianToCartographic(cartesian);
            cameraInfo.value.lon = Cesium.Math.toDegrees(cartographic.longitude).toFixed(6);
            cameraInfo.value.lat = Cesium.Math.toDegrees(cartographic.latitude).toFixed(6);
            cameraInfo.value.altitude = Math.ceil(viewer.camera.positionCartographic.height);
            cameraInfo.value.heading = (cameraInfo2.mat.head * (180 / Math.PI)).toFixed(2);
            cameraInfo.value.pitch = (cameraInfo2.mat.pitch * (180 / Math.PI)).toFixed(2);
            window.pitch = cameraInfo.value.pitch;
            cameraInfo.value.roll = (cameraInfo2.mat.roll * (180 / Math.PI)).toFixed(2);
            // 如果需要获取海拔高度信息，请取消注释下面这行代码，并确保 Cesium 全球地形服务已启用
            // getHeight(cameraInfo.value.lon, cameraInfo.value.lat, viewer.terrainProvider);
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
};
const checkViewer = (viewer) => {
    if (viewer) {
        setHandler(viewer.value)
    } else {
        return setTimeout(() => {
            checkViewer(viewer)
        }, 500)
    }
}

async function getHeight(lng, lat, terrainProvider) {
    const positions = [
        Cesium.Cartographic.fromDegrees(parseFloat(lng), parseFloat(lat))];
    try {
        const updatedPositions = await Cesium.sampleTerrain(terrainProvider, 11, positions);
        cameraInfo.value.height = updatedPositions[0].height.toFixed(2)
    } catch (error) {
    }
}

</script>

<template>
    <div id="footer-bar">
        <div class="logo">
            <img alt="" src="../../public/vite.svg">
        </div>
        <div style="right: 0" v-bind="cameraInfo">
            经度:{{ cameraInfo.lon || '获取中' }}&ensp;
            纬度:{{ cameraInfo.lat || '获取中' }}&ensp;
            海拔:{{ cameraInfo.height || '获取中' }}&ensp;
            方向:{{ cameraInfo.heading || '获取中' }}&ensp;
            俯仰角:{{ cameraInfo.pitch || '获取中' }}&ensp;
            倾角:{{ cameraInfo.roll || '获取中' }}&ensp;
            视角高度:{{ cameraInfo.altitude || '获取中' }}&ensp;
        </div>
    </div>
</template>

<style scoped>
#footer-bar {
    background-color: rgba(47, 53, 60, 0.8);
    position: absolute;
    width: 100vw;
    height: 36px;
    z-index: 2;
    margin: 0;
    
    > div {
        height: inherit;
        position: absolute;
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>