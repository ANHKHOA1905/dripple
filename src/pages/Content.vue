<template>
  <Section :isShowFooter="true">
    <div class="content">
      <p>{{ content }}</p>
    </div>
  </Section>
</template>

<script>
import Section from "../components/Section.vue";

export default {
  name: "Content",

  components: {
    Section,
  },
  data() {
    return {
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, alias
        necessitatibus nostrum aspernatur, ipsa laboriosam ipsum laborum
        eligendi magnam libero repellat eveniet fuga nam voluptatum illum quas
        placeat. Officia, iusto! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Rem, alias necessitatibus nostrum aspernatur, ipsa
        laboriosam ipsum laborum eligendi magnam libero repellat eveniet fuga
        nam voluptatum illum quas placeat. Officia, iusto! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Rem, alias necessitatibus nostrum
        aspernatur, ipsa laboriosam ipsum laborum eligendi magnam libero
        repellat eveniet fuga nam voluptatum illum quas placeat. Officia, iusto!`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";
.content {
  display: none;
  @include mobile {
    display: block;
    color: $txt-content;
    font-size: 2rem;
    padding: 2rem;

    p:first-child::first-letter {
      color: $txt-black;
      float: left;
      font-size: 5rem;
      line-height: 0.65;
      margin: 0.1rem 1rem 0.2rem 0;
      padding-top: 1.3rem;
    }
  }
}
</style>
