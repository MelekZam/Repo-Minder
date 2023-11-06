<template>
  <main id="landing-page">
    <div class="screen grid grid-cols-2 gap-4">
      <div class="screen__text flex flex-col justify-center items-center px-4">
        <div class="screen__text__content">
          <h1 class="mb-4">Welcome to Repo Minder</h1>
          <p>Elevate Your GitHub Projects to the Next Level</p>
          <p>Are you tired of managing your GitHub repositories with endless spreadsheets and scattered notes ?</p> 
          <p>Streamline your project management with Repo Minder, the ultimate tool for GitHub enthusiasts.</p>
          <Button class="mt-4" icon="uil:arrow-right" label="Start with GITHUB" is-reverse icon-right />
        </div>
      </div>
      <div class="screen__media"></div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Button from '~/components/buttons/Button.vue';
  definePageMeta({
    layout: 'landing',
  })
</script>

<style lang="scss" scoped>
#landing-page {
    padding-block: 0;
    height: calc(100vh - $footer-min-height - $header-min-height);
}

.screen {
  height: 100%;
  &__media {
    height: 100%;
    background: url('~/assets/images/landing.gif') no-repeat center;
  }
  &__text {
    text-align: left;
    &__content {
      h1 {
        color: $color-primary;
        font-family: $font-gamer;
        font-size: 1.5rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
  }
}
</style>

