<template>
  <div>
      <Header />
      <section>
        <h1>Welcome to Yen Market</h1>
        <p>Explore our exclusive products!</p>
      </section>
      <Footer />
    </div>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: { Header, Footer },
  };
  </script>
  
  <style scoped>

  </style>