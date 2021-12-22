<template>
  <div class="section">
    <div class="section__header"><slot></slot></div>
    <div class="section__footer" v-show="isShowFooter">
      <router-link to="/" class="section__footer__close">CLOSE</router-link>
      <div class="section__footer__dot">
        <span
          :class="[
            'section__footer__dot__item',
            item.isActive ? ' active' : '',
          ]"
          @click="handleClick(item)"
          v-for="item in banner"
          :key="item.id"
        ></span>
      </div>
      <router-link to="/comment" class="section__footer__comment">
        <img src="../assets/images/icon-comment.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    isShowFooter: {
      type: Boolean,
      require: true,
    },
    banner: {
      type: Array,
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("click-banner", item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

.section {
  @include mobile {
    width: 100vw;
    height: 100vh;
  }

  &__header {
    @include mobile {
      height: 93vh;
    }
  }

  &__footer {
    @include mobile {
      width: 100%;
      background-color: $main-color;
      height: 7vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: fixed;
      border-top: solid 0.5px;

      bottom: 0;
      z-index: 99;
    }

    &__close {
      font-size: 1.3rem;
    }
    &__dot {
      &__item {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: black;
        opacity: 0.2;
        margin: 0.3rem;
      }
    }
    &__comment {
      img {
        width: 1.7rem;
        height: 1.7rem;
      }
    }
  }

  .active {
    opacity: 1;
  }
}
</style>
