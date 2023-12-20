<script lang="ts">
  import SingelProject from "./SingelProject.svelte";
  import Divider from "./Divider.svelte";
</script>

<section id="projects-section" class="my-12">
  <p class="text-center text-3xl font-bold my-8">
    <span> Projects </span>
    <span class="glowing" style="--intensity: 4px; --display-color: pink;">
      🚀
    </span>
  </p>
  <SingelProject
    heading="MensiMates"
    descriptions={[
      "MensiMates is an application that helps you stay up-to-date with the meals in your campus cafeteria. Never miss a meal again, and enjoy a variety of options at your fingertips.",
      "Connect with other students by rating the dish you just ate. ⭐",
    ]}
    projectLink="https://projectmensimates.whosfritz.de"
    imageURL="images/design-MensiMates.png"
    displayColor="#ff7f50"
  ></SingelProject>
  <Divider />
  <SingelProject
    heading="Geo Mapping Ivan"
    descriptions={[
      "Geo Mapping Ivan is a micro service written in go-lang to process data from the /var/log/auth.log file under linux.",
      "With the metrics sent to prometheus you are able to display the data in Grafana. My Custom Grafana Dashboard shows the relevant information about Countries, tried usernames and Geolocation.",
    ]}
    projectLink="https://github.com/whosFritz/geo-mapping-ivan"
    imageURL="images/LOGO-GEO-MAPPING-IVAN.png"
    displayColor="#18b76c"
  ></SingelProject>
  <Divider />
  <SingelProject
    heading="whosFritz.de"
    descriptions={[
      "This website is my personal portfolio. It is built with SvelteKit, TailwindCSS and the component library daisyui.",
      "The former version of this website was built using HTML, JavaScript and Bootstrap5.",
      "It is hosted on a virtual server and I am planning to add a personal blog to this website.",
    ]}
    projectLink="https://github.com/whosFritz/Portfolio-SvelteKit"
    imageURL="favicon-fritz.png"
    displayColor="#f1d766"
  ></SingelProject>
  <Divider />
  <SingelProject
    heading="Permission Tracker"
    descriptions={[
      "PermissionTracker is a web application developed to streamline and secure the process of managing user access rights in an organization.",
      "The application allows users to request specific access permissions, such as accessing certain resources or functionalities. These requests are then routed per mail to the respective approvers for review and approval. 🔒",
    ]}
    projectLink="https://github.com/whosFritz/PermissionTracker"
    imageURL="images/permissiontracker_project.png"
    displayColor="#3dd5f0"
  ></SingelProject>
  <Divider />

  <SingelProject
    heading="3D BA-Leipzig"
    descriptions={[
      "This website is gonna be a web hub for the BA-Leipzig facility.",
      "If scrolling through the site, the user will be able to visit, see and explore specific parts of the Studienakadamie by hovering over it.",
      "Currently working on the Blender 3D Model of the Studienakademie.",
    ]}
    projectLink="https://github.com/whosFritz/3D-BA-Leipzig"
    imageURL="images/3D-BA-Leipzig.png"
    displayColor="#e879f9"
  ></SingelProject>
</section>
