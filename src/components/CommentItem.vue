<template>
  <div class="post">
    <div class="post__avatar" :style="`background-image:url(${avatar})`"></div>
    <div class="post__content">
      <div class="post__content__info">
        <span>{{ name }}</span>
        <span class="dot"></span>
        <span style="color: grey">{{ timeCreated }}</span>
      </div>
      <div class="post__content__main">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    avatar: String,
    name: String,
    timeCreated: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";
.post {
  @include mobile {
    display: flex;
    margin-top: 1rem;
  }
  &__avatar {
    @include mobile {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-size: cover;

      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      margin: 1.5rem 1rem;
    }
  }
  &__content {
    @include mobile {
      width: 70%;
      margin: 1.5rem 0.5rem;
    }
    &__info {
      @include mobile {
        font-size: 0.8rem;
        font-weight: bold;
      }
    }
    &__main {
      @include mobile {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        color: $txt-content;
      }
    }
  }
  .dot {
    width: 3px;
    height: 3px;
    display: inline-block;
    margin: 0 1rem;
    background-color: black;
    opacity: 0.6;
  }
}
</style>
