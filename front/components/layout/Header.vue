<template>
  <div class="nav flex flex-row items-center justify-between py-2 px-10">
      <div class="nav__logo">
        <span>Repo Minder</span>
      </div>
      <div class="nav__login">
        <Button icon="uil:github" label="Sign in" @click="onClick" />
      </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '~/components/buttons/Button.vue';

const onClick = () => {
  console.log('xxdddd');
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: $header-min-height;
  background-color: $color-primary;
  &__logo {
    font-family: $font-gamer !important;
    font-size: 1.15rem;
    color: $color-white;
  }
  &__login {
    color: $color-white;
  }
}
</style>

