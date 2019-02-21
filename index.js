// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 6

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// basic cube
var geometry = new THREE.SphereGeometry( 1, 32, 32)
var material = new THREE.MeshStandardMaterial( { color: 0x2eadf1, flatShading: true, metalness: 0, roughness: 100 })
var sphere = new THREE.Mesh ( geometry, material )
scene.add( sphere )

// wireframe cube
var geometry = new THREE.SphereGeometry( 6, 30, 30)
var material = new THREE.MeshBasicMaterial( {
	color: "#442ef2", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

// ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

// Ring
var geometry = new THREE.RingGeometry( 1.1, 1.4, 100 );
var material = new THREE.MeshStandardMaterial( { color: 0xe9ff00, side: THREE.DoubleSide, flatShading: true, metalness: 0, roughness: 1 } );
var ring = new THREE.Mesh( geometry, material );
scene.add( ring );

var geometry = new THREE.RingGeometry( 1.5, 1.8, 100 );
var material = new THREE.MeshStandardMaterial( { color: 0x00ff37, side: THREE.DoubleSide, flatShading: true, metalness: 0, roughness: 1 } );
var ring2 = new THREE.Mesh( geometry, material );
scene.add( ring2 );


var geometry = new THREE.RingGeometry( 1.9, 2.2, 100 );
var material = new THREE.MeshStandardMaterial( { color: 0xff0000, side: THREE.DoubleSide, flatShading: true, metalness: 0, roughness: 1 } );
var ring3 = new THREE.Mesh( geometry, material );
scene.add( ring3 );

var geometry = new THREE.RingGeometry( 2.3, 2.6, 100 );
var material = new THREE.MeshStandardMaterial( { color: 0xff00d8, side: THREE.DoubleSide, flatShading: true, metalness: 0, roughness: 1 } );
var ring4 = new THREE.Mesh( geometry, material );
scene.add( ring4 );

function animate() {
	requestAnimationFrame( animate )
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  wireframeCube.rotation.y -= 0.01;
  ring.rotation.x += 0.05;
  ring2.rotation.y += 0.04;
  ring3.rotation.x -= 0.03;
  ring4.rotation.y -= 0.02;
	renderer.render( scene, camera )
}
animate()
