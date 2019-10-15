import Vue from "vue";
import './pollyfills';
import VueRouter from "vue-router";
import Vuex from "vuex";
import Promise from 'promise-polyfill';
import VueRouterPrefetch from "vue-router-prefetch";
import "@babel/polyfill";
import VueNotify from "vue-notifyjs";
import VeeValidate from "vee-validate";
import ko from 'vee-validate/dist/locale/ko.js'
import lang from "element-ui/lib/locale/lang/ko";
import locale from "element-ui/lib/locale";
import App from "./App.vue";
import VueTheMask from "vue-the-mask";
import axios from "axios";


// Plugins

import initProgress from "./progressbar";
import VueYouTubeEmbed from "vue-youtube-embed";
// router setup
import routes from "./routes/routes";
import firebase from "firebase";
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import VueScheduler from "v-calendar-scheduler";
import VueNavigationBar from "vue-navigation-bar";
import "ant-design-vue/dist/antd.css";



import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);


import "v-calendar-scheduler/lib/main.css";

// library imports
import "./assets/sass/paper-dashboard.scss";
import "./assets/sass/demo.scss";

import sidebarLinks from "./sidebarLinks";
import "./registerServiceWorker";
import {
  Carousel,
  CarouselItem,
  Dialog,
  Loading,
  MessageBox,
  Notification,
  Scrollbar,
  Table,
  TableColumn
} from "element-ui";

import {
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  // Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  message,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Steps,
  Switch,
  // Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  // Mention,
  Upload,
  // version,
  Drawer,
  Skeleton,
  Comment,
  ConfigProvider
} from "ant-design-vue";

Vue.prototype.$message = message;
// Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.use(Affix);
Vue.use(Anchor);
Vue.use(AutoComplete);
Vue.use(Alert);
Vue.use(Avatar);
Vue.use(BackTop);
Vue.use(Badge);
Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Drawer);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(LocaleProvider);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Pagination);
Vue.use(Popconfirm);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Rate);
Vue.use(Row);
Vue.use(Select);
Vue.use(Slider);
Vue.use(Spin);
Vue.use(Steps);
Vue.use(Switch);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Transfer);
Vue.use(Tree);
Vue.use(TreeSelect);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(TimePicker);
Vue.use(Timeline);
Vue.use(Tooltip);
Vue.use(Upload);
Vue.use(Skeleton);
Vue.use(Comment);
Vue.use(ConfigProvider);
Vue.use(Divider);

let app;
// Initialize Firebase
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueYouTubeEmbed);

Vue.use(Vuex);
Vue.use(Loading.directive);

Vue.use(VueTheMask);
const config = {
  locale: 'ko',
  dictionary: {
    ko
  }
}

Vue.use(VeeValidate, config)



Vue.component("vue-navigation-bar", VueNavigationBar);
Vue.component(Scrollbar.name, Scrollbar);
// Vue.use(FileSaver);
// Vue.use(XLSX);
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Methods"] =
//   "GET,PUT,POST,DELETE,OPTIONS";
// axios.defaults.headers.post["Access-Control-Allow-Headers"] =
//   "Origin, X-Requested-With, Content-Type, Accept";

// axios.defaults.withCredentials = false;
// axios.defaults.proxy = {
//   host: "http://localhost",
//   port: 8080
// };

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;

Vue.prototype.$c = 0;
Vue.prototype.$r = 0;
Vue.prototype.$http = axios;
// import 'element-ui/lib/theme-chalk/index.css';
// plugin setup
Vue.use(VueRouter);
Vue.use(VueRouterPrefetch);
Vue.use(VueNotify);
locale.use(lang);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active",
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

initProgress(router);

const store = new Vuex.Store({
  state: {
    email: "",
    key: "",
    uid: "",
    name: "",
    phone: "",
  },
  getters: {
    getUser: state => {
      return state;
    }
  },
  mutations: {
    setter(state, v) {
      state.email = v.email;
      state.key = v.key;
      state.uid = v.uid;
      state.name = v.name;
      state.phone = v.phone;
    }
  }
});

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function getCurrentDuedate(_timestamp) {
  var duedate = new Date(_timestamp);
  var today = new Date();
  var remainingDays = dateDiffInDays(today, duedate);
  return remainingDays;
}

function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


if (!app) {
  app = new Vue({
    el: "#app",
    store,
    render: h => h(App),
    router
  });
}

// firebase.auth().onAuthStateChanged(function (user) {
//   if (!app) {
//     app = new Vue({
//       el: "#app",
//       store,
//       render: h => h(App),
//       router
//     });
//   }

//   var _a = { email: "" };


//   var user = firebase.auth().currentUser;
//   var self = this;
//   if (user) {

//     var sref = firebase.database().ref("user/");

//     sref
//       .orderByChild("email")
//       .equalTo(user.email)
//       .once("value", function (sdata) {
//         sdata.forEach(function (sdatas) {
//           _a.email = sdatas.val().email;
//           _a.key = sdatas.key;
//           _a.uid = user.uid;
//           _a.name = sdatas.val().userName;
//           _a.phone = sdatas.val().userPhone;
//         });

//         store.commit("setter", _a);
//       })
//       .catch(function (error) {
//         console.log("Error getting documents: ", error);
//       });
//   }
// });

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (
    requiresAuth &&
    !currentUser &&
    to.path != "/login" &&
    from.path != "/login"
  ) {
    // console.log("8");
    next("login");
  } else if (requiresAuth && !currentUser && to.path != "/login") {
    // console.log("7");
    next("/");
  } else if (requiresAuth && !currentUser && to.path == "/login") {
    // console.log("5");
    next();
  } else if (requiresAuth && !currentUser) {
    // console.log("1");
    next("/login");
  } else if (requiresAuth && currentUser) {
    // console.log("4");
    next();
  } else if (!requiresAuth && !currentUser) {
    //
    // console.log("2");
    next();
  } else if (!requiresAuth && currentUser && to.path == "/login") {
    // console.log("3");
    next("/");
  } else if (!requiresAuth && currentUser && to.path === "/") next();
  else next();

  // }
});
