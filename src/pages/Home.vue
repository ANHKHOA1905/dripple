<template>
  <Section :isShowFooter="true" :banner="banner" @click-banner="onClickBanner">
    <div class="home">
      <div class="home-blur"></div>
      <div class="home__title">
        <div
          class="home__title__item"
          v-for="(title, index) in titles"
          :key="index"
        >
          {{ title }}
        </div>

        <router-link to="/content" class="home__title__btn">TRAVEL</router-link>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "../components/Section.vue";
export default {
  name: "Home",
  components: { Section },
  data() {
    return {
      titles: ["MARK MANSON", "THE DART", "SIDE OF", "THE", "DIGITAL", "NOMAD"],
      banner: [
        {
          id: 1,
          url: "",
          isActive: true,
        },
        {
          id: 2,
          url: "",
          isActive: false,
        },
        {
          id: 3,
          url: "",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    onClickBanner(data) {
      const index = this.banner.findIndex((item) => item.id === data);
      this.banner.forEach((item) => (item.isActive = false));
      this.banner[index].isActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";
.home {
  display: none;
  @include mobile {
    display: block;
    background-image: url("../assets/images/header.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: -400px;
    width: 100%;
    height: 100%;
    position: relative;
  }
  &-blur {
    @include mobile {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(0.5px); // This be the blur
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }
  &__title {
    @include mobile {
      font-size: 3rem;
      color: $txt-white;
      font-weight: 500;
      position: absolute;
      line-height: 3.3rem;
      top: 45%;
      left: 5%;
    }
    &__item:first-child {
      @include mobile {
        font-size: 1rem;
      }
    }
    &__btn {
      @include mobile {
        display: block;
        font-size: 1rem;
        font-weight: 300;
        color: black;
        text-align: center;
        background-color: $main-color;
        width: 6.5rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>
