<script>
import { ref, onMounted } from "vue";

export default {
  data() {
    return {
      countries: {},
    };
  },
  methods: {
    getData() {
      fetch("https://restcountries.com/v2/all").then((response) =>
        response.json().then((data) => (this.countries = data))
      );
    },
  },
  mounted() {
    this.getData();
  },
};
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
    <div class="land">
      <div v-for="country in countries" class="card">
        <img :src="country.flags.png" />
        <div class="info">
          <h2 class="h2">{{ country.name }}</h2>
          <div class="pop">
            <p class="bold">Population:</p>
            <p>{{ country.population }}</p>
          </div>
          <div class="pop">
            <p class="bold">Region:</p>
            <p>{{ country.region }}</p>
          </div>
          <div class="pop">
            <p class="bold">Capital:</p>
            <p>{{ country.capital }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.land {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5.3%;
}

.card {
  background: var(--color2);
  border-radius: 7px;
  height: fit-content;
  padding-bottom: 2%;
  margin-bottom: 1%;
  width: 20%;
}

.card img {
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

.pop p,
h2 {
  margin: 0;
  padding: 0;
  padding-left: 5%;
}

.pop p {
  font-size: 0.9rem;
}

.card h2 {
  font-size: 1.2rem;
}

.pop {
  display: flex;
}
.bold {
  font-weight: 500;
}
.home-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
