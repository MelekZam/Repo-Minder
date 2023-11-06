<template>
  <div class="footer flex flex-row items-center justify-between px-4">
    <p>Developed By <span>Melek Zamouri</span></p>
    <div class="socials">
      <a v-for="({ link, icon }, index) in socials" :href="link" target="_blank">
        <Icon :name="icon" size="30" class="mr-4" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

const socials = [
  {
    link: 'http://instagram.com/melekzam',
    icon: 'uil:instagram',
  },
  {
    link: 'http://linkedin.com/in/melek-zamouri',
    icon: 'uil:linkedin',
  },
  {
    link: 'http://github.com/MelekZam',
    icon: 'uil:github',
  },
];

</script>

<style lang="scss">
.footer {
  height: $footer-min-height;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  color: $color-primary;
  p {
    font-family: $font-main;
    span {
      font-family: $font-bold-italic;
    }
  }
}
</style>

