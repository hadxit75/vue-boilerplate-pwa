<template>
  <navbar v-model="showNavbar">
    <div class="navbar-wrapper">
      <div class="navbar-minimize">

        <a-button  @click="minimizeSidebar" class="topmenu" style="margin-bottom:5px" v-if="pc" >
    
          <a-icon type="menu-unfold" class="visible-on-sidebar-regular" />
          <a-icon type="menu-fold" class="visible-on-sidebar-mini" />
     
        </a-button>


        <!-- <button id="minimizeSidebar"  @click="minimizeSidebar">
          <i class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"></i>


          <i class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"></i>
        </button> -->
      </div>
      <div class="navbar-toggle">
        <navbar-toggle-button @click.native="toggleSidebar">

        </navbar-toggle-button>
      </div>
      <!-- <a class="navbar-brand" href="#pablo"><img src="static/img/beta.png" style="width:20px"/></a> -->
    </div>

    <template slot="navbar-menu">

      <ul class="navbar-nav">


        <li>
        <a-dropdown>
            <span>
              <a-badge dot><a-avatar shape="square" icon="user" /></a-badge>
            </span>
            <a-menu slot="overlay" @click="onClick">
                     <a-menu-item key="1">로그아웃({{this.$store.state.email}})</a-menu-item>
            </a-menu>
          </a-dropdown>
              
        </li>


      </ul>
    </template>
  </navbar>
</template>
<script>
import { Navbar, NavbarToggleButton } from "src/components/UIComponents";
import firebase from "firebase";
export default {
  components: {
    Navbar,
    NavbarToggleButton
  },
  mounted() {
    this.minimizeSidebar();
    this.winWidth();
  },
  data() {
    return {
      pc: true,
      activeNotifications: false,
      showNavbar: false
    };
  },
  methods: {
    onClick({ key }) {
      console.log(key);
      if (key == "1") {
        firebase
          .auth()
          .signOut()
          .then(() => {
            location.reload();
          });
      }
    },
    winWidth: function() {
      setInterval(() => {
        var w = window.innerWidth;
        if (w < 768) {
          this.pc = false;
          this.dialogwidth = "100%";
        } else if (w < 960) {
          this.dialogwidth = "100%";
          this.pc = false;
        } else if (w < 1200) {
          this.dialogwidth = "50%";
          this.pc = true;
        } else {
          this.dialogwidth = "50%";
          this.pc = true;
        }
      }, 100);
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    minimizeSidebar() {
      this.$sidebar.toggleMinimize();
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    }
  }
};
</script>
<style scoped>
.navbar-wrapper .ant-btn {
  border: 0px solid transparent !important;
}
.topmenu i {
  font-size: 20px;
}
</style>
