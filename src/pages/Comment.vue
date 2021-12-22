<template>
  <Section :isShowFooter="false">
    <header class="header">
      <h4 class="header__title">COMMENTS ({{ commentList.length }})</h4>
      <router-link to="/" class="header__close">&#x2715;</router-link>
    </header>
    <section class="post-list">
      <CommentItem
        v-for="(item, index) in commentList"
        :key="index"
        :name="item.name"
        :content="item.content"
        :avatar="item.avatar"
        :timeCreated="item.timeCreated"
      />
    </section>
  </Section>
</template>

<script>
import Section from "@/components/Section.vue";
import CommentItem from "../components/CommentItem.vue";

export default {
  name: "Comment",
  data() {
    return {
      commentList: [
        {
          name: "ANC",
          avatar:
            "https://images.unsplash.com/photo-1640096496288-5b348fb76bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, alias
        necessitatibus nostrum aspernatur, ipsa laboriosam ipsum laborum
        eligendi magnam libero repellat eveniet fuga nam voluptatum illum quas
        placeat. Officia, iusto! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Rem, alias necessitatibus nostrum aspernatur, ipsa
        laboriosam ipsum laborum eligendi magnam libero repellat eveniet fuga
        nam voluptatum illum quas placeat. Officia, iusto! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Rem, alias necessitatibus nostrum
        aspernatur, ipsa laboriosam ipsum laborum eligendi magnam libero`,
          timeCreated: "19-06-2021",
        },
        {
          name: "ANC",
          avatar: `https://images.unsplash.com/photo-1614853389929-8515eb4bb010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, alias
        necessitatibus nostrum aspernatur, ipsa laboriosam ipsum laborum
        eligendi magnam libero repellat eveniet fuga nam voluptatum illum quas
        placeat. Officia, iusto! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Rem, alias necessitatibus nostrum aspernatur, ipsa
        laboriosam ipsum laborum eligendi magnam libero repellat eveniet fuga
        nam voluptatum illum quas placeat. Officia, iusto! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Rem, alias necessitatibus nostrum
        aspernatur, ipsa laboriosam ipsum laborum eligendi magnam libero`,
          timeCreated: "10-09-2021",
        },
        {
          name: "FSDF",
          avatar: `https://images.unsplash.com/photo-1640085345163-8f1de649893e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, alias
        necessitatibus nostrum aspernatur, ipsa laboriosam ipsum laborum
        eligendi magnam libero repellat eveniet fuga nam voluptatum illum quas
        placeat. Officia, iusto! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Rem, alias necessitatibus nostrum aspernatur, ipsa
        laboriosam ipsum laborum eligendi magnam libero repellat eveniet fuga
        nam voluptatum illum quas placeat. Officia, iusto! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Rem, alias necessitatibus nostrum
        aspernatur, ipsa laboriosam ipsum laborum eligendi magnam libero`,
          timeCreated: "05-12-2021",
        },
        {
          name: "ABC",
          avatar: `https://images.unsplash.com/photo-1639938654233-294cc340f413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, alias
        necessitatibus nostrum aspernatur, ipsa laboriosam ipsum laborum
        eligendi magnam libero repellat eveniet fuga nam voluptatum illum quas
        placeat. Officia, iusto! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Rem, alias necessitatibus nostrum aspernatur, ipsa
        laboriosam ipsum laborum eligendi magnam libero repellat eveniet fuga
        nam voluptatum illum quas placeat. Officia, iusto! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Rem, alias necessitatibus nostrum
        aspernatur, ipsa laboriosam ipsum laborum eligendi magnam libero`,
          timeCreated: "29-06-2021",
        },
      ],
    };
  },
  components: {
    Section,
    CommentItem,
  },
};
</script>

<style lang="scss">
@import "@/scss/index.scss";
.header {
  display: none;
  @include mobile {
    width: 100%;
    display: block;
    margin-top: 1rem;

    position: relative;
  }
  &__title {
    @include mobile {
      text-align: center;
      padding: 0.5rem 1rem;
    }
  }
  &__close {
    @include mobile {
      position: absolute;
      top: 0.4rem;
      right: 1rem;
      font-size: 1.3rem;
    }
  }
}
.post-list {
  display: none;
  @include mobile {
    display: block;
  }
}
</style>
