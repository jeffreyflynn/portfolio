import * as THREE from "three";
// sphere example - http://jsfiddle.net/adiioo7/SF9tX/4/

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
    // scene.background = new THREE.Color("linear-gradient(black, #73C2FB)"); // #3D3D3D

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

  const generateSprite = () => {
    const canvas = document.createElement("canvas");
    canvas.height = 13;
    canvas.width = 13;

    const context = canvas.getContext("2d");
    const gradient = context.createRadialGradient(
      canvas.width / 2, 
      canvas.height / 2, 
      0, 
      canvas.width / 2, 
      canvas.height / 2, 
      canvas.width / 2
    );

    gradient.addColorStop( 0.0, "rgba(255,255,255,1)" );
    gradient.addColorStop( 0.2, "rgba(0,255,255,1)" );

    gradient.addColorStop( 0.4, "transparent" );
    gradient.addColorStop( 0.1, "transparent" );
    
    // gradient.addColorStop( 0.4, "rgba(0,0,64,1)" );
    // gradient.addColorStop( 1.0, "rgba(0,0,0,1)" );

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return canvas;
  }

  const initParticle = (particle, delay) => {
    const randomPosition = () => Math.random() * 4000 - 2000;
    
    particle.position.x = randomPosition();
    particle.position.y = randomPosition();
    particle.position.z = randomPosition() + 650; // Math.random() * 4000 - 1300

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