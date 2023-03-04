<script setup lang="ts">
import { ref, onMounted } from "vue";
</script>

<template>
  <div class="home-wrapper">
    <div class="util">
      <div class="searchbar">
        <input type="text" />
      </div>
      <div class="filter">
        <select name="regions" id="regions">
          <option value="none">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="eu">Europe</option>
          <option value="oce">Oceania</option>
        </select>
      </div>
    </div>
    <div class="land"></div>
  </div>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.util {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding-bottom: 2%;
  padding-top: 2%;
  width: 80%;
}
</style>
