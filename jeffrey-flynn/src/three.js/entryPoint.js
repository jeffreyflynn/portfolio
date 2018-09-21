import * as THREE from "three";
import TweenMax from "gsap";

// let scene, camera, renderer, particle;

// const initialize = canvas => {
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color("black");

//   camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 10000);

//   const texture = new THREE.CanvasTexture(generateSprite());
//   const material = new THREE.SpriteMaterial({
//     map: texture,
//     blending: THREE.AdditiveBlending
//   });

//   for (let i = 0; i < 1000; i++) {
//     particle = new THREE.Sprite(material);
//     deployParticle(particle);
//     scene.add(particle);
//   }

//   renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
//   renderer.setPixelRatio(window.devicePixelRatio || 1);
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// const generateSprite = () => {
//   const canvas = document.createElement("canvas");

//   canvas.height = 13;
//   canvas.width = 13;

//   const context = canvas.getContext("2d"); // returns an object that provides methods/properties for drawing on the canvas
//   // context.arc(3, 3, 3, 0, 2*Math.PI);
//   // context.fillStyle = "white";
//   // context.fill();

//   const gradient = context.createRadialGradient(
//     canvas.width / 2, 
//     canvas.height / 2, 
//     0, 
//     canvas.width / 2, 
//     canvas.height / 2, 
//     canvas.width / 2
//   );

//   gradient.addColorStop( 0.0, "rgba(255,255,255,1)" );
//   gradient.addColorStop( 0.2, "rgba(0,255,255,1)" );
//   gradient.addColorStop( 0.4, "rgba(0,0,64,1)" );
//   gradient.addColorStop( 1.0, "rgba(0,0,0,1)" );

//   context.fillStyle = gradient;
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   return canvas;
// }

// const deployParticle = particle => {
//   particle.position.x = Math.random() * 4000; // + 4000;
//   particle.position.y = Math.random() * 4000; // + 4000;
//   particle.position.z = Math.random() * 4000; // + 4000;

//   particle.scale.x = particle.scale.y = Math.random() * 13 + 13;
// }

// const animate = () => {
//   requestAnimationFrame(animate);
//   render();
// }

// const render = () => {
//   renderer.render(scene, camera);
// }


// export default container => {

//   const canvas = document.createElement("canvas");
//   container.appendChild(canvas);

//   initialize(canvas);
//   animate();

// }


export default container => {
  let canvas, camera, scene, renderer, particle;
  let mouseX = 0, mouseY = 0;

  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  canvas = document.createElement("canvas");
  container.appendChild(canvas);

  const init = () => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, aspectRatio, 50, 5000);
    camera.position.z = 250;

    scene = new THREE.Scene();
    scene.background = new THREE.Color("black"); // #3D3D3D

    const material = new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(generateSprite()),
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < 1500; i++) {
      particle = new THREE.Sprite(material);
      initParticle(particle, i*10);
      scene.add(particle);
    }

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth*0.985, window.innerHeight);

    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("touchstart", onTouch, false);
    document.addEventListener("touchmove", onTouch, false);
    document.addEventListener("click", init, false);

    window.addEventListener("resize", onWindowResize, false);
  }

  const onWindowResize = () => {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth*0.985 / window.innerHeight);
    init();
  }

  // const renderBackground = () => {
  //   const bgScene = new THREE.Scene();
  //   const bgCamera = new THREE.Camera();

  //   const stars = generateStars();

  //   bgScene.add(bgCamera);
  //   bgScene.add(stars);

  //   renderer.render(bgScene, bgCamera);
  // }

  // const generateStars = () => {
  //   const pngImage = new THREE.ImageLoader().load("./images/star_field.png");
  //   const geometry = new THREE.SphereGeometry(500, 60, 60);
  //   const material = new THREE.MeshBasicMaterial({ map: pngImage, side: THREE.BackSide });
    
  //   return new THREE.Mesh(geometry, material);
  // }

  const generateSprite = () => {
    const height_width = Math.random() * (13 - 10) + 10;
    const halfHW = height_width / 2;

    const canvas = document.createElement("canvas");
    canvas.height = canvas.width = height_width;

    const context = canvas.getContext("2d");
    const gradient = context.createRadialGradient(halfHW, halfHW, 0, halfHW, halfHW, halfHW);    

    gradient.addColorStop(0.0, "rgba(255, 255, 255, 1)"); // white
    gradient.addColorStop(0.2, "rgba(115, 194, 251, 1)" ); // same blue as title orrr rgba(200, 255, 255, 1) for more of a stary feel
    gradient.addColorStop(1.0, "transparent");

    context.fillStyle = gradient;
    context.fillRect(0, 0, height_width, height_width);

    return canvas;
  }

  const initParticle = (particle, delay) => {
    const randomPosition = () => Math.random() * 4000 - 2000;
    
    particle.position.x = randomPosition();
    particle.position.y = randomPosition();
    particle.position.z = randomPosition(); // + 650; // Math.random() * 4000 - 1300

    particle.scale.x = particle.scale.y = Math.random() * 13 + 13;

    // TweenMax.to(particle.position, 5, { z: randomPosition(), delay: delay/100, onComplete: () => initParticle(particle) });
  }

  const onMouseMove = event => {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  const onTouch = event => {
    if (event.touches.length === 1) {
      event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  }

  const render = () => {
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  init();
  animate();
}

/*
const sceneManager = new SceneManager(canvas);
let canvasHalfWidth, canvasHalfHeight;

bindEventListeners();
render();

const createCanvas = (document, container) => {
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);
  return canvas;
}

const bindEventListeners = () => {
  window.onresize = resizeCanvas;
  window.onmousemove = mouseMove;
  resizeCanvas();
}

const resizeCanvas = () => {
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  canvasHalfWidth = Math.round(canvas.offsetWidth / 2);
  canvasHalfHeight = Math.round(canvas.offsetHeight / 2);

  sceneManager.onWindowResize();
}

const mouseMove = ({screenX, screenY}) => {
  sceneManager.onMouseMove(screenX-canvasHalfWidth, screenY-canvasHalfHeight);
}

const render = time => {
  requestAnimationFrame(time);
  sceneManager.update();
}
*/