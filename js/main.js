let pano1= new PANOLENS.ImagePanorama( 'ddd' );
let pano2 = new PANOLENS.ImagePanorama('images/new/2.jpg');
let pano3 = new PANOLENS.ImagePanorama('images/new/3.jpg');
let pano4 = new PANOLENS.ImagePanorama('images/new/4.jpg');
let pano5 = new PANOLENS.ImagePanorama('images/new/5.jpg');
let pano6 = new PANOLENS.ImagePanorama('images/new/6.jpg');
let pano7 = new PANOLENS.ImagePanorama('images/new/7.jpg');
let pano8 = new PANOLENS.ImagePanorama('images/new/8.jpg');
let pano9 = new PANOLENS.ImagePanorama('images/new/9.jpg');
let pano10 = new PANOLENS.ImagePanorama('images/new/10.jpg');
let pano11 = new PANOLENS.ImagePanorama('images/new/11.jpg');
let pano12 = new PANOLENS.ImagePanorama('images/new/12.jpg');
let pano13 = new PANOLENS.ImagePanorama('images/new/13.jpg');
let pano14 = new PANOLENS.ImagePanorama('images/new/14.jpg');

let imageContainer = document.querySelector('.pan1')


var positions = [
    new THREE.Vector3(4707.81, 509.63, 1587.11),
    new THREE.Vector3(2551.82, -542.51, -4256.95),
    new THREE.Vector3(-1059.98, -21.41, -4884.40),
    new THREE.Vector3(-4378.55, -1569.57, -1819.41),
    new THREE.Vector3(4600.38, -1918.37, -319.30),  
    new THREE.Vector3(-930.38, -1036.56, -4794.63),//5last
    new THREE.Vector3(-4347.46, -1215.53, 2132.12),
    new THREE.Vector3(4809.57, -1099.94, 755.57),
    new THREE.Vector3(4879.32, -786.01, 713.79),
    new THREE.Vector3(1296.37, -647.17, -4774.80),
    new THREE.Vector3(-3721.56, -1501.69, 2969.54),
    new THREE.Vector3(3491.76, -761.51, 3486.13),
    new THREE.Vector3(-4849.01, -912.33, -744.77),
    new THREE.Vector3(-4742.57, -174.19, 1559.14),
    new THREE.Vector3(-2110.61, -2903.31, -3474.29),
    new THREE.Vector3(1418.38, 1742.81, -4460.82),
    new THREE.Vector3(476.18, 1690.27, -4676.77),
    new THREE.Vector3(4963.60, -238.63, 515.69),
    new THREE.Vector3(560.52, -3143.89, -3837.75),
    new THREE.Vector3(894.53, -818.46, 4844.17),
    new THREE.Vector3(-4775.42, -809.12, 1211.73),
    new THREE.Vector3(2812.26, -2204.09, 3486.40),
    new THREE.Vector3(-2616.24, -90.21, -4250.42),
    new THREE.Vector3(2120.70, -1005.05, 4404.71),
    new THREE.Vector3(-219.90, -329.36, 4975.53),
    new THREE.Vector3(4923.28, 79.36, 814.16),
    new THREE.Vector3(1027.15, -261.50, -4882.32),
    new THREE.Vector3(4985.62, -257.87, 81.10),
    new THREE.Vector3(-1284.87, -707.83, -1176.55),
    
    
  ];
// pano1.setLinkingImage("./download.png", 400)
// pano2.setLinkingImage("./download.png", 400)
// pano3.setLinkingImage("./download.png", 400)
// pano4.setLinkingImage("./download.png", 400)
const viewer = new PANOLENS.Viewer({

  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.5,
  controlBar: true,

  controlButtons: ['fullscreen','setting','video'],            // Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
  autoHideControlBar: false,        // Auto hide control bar
  autoHideInfospot: false,            // Auto hide infospots
  horizontalView: false,            // Allow only horizontal camera control
  cameraFov: 70,                // Camera field of view in degree
  // reverseDragging: false,            // Reverse orbit control direction
  // enableReticle: false,            // Enable reticle for mouseless interaction
  // dwellTime: 1500,            // Dwell time for reticle selection in millisecond
  // autoReticleSelect: true,        // Auto select a clickable target after dwellTime
  // viewIndicator: false,            // Adds an angle view indicator in upper left corner
  // indicatorSize: 300,            // Size of View Indicator
  // output: 'console'  
});



pano1.link( pano2, positions[0]);
pano2.link( pano1, positions[1]);
pano2.link(pano3,positions[2]);
pano2.link(pano5,positions[3]);
pano2.link(pano4,positions[4]);
pano4.link(pano2,positions[5]);
pano5.link(pano2,positions[6]);
pano5.link(pano6,positions[7]);
pano6.link(pano5,positions[8]);
pano5.link(pano7,positions[9]);
pano7.link(pano5,positions[10]);
pano7.link(pano8,positions[11]);
pano8.link(pano7,positions[12]);
pano8.link(pano5,positions[13]);
pano3.link(pano2,positions[14]);
pano3.link(pano13,positions[15]);
pano3.link(pano14,positions[16]);
pano14.link(pano13,positions[17]);
pano13.link(pano3,positions[18]);
pano13.link(pano14,positions[19]);
pano13.link(pano11,positions[20]);
pano11.link(pano13,positions[21]);
pano11.link(pano12,positions[22]);
pano12.link(pano11,positions[23]);
pano12.link(pano13,positions[24]);
pano13.link(pano9,positions[25]);
pano9.link(pano13,positions[26]);
pano9.link(pano10,positions[27]);
pano10.link(pano9,positions[28]);




viewer.add( pano1,pano2,pano3,pano4,pano5,pano6,pano7,pano8,pano9,pano10,pano11,pano12,pano13,pano14);


