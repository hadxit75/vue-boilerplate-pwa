/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    registrationOptions: {
      scope: process.env.BASE_URL
    },
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
      $.confirm({
        theme: "supervan", // 'material', 'bootstrap'
        title: "New Version Released!",
        content: "업데이트를 진행하시겠습니까?",
        buttons: {
          confirm: function() {
            location.reload(true);
          },
          cancel: function() {
            $.alert("Canceled!");
          }
        }
      });
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
