<template>
  <li class="nav-item">
    <a class="nav-link" :href="href" :id="id">
        <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: "NavButton",
  props: ["id","href"],
};
</script>