// Scripts

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

// -----------map script---------------

$(document).ready(function () {
  // execute
  (function () {
    let locations = [
      ["Bhaktapur", 27.671, 85.4298],
      ["Lalitpur", 27.6588, 85.3247],
      ["kathmandu", 27.7172, 85.324],
      ["pulchwok", 27.6782, 85.3169],
      ["baneshwor", 27.6915, 85.342],
      ["jhapa", 26.5455, 87.8942],
      ["ilam", 26.9112, 87.9237],
      ["panchthar", 27.1096, 87.8157],
      ["taplejung", 27.354, 87.668],
      ["morang", 26.6799, 87.4604],
      ["sunsari", 26.6276, 87.1822],
      ["bhojpur", 27.178, 87.0524],
      ["dhankuta", 26.9835, 87.3215],
      ["terhathum", 27.1998, 87.5791],
      ["sankhuwasabha", 27.6174, 87.3016],
      ["saptari", 26.6191, 86.7819],
      ["siraha", 26.6397, 86.1853],
      ["udayapur", 26.8518, 86.6611],
      ["khotang", 27.1838, 86.7819],
      ["okhaldhunga", 27.324, 86.5047],
      ["solukhumbu", 27.6992, 86.7416],
      ["dhanusa", 26.835, 86.0122],
      ["mahottari", 26.6943, 85.823],
      ["sarlahi", 26.9627, 85.5612],
      ["sindhuli", 27.2569, 85.9713],
      ["dolakha", 27.7784, 86.1752],
      ["dhading", 27.9711, 84.8985],
      ["kavre", 27.5285, 85.6435],
      ["nuwakot", 27.9194, 85.1661],
      ["rasuwa", 28.1755, 85.3963],
      ["sindhupalchok", 27.9512, 85.6846],
      ["bara", 27.1341, 85.0649],
      ["parsa", 27.219, 84.8151],
      ["rautahat", 26.9547, 85.3136],
      ["chitwan", 27.5291, 84.3542],
      ["Bhimsengola", 27.6996, 85.3427],
      ["Mahadevsthan", 27.6966, 85.3414],
      ["Anamnagar", 27.6977, 85.3298],
      ["Thapagaon", 27.6984, 85.373],
      ["Minbhavan", 27.6866, 85.3366],
      ["Shankhamul", 27.6853, 85.3317],
      ["Bhuddhanagar", 27.6867, 85.3304],
      ["shantinagar", 27.6915, 85.342],
      ["Hanumansthan", 27.6936, 85.3282],
      ["Singhadurbar", 27.698, 85.3239],
      ["Thapathali", 27.6894, 85.3227],
      ["Jwagal", 27.6858, 85.3233],
      ["Kupondole", 27.6862, 85.3149],
    ];

    // map options
    let options = {
      zoom: 16,
      center: new google.maps.LatLng(27.7172, 85.324), // centered kathmandu
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    // init map
    let map = new google.maps.Map(
      document.getElementById("map_canvas"),
      options
    );

    // set multiple marker
    for (let i = 0; i < locations.length; i++) {
      // init markers
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        title: locations[i][0],
      });
    }
  })();
});
