import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "./plugins/axios";
// import AuthPlugin from "./plugins/auth";

Vue.config.productionTip = false;

Vue.use(Axios);

// Vue.use(AuthPlugin, {
//   domain: process.env.VUE_APP_AUTH_DOMAIN,
//   clientId: process.env.VUE_APP_AUTH_CLIENT_ID,
//   onRedirectCallback: appState => {
//     router.push(
//       appState && appState.targetUrl
//         ? appState.targetUrl
//         : window.location.pathname
//     );
//   }
// });

import store from "@/state/Store";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
