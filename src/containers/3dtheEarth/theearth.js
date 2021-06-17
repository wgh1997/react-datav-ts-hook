
import React from 'react'

import * as THREE from './build/three.module.js';

import Stats from './jsm/libs/stats.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

class BugCount extends React.Component {
        init() {
                let renderer, camera, scene, gui, light, stats, controls, geometry, material, line, matLine, mesh, group, radius = 5, groupDots, groupLines, groupHalo, aGroup;
                const Dom = document.querySelector('#container');
                // Dom.clearColor(0, 0, 0, 0)
                const width = Dom.clientWidth, height = Dom.clientHeight;
                group = new THREE.Group();

                groupDots = new THREE.Group();
                groupLines = new THREE.Group();
                groupHalo = new THREE.Group();
                aGroup = new THREE.Group();
               

               
                const posArr = [{ "x": 0.5738958419746141, "y": -0.44114968930852216, "z": 4.9473255920938985 }, { "x": -0.9326350073394328, "y": 2.8399222968004114, "z": -4.00812091773949 }, { "x": 3.469198597393574, "y": 1.2295167303380952, "z": -3.3842206934036057 }, { "x": -2.4019084876611916, "y": -2.190220428765315, "z": 3.7991801866087123 }, { "x": -2.49363689878109, "y": -4.099696049856375, "z": 1.4050862307450966 }, { "x": -2.3729307780326305, "y": 2.840227787960863, "z": 3.3618901878497454 }, { "x": -2.0636200279017873, "y": 0.7444294629976027, "z": -4.493027615657812 }, { "x": 0.47725894517680106, "y": 2.4327372143508037, "z": -4.34212085796347 }, { "x": -2.4777001955161246, "y": -1.2092952460724242, "z": 4.171163716394502 }, { "x": -0.03915748918627658, "y": -0.008362945319338826, "z": 4.999839672648135 }, { "x": 1.5223738738260317, "y": -1.032865814102439, "z": -4.649254348640267 }, { "x": -0.26640112020426315, "y": -4.314854187280748, "z": 2.5121830716848077 }, { "x": -4.031470206741836, "y": -2.606648761952297, "z": -1.3973654511134501 }, { "x": 0.8544382232162094, "y": 1.5274953155132989, "z": 4.683662390031124 }, { "x": 3.0409624989238546, "y": 1.76433738825175, "z": -3.555230043268055 }, { "x": -4.721251023266457, "y": 1.2354922989397954, "z": -1.0878177947459262 }, { "x": 2.1518961827021106, "y": 3.891904027152385, "z": -2.285262755638206 }, { "x": 0.8501960736517479, "y": -2.851729208821255, "z": -4.018060123480341 }, { "x": 2.5631840141785176, "y": 4.263234820997851, "z": -0.5048926326370041 }, { "x": -0.4580143454812531, "y": -2.6523265200067385, "z": 4.213714144386437 }];

                /**
                 * @desc 3d球面取点
                 * @param <number> radius ...
                 * @param <number> a ...
                 * @param <number> b ...
                 * @return <object> x,y,z
                 */
                function getPos(radius, a, b) {
                        var x = radius * Math.sin(a) * Math.cos(b);
                        var y = radius * Math.sin(a) * Math.sin(b);
                        var z = radius * Math.cos(a);
                        return { x, y, z };
                }

                /**
                 * @desc 随机设置点
                 * @param <Group> group ...
                 * @param <number> radius ...
                 */
                function setRandomDot(group, radius) {
                        const arr = posArr.map(pos => {


                                var dotGeo = new THREE.SphereGeometry(0.1, 0.2, 0.2);
                                var dotMater = new THREE.MeshPhongMaterial({ color: 'tomato' });
                                var dotMesh = new THREE.Mesh(dotGeo, dotMater);

                                var pos = getPos(radius, Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());

                                dotMesh.position.set(pos.x, pos.y, pos.z);
                                group.add(dotMesh);

                        })
                }
                /**
                * @desc 设置柱子
                * @param <Group> group ...
                * @param <number> radius ...
                */
                function setPost(group, radius) {
                        const arr = posArr.map(pos => {     
                                var columnGeom = new THREE.CylinderGeometry(0.02, 0.02, 10, 5);
                                //柱子的颜色
                                var columnMaterial = new THREE.MeshBasicMaterial({
                                        color: "red"
                                });
                                var columnMesh = new THREE.Mesh(columnGeom, columnMaterial);
                                var pos = getPos(radius, Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());
                                var matrix = new THREE.Matrix4();
                                matrix.makeRotationX(Math.PI / 2);
                                matrix.setPosition(new THREE.Vector3(0, 0, -(1) / 2));
                                columnGeom.applyMatrix(matrix);
                                let columnC = columnMesh.clone();
                                columnC.rotation.z = Math.PI / 2;
                                columnMesh.add(columnC);
                                columnMesh.position.set(pos.x, pos.y, pos.z);
                                columnMesh.lookAt(0, 0, 0);
                                group.add(columnMesh);
                        })
                }


                // 添加线条
                function addLines(v0, v3) {
                        // 夹角
                        var angle = (v0.angleTo(v3) * 1.8) / Math.PI / 0.1; // 0 ~ Math.PI
                        var aLen = angle * 0.4,
                                hLen = angle * angle * 12;
                        var p0 = new THREE.Vector3(0, 0, 0);

                        // 开始，结束点
                        // var v0 = groupDots.children[0].position;
                        // var v3 = groupDots.children[1].position;

                        // 法线向量
                        var rayLine = new THREE.Ray(p0, getVCenter(v0.clone(), v3.clone()));

                        // 顶点坐标
                        var vtop = rayLine.at(hLen / rayLine.at(1).distanceTo(p0));

                        // 控制点坐标
                        var v1 = getLenVcetor(v0.clone(), vtop, aLen);
                        var v2 = getLenVcetor(v3.clone(), vtop, aLen);

                        // 绘制贝塞尔曲线
                        var curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3);
                        var geometry = new THREE.Geometry();
                        geometry.vertices = curve.getPoints(50);

                        var material = new THREE.LineBasicMaterial({
                                // color: '#FF0000',
                                vertexColors: true
                        });
                        geometry.colors = curve.getPoints(50).map((item, index) => index > 25 ? new THREE.Color(0xFAE161) : new THREE.Color(0xFF0000))

                        // Create the final object to add to the scene
                        return {
                                curve: curve,
                                lineMesh: new THREE.Line(geometry, material)
                        };
                }

                // 计算v1,v2 的中点
                function getVCenter(v1, v2) {
                        let v = v1.add(v2);
                        return v.divideScalar(2);
                }

                // 计算V1，V2向量固定长度的点
                function getLenVcetor(v1, v2, len) {
                        let v1v2Len = v1.distanceTo(v2);
                        return v1.lerp(v2, len / v1v2Len);
                }


                /**
                * @description 初始化渲染场景
                */
                function initRenderer() {
                        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                        renderer.setClearColor(0xffffff,0.0)
                        renderer.setClearAlpha(0.0);
                        renderer.setPixelRatio(window.devicePixelRatio);
                        renderer.setSize(width, height);
                        const containerDom = document.querySelector('#container');

                        containerDom.appendChild(renderer.domElement);

                }

                /**
                 * @description 初始化相机
                 */
                function initCamera() {
                        camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
                        camera.position.set(0.5, -2, 20)
                        camera.lookAt(0, 3, 0);
                        window.camera = camera;
                }

                /**
                 * @description 初始化场景
                 */
                function initScene() {
                        scene = new THREE.Scene();
                        scene.fog = new THREE.Fog('0x000000', 200, 1000);
                        window.scene = scene;
                        // ground
                        // var ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: (0xffffff,0.0), depthWrite: false,alpha:true }));
                        // ground.rotation.x = - Math.PI / 2;
                        // ground.receiveShadow = true;
                        // scene.add(ground);
                }

                //辅助工具
                function initAuxiliaryTool() {
                        const helper = new THREE.AxesHelper(500);
                        scene.add(helper);

                        // 网格
                        var grid = new THREE.GridHelper(2, 10, 0x000000, 0x000000);
                       
                      
                        scene.add(grid);
                }

                //性能插件
                function initStats() {
                        stats = new Stats();
                        document.body.appendChild(stats.dom);
                }

                /**
                * 初始化用户交互
                **/
                function initControls() {
                        controls = new OrbitControls(camera, renderer.domElement);
                        // 如果使用animate方法时，将此函数删除
                        // controls.addEventListener( 'change', render );
                        // 使动画循环使用时阻尼或自转 意思是否有惯性
                        controls.enableDamping = true;
                        //动态阻尼系数 就是鼠标拖拽旋转灵敏度
                        //controls.dampingFactor = 0.25;
                        //是否可以缩放
                        controls.enableZoom = true;
                        //是否自动旋转
                        controls.autoRotate = true;
                        controls.autoRotateSpeed = 10;
                        //设置相机距离原点的最远距离
                        // controls.minDistance = 2;
                        //设置相机距离原点的最远距离
                        // controls.maxDistance = 1000;
                        //是否开启右键拖拽
                        controls.enablePan = true;
                }

                // 经纬度转地球坐标
                function createPosition(lnglat) {
                        let spherical = new THREE.Spherical;
                        spherical.radius = radius;
                        const lng = lnglat[0];
                        const lat = lnglat[1];
                        const theta = (lng + 90) * (Math.PI / 180);
                        const phi = (90 - lat) * (Math.PI / 180);
                        spherical.phi = phi;             //方位角
                        spherical.theta = theta;         //倾斜角
                        let position = new THREE.Vector3();
                        position.setFromSpherical(spherical);
                        return position;
                }

                /**
                 * @description 初始化光
                 */
                function initLight() {
                        const ambientLight = new THREE.AmbientLight(0xcccccc, 1.1);
                        scene.add(ambientLight);

                        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
                        directionalLight.position.set(1, 0.1, 0).normalize();
                        var directionalLight2 = new THREE.DirectionalLight(0xff2ffff, 0.2);
                        directionalLight2.position.set(1, 0.1, 0.1).normalize();
                        scene.add(directionalLight);
                        scene.add(directionalLight2);

                        var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
                        hemiLight.position.set(0, 1, 0);
                        scene.add(hemiLight);

                        var directionalLight = new THREE.DirectionalLight(0xffffff);
                        directionalLight.position.set(1, 500, -20);
                        directionalLight.castShadow = true;
                        directionalLight.shadow.camera.top = 18;
                        directionalLight.shadow.camera.bottom = - 10;
                        directionalLight.shadow.camera.left = - 52;
                        directionalLight.shadow.camera.right = 12;
                        scene.add(directionalLight);
                }

                /**
                 * @description 初始化添加物体
                 */
                function initObject() {
                        var globeTextureLoader = new THREE.TextureLoader();
                        // var geometry = new THREE.PlaneGeometry(0.7, 0.7);//矩形平面
                        // var texture = THREE.ImageUtils.loadTexture(require('./images/222.jpeg'));//加载纹理贴图
                        // var material = new THREE.MeshLambertMaterial({
                        // 	map: texture,//给纹理属性map赋值
                        // 	transparent: true,
                        // 	side: THREE.DoubleSide//两面可见
                        // });//材质对象
                        // var mesh = new THREE.Mesh(geometry, material);//网格模型对象
                        // mesh.position.set(0.8, 0, 5);
                        // mesh.rotation.set(0,0.2,0);
                        // scene.add(mesh);//网格模型添加到场景中

                        // 光环
                        globeTextureLoader.load(require('./images/halo.png'), function (texture) {
                                var geometry = new THREE.PlaneGeometry(14, 14);//矩形平面
                                var material = new THREE.MeshLambertMaterial({
                                        map: texture,//给纹理属性map赋值
                                        transparent: true,
                                        side: THREE.DoubleSide//两面可见
                                });//材质对象
                                var mesh = new THREE.Mesh(geometry, material);//网格模型对象
                                groupHalo.add(mesh);
                        });

                        // 小地球
                        globeTextureLoader.load(require('./images/smallEarth.png'), function (texture) {
                                var geometry = new THREE.Geometry();//声明一个空几何体对象
                                var p1 = new THREE.Vector3(-7, 0, 0);//顶点1坐标
                                var p2 = new THREE.Vector3(7, 0, 0);//顶点2坐标
                                geometry.vertices.push(p1, p2); //顶点坐标添加到geometry对象
                                var material = new THREE.PointsMaterial({
                                        map: texture,//给纹理属性map赋值
                                        transparent: true,
                                        side: THREE.DoubleSide,//两面可见
                                        size: 1, //点对象像素尺寸
                                });//材质对象
                                var points = new THREE.Points(geometry, material);//点模型对象
                                groupHalo.add(points);//点对象添加到场景中

                        });
                        groupHalo.rotation.set(1.9, 0.5, 1);
                        scene.add(groupHalo)

                        // 地球
                        globeTextureLoader.load(require('./images/aaa.jpeg'), function (texture) {
                                var globeGgeometry = new THREE.SphereGeometry(radius, 100, 100);
                                var globeMaterial = new THREE.MeshStandardMaterial({ map: texture });
                                var globeMesh = new THREE.Mesh(globeGgeometry, globeMaterial);
                                group.rotation.set(0.5, 2.9, 0.1)
                                group.add(globeMesh);
                        });

                        // 小点
                        // setRandomDot(groupDots, radius)
                        setPost(groupDots, radius)
                        scene.add(groupDots);
                        // 曲线
                        var animateDots = [];
                        groupDots.children.forEach(elem => {
                                var line = addLines(groupDots.children[0].position, elem.position);
                                groupLines.add(line.lineMesh);
                                animateDots.push(line.curve.getPoints(100));
                        });
                        scene.add(groupLines);

                        // 添加动画
                        for (let i = 0; i < animateDots.length; i++) {
                                let aGeo = new THREE.SphereGeometry(0.03, 1, 0.03);
                                let aMater = new THREE.MeshPhongMaterial({ color: '#fff' });
                                let aMesh = new THREE.Mesh(aGeo, aMater);
                                aGroup.add(aMesh);
                        }

                        var vIndex = 0;
                        function animateLine() {
                                aGroup.children.forEach((elem, index) => {
                                        let v = animateDots[index][vIndex];
                                        elem.position.set(v.x, v.y, v.z);
                                });
                                vIndex++;
                                if (vIndex > 100) {
                                        vIndex = 0;
                                }
                                setTimeout(animateLine, 20);
                        }
                        scene.add(aGroup);
                        scene.add(group);
                        animateLine();
                        // groupHalo
                }



                // 引入模型
                // function initOrbitControls() {
                //         var gltfLoader = new GLTFLoader();
                //         gltfLoader.load('models/gltf/sun/obj.gltf', function (gltf) {

                //                 var boomBox = gltf.scene;
                //                 boomBox.position.set(0, 0, 0);
                //                 boomBox.scale.set(0.001, 0.001, 0.001);

                //                 boomBox.traverse(function (object) {
                //                         if (object.isMesh) {
                //                                 object.geometry.rotateY(- Math.PI);
                //                                 object.castShadow = true;

                //                         }
                //                 });

                //                 scene.add(boomBox);
                //         });

                // }

                /**
                * 窗口变动
                **/
                // function onWindowResize() {
                //         camera.aspect = innerWidth / innerHeight;
                //         camera.updateProjectionMatrix();
                //         renders();
                //         renderer.setSize(innerWidth, innerHeight);
                // }

                /**
                 * @description 渲染
                 */
                function renders() {
                        renderer.clear();
                        renderer.render(scene, camera);
                        // renderer.setScissorTest(false);
                }

                /**
                * 更新
                **/
                function animate() {
                        window.requestAnimationFrame(() => {
                                if (controls) controls.update();
                                if (stats) stats.update();
                                groupHalo.rotation.z = groupHalo.rotation.z + 0.01;
                                group.rotation.y = group.rotation.y + 0.001;
                                groupDots.rotation.y = groupDots.rotation.y + 0.001;
                                groupLines.rotation.y = groupLines.rotation.y + 0.001;
                                aGroup.rotation.y = aGroup.rotation.y + 0.001;
                                renders();
                                animate();
                        });
                }

                initRenderer()
                initCamera();
                initScene();
                initLight();
                // initAuxiliaryTool();
                initStats();
                initObject();
                // initOrbitControls();
                initControls();
                animate();

        }
        componentDidMount() {
                this.init()
        }
        render() {


                return (
                        <div id="container" style={{ width: '50%', height: '100vh', position: 'relative', overflow: 'hidden', margin: '0 auto'}}></div>

                )
        }
}
export default BugCount
