import * as Cesium from "cesium";

//你的 CesiumIon token
//Cesium.Ion.defaultAccessToken = '你的 CesiumIon token';
const cesiumOptions = {
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
        Cesium.TileMapServiceImageryProvider.fromUrl(
            Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
        )
    ),
    animation: false, // 动画部件
    //terrain: Cesium.Terrain.fromWorldTerrain(), //开启需要设置CesiumIon token
    baseLayerPicker: false, // 基础图层部件
    fullscreenButton: false, // 全屏按钮部件
    vrButton: false, // vr部件
    geocoder: false, // 位置搜索部件
    homeButton: false, // home按钮
    infoBox: false, // 消息框部件
    sceneModePicker: false, // 二三维切换部件
    selectionIndicator: false,
    timeline: false, // 时间轴部件
    navigationHelpButton: false, // 导航帮助按钮
    navigationInstructionsInitiallyVisible: false, // 导航说明显示
    scene3DOnly: true, // 当设置为true时，每个几何图形实例将仅以3D形式呈现，以节省GPU内存。
    shouldAnimate: false, // 太阳模拟时钟时间
    // clockViewModel: new Cesium.ClockViewModel(clock),  // 当shouldAnimate为ture,执行当前设置的时间区间动画
    // selectedImageryProviderViewModel:{}, // 当前基础影像图层，如果设置将使用第一个可用的基础图层。仅当“ baseLayerPicker”设置为true时，此值才有效。
    // imageryProviderViewModels: [],  //可以从BaseLayerPicker中选择的ProviderViewModels数组。仅当“ baseLayerPicker”设置为true时，此值才有效。
    // selectedTerrainProviderViewModel: new Cesium.ProviderViewModel(options) // 当前基础地形图层的视图模型（如果未提供）将使用第一个可用的基础图层。仅当“ baseLayerPicker”设置为true时，此值才有效。
    // terrainProviderViewModels: [],   // 可以从BaseLayerPicker中选择的ProviderViewModels数组。仅当“ baseLayerPicker”设置为true时，此值才有效。
    // imageryProvider: // 加载不同的地图服务。仅当“ baseLayerPicker”设置为false时，此值才有效。
    // terrainProvider: // 加载地形服务
    // skyBox: false,  // 配置天空盒子或不显示天空盒子
    // skyAtmosphere: false, // 配置大气或不显示大气
    // fullscreenElement: '',  // 配置全屏按钮，传入id或者dom
    useDefaultRenderLoop: true, // 控制是否继续渲染
    // targetFrameRate:24, // 控制渲染帧数
    showRenderLoopErrors: true, // 报错是否弹出错误
    useBrowserRecommendedResolution: true, // 设置为false使用window.devicePixelRatio属性
    automaticallyTrackDataSourceClocks: false, // 设置成true，使用公共clock对象，设置false，所有功能使用独立clock对象
    contextOptions: {}, // 创建场景时，配置webgl
    sceneMode: Cesium.SceneMode.SCENE3D, // 初始化场景为3D、2.5D、2D
    // mapProjection:new GeographicProjection(),   // 使用2D 或者 Columbus View modes 设置地图投影方式
    //globe: false, // 配置新的地球或隐藏地球
    orderIndependentTranslucency: true, // 如果为true且配置支持，则使用顺序无关的透明性。
    //creditContainer: document.getElementById('units'),    // 部件容器
    // creditViewport: '', // 提示显示容器
    // dataSources: new Cesium.DataSourceCollection(), // 小部件数据源设置
    terrainExaggeration: 1.0,   // 夸大地形
    shadows: true,  // 是否打开阴影
    terrainShadows: true,   // 是否打开地形阴影
    mapMode2D: Cesium.MapMode2D.INFINITE_SCROLL,   // 设置2D地图水平旋转
    projectionPicker: false,    // 设置为true,  ProjectionPicker部件会被创建,    ProjectionPicker：设置地球最佳视角
    // 如果为真，渲染帧只会在需要时发生，这是由场景中的变化决定的。启用可以减少你的应用程序的CPU/GPU使用，并且在移动设备上使用更少的电池，但是需要使用Scene#requestRender在这种模式下显式地渲染一个新帧。在许多情况下，在API的其他部分更改场景后，这是必要的。请参阅使用显式呈现提高性能。
    // 请求渲染模式，开启后数据改变时并不会主动渲染
    requestRenderMode: false,
    // 如果requestRenderMode为true，这个值定义了在请求渲染之前允许的模拟时间的最大变化。请参阅使用显式呈现提高性能。
    maximumRenderTimeChange: 0.0,
    debugShowFramesPerSecond:false
}

export {cesiumOptions}
