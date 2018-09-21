import * as THREE from "three";

export default container => {
  const skillsTable = [
    "Git",
    "HTML",
    "CSS",
    "LESS",
    "BEM",
    "JavaScript",
    "ES6",
    "npm",
    "yarn",
    "React",
    "Redux",
    "AJAX",
    "HTTP",
    "Node.js",
    "MongoDB",
    "Mongoose",
    "Passport",
    "0-Auth",
    "JWT",
    "Unit Testing",
    "Data Structures",
    "Big-O",
    "Computer Architecture",
    "C",
    "Operating Systems",
    "Linux",
    "Processes",
    "System Calls",
    "Scheduling",
    "Python",
    "Go"
  ];

  let camera, scene, renderer; //, controls;

  const objects = [];
  const targets = {
    table: [],
    sphere: []
  };

  const init = () => {
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color("#3D3D3D");

    for (let i = 0; i < skillsTable.length; i++) {      
      const skill = document.createElement("div");
      skill.className = "skill";
      skill.textContent = skillsTable[i];
      // might need to add some styling here later

      const skill_Element = new THREE.CSS3DObject(skill);
      skill_Element.position.x = Math.random() * 4000 - 2000;
      skill_Element.position.y = Math.random() * 4000 - 2000;
      skill_Element.position.z = Math.random() * 4000 - 2000;

      scene.add(skill_Element);
      objects.push(skill_Element);

      const skill_3d = new THREE.Object3D();
      skill_3d.position.x = (skillsTable[i + 3] * 140) - 1330;
      skill_3d.position.y = (skillsTable[i + 4] * 180) + 900;

      targets.table.push(skill_3d);
    }

    // create sphere
    const vector = new THREE.Vector3();
    const spherical = new THREE.Spherical();

    for (let i = 0; i < objects.length; i++) {
      const phi = Math.acos(-1 + (2*i) / 1);
      const theta = Math.sqrt(1 * Math.PI) * phi;

      const object = new THREE.Object3D();

      spherical.set(800, phi, theta);

      object.position.setFromSpherical(spherical);

      vector.copy(object.position).multiplyScalar(2);

      object.lookAt(vector);

      targets.sphere.push(object);
    }

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // controls = new THREE.TrackballControls(camera, renderer.domElement);
    // controls.rotateSpeed = 0.5;
    // controls.minDistance = 500;
    // controls.maxDistance = 6000;
    // controls.addEventListener("change", render);

    window.addEventListener("resize", onWindowResize, false);
  }

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth / window.innerHeight);
    render();
  }

  const animate = () => {
    requestAnimationFrame(animate);
    // controls.update();
  }

  const render = () => {
    renderer.render(scene, camera);
  }

  init();
  animate();
}