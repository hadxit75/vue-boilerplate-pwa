<template>
  <div style="text-align: center;top: 50%;position: absolute;width: 100%;">
    <h1>안녕하세요. <br/>인프런 수강자를 위한 보일러 플레이트 입니다.</h1>
  </div>  
</template>

<script>
export default {
  components: {},
  mounted() {
    this.winWidth();
    this.dialogVisible = this.isIE();
  },
  methods: {
    winWidth: function() {
      setInterval(() => {
        var w = window.innerWidth;
        if (w < 768) {
          this.append = "mobile";
        } else {
          this.append = "";
        }
      }, 100);
    },
    isIE() {
      var ua = navigator.userAgent;
      /* MSIE used to detect old browsers and Trident used to newer ones*/
      var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

      return is_ie;
    }
  },
  data() {
    return {
      dialogVisible: false,
      append: ""
    };
  }
};
</script>

<style scoped>
</style>