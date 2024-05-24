import * as Cesium from "cesium";

const getCameraInfo = (viewer) => {
    // 获取相机位置，姿态等
    // 获取 相机姿态信息
    const head = viewer.scene.camera.heading
    const pitch = viewer.scene.camera.pitch
    const roll  = viewer.scene.camera.roll
    const info ={'head': head ,'pitch': pitch ,'roll': roll};
    // 获取位置 wgs84的地心坐标系，x,y坐标值以弧度来表示
    const position = viewer.scene.camera.positionCartographic //with longitude and latitude expressed in radians and height in meters.
    //以下方式也可以获取相机位置只是返回的坐标系不一样
    // var position = viewer.scene.camera.position //cartesian3 空间直角坐标系
    // var ellipsoid = scene.globe.ellipsoid;
    // var position =ellipsoid.cartesianToCartographic(viewer.scene.camera.position)//
    // 弧度转经纬度
    const longitude = Cesium.Math.toDegrees(position.longitude).toFixed(6)
    const latitude =  Cesium.Math.toDegrees(position.latitude).toFixed(6)
    const height = position.height
    return {lng:longitude,lat:latitude,h:height,mat:info}
}
export {getCameraInfo}
