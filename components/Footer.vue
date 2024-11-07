<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Yen Market. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Service</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
.footer-content nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.footer-content nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
