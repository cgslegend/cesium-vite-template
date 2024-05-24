<template>
    <div>
        <el-container class="el-container">
            <el-header class="el-header">
                <div>Vue3-Cesium-Template</div>
            </el-header>
            <el-main class="el-main">
                <MapContainer class="map-container"/>
            </el-main>
            <InformationBar class="infomation-bar"/>
        </el-container>
    </div>
</template>

<script setup>
import MapContainer from "./container/MapContainer.vue";
import InformationBar from "../components/InfomationBar.vue"
</script>

<style scoped>
.el-container {
    height: 100vh;
    width: 100vw;
    text-align: left;
    padding: 0;
}

.el-header {
    display: flex;
    justify-content: center;
    height: 48px;
    
    > div {
        height: inherit;
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        
    }
}

.el-main {
    padding: 0;
}

.map-container {
    height: 100%
}

.infomation-bar {
    bottom: 0;
}
</style>
