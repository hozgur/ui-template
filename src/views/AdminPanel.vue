<template>
  <m-card>
    <div class="side-bar">
      <div class="side-bar-header">
        <p>Title</p>
      </div>
    </div>
  </m-card>
</template>

<script>
export default {
  name: "SamplePanel",
  data() {
    return {};
  },
  methods: {
    OnEnter(e) {
      console.log(e);
    },
    toggleSideBar() {
      this.$refs.sideBar.toggle();
    },
  },
};
</script>

<style scoped>
.side-bar {
  background-color: #fff;
  z-index: 1000;
  width: 260px;
}
.side-bar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.side-bar-header > a {
  text-transform: uppercase;
  font-weight: bold;
  flex-grow: 1;
}
</style>