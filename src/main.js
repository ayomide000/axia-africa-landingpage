import { createApp } from "vue";
import "./style.css";
// import { Vue3Icon } from "vue3-icon";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import { faCircleChevronDown } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faArrowRightLong, faCircleChevronDown);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
