<script setup lang="ts"></script>

<template>
  <div class="header-wrapper">
    <div class="h1-wrapper"><h1>Where in the world?</h1></div>

    <div class="slider-wrapper">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <p>Dark mode?</p>
    </div>
  </div>
</template>

<style scoped>
.header-wrapper {
  background-color: var(--color1);
  height: fit-content;
}

.slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
}
.header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
