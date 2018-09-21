import * as THREE from "three";

export default container => {
  const width = window.innerWidth, height = window.innerHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth, window.innerHeight, 0.01, 1000);
  const renderer = new THREE.WebGLRenderer();

  // const container = document.createElement("div");
  // document.body.appendChild(container);
  // container.appendChild(renderer.domElement);

  const initialize = () => {
    container.appendChild(renderer.domElement);

    const obj3ct = makeObject3D();
    // obj3ct.add(generateStars());
    scene.add(obj3ct);

    const stars = generateStars();
    makeObject3D().add(stars);

    camera.position.z = 20;
    renderer.setSize(width, height);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(15, 15, 15);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x333333));

    window.addEventListener("resize", () => onWindowResize(), false);
  }

  const generateStars = () => {
    const pngImage = new THREE.ImageLoader().load("./images/milky_way.png");
    const geometry = new THREE.SphereGeometry(500, 60, 60);
    const material = new THREE.MeshBasicMaterial({ map: pngImage, side: THREE.BackSide });
    
    return new THREE.Mesh(geometry, material);
  }

  const makeObject3D = () => {
    const container = new THREE.Object3D();
    container.add(new THREE.Object3D());
    return container;
  }

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  const liftOff = () => {
    requestAnimationFrame(liftOff);
    renderer.render(scene, camera);
  }

  initialize();
  liftOff();
}


// export default class MilkyWay {
  // constructor(container = document.createElement("div")) {
    // this.container = container;
    // this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera(45, window.innerWidth, window.innerHeight, 0.01, 1000);
    // this.renderer = new THREE.WebGLRenderer();
  // }

  // renderEnvironment = () => {
    // const width = window.innerWidth, height = window.innerHeight;
    
    // this.camera.position.z = 20;
    // this.renderer.setSize(width, height);
    // this.scene.add(new THREE.AmbientLight(0x333333));

    // const light = new THREE.DirectionalLight(0xffffff, 1);

    // light.position.set(15, 15, 15);
    // this.scene.add(light);

    // document.body.appendChild(this.container);
    // this.container.appendChild(this.renderer.domElement);

    // window.addEventListener("resize", () => this.onWindowResize(), false);
  // }

  // initialize = () => {
  //   this.renderEnvironment();

    // const obj3ct = this.makeObject3D();
    // this.scene.add(obj3ct);

  //   this.liftOff();
  // }

  // liftOff = () => {
  //   requestAnimationFrame(this.liftOff);
  //   this.renderer.render(this.scene, this.camera);
  // }

  // onWindowResize = () => {
  //   this.camera.aspect = window.innerWidth / window.innerHeight;
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize(window.innerWidth, window.innerHeight);
  // }

  // makeObject3D = () => {
  //   const container = new THREE.Object3D();
  //   container.add(new THREE.Object3D());
  //   return container;
  // }

  // generateStars = () => {
  //   const pngImage = THREE.ImageLoader().load("./images/star_field.png");
  //   const geometry = new THREE.SphereGeometry(500, 60, 60);
  //   const material = new THREE.MeshBasicMaterial({ map: pngImage, side: THREE.BackSide });
    
  //   return new THREE.Mesh(geometry, material);
  // }

// }