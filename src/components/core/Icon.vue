<template>
  <i class="material-icons-outlined">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: "Icon",  
}
</script>

<style scoped>
/* @import "https://fonts.googleapis.com/icon?family=Material+Icons"; */

/* for outlined icons we can use this */
@import "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;  
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
</style>