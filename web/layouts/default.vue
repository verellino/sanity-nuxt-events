<template>
  <div>
    <Navbar
      :title="$store.state.eventInformation.name"
      :ticket-link="$store.state.eventInformation.ticket"
    />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import '../styles/global.css';
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

html {
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
}

body {
  -webkit-font-smoothing: antialiased;
  background: var(--color-white);
  color: var(--color-black);
  margin: 0;
  position: relative;
}

html,
body,
#__nuxt,
#__layout,
#__layout > div {
  height: 100%;
}

.title {
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);
  margin-bottom: 0.25rem;
  padding-bottom: 0;

  @nest & strong {
    background: #fe0;
  }

  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}

.title + p {
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin-top: 0;
  margin-bottom: 4rem;

  @media (--media-min-medium) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }
}
</style>
