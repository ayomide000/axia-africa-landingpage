import { createApp } from "vue";
import "./style.css";
// import VueRouter from 'vue-router'
import router from "./router";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faArrowRightLong,
  faCircleChevronDown,
  faQuoteLeft,
  faBars,
  faXmark,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faClock } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faArrowRightLong,
  faCircleChevronDown,
  faQuoteLeft,
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faBars,
  faXmark,
  faClock,
  faCalendarDays,
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
