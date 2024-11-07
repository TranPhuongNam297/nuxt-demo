<template>
  <header class="header">
    <div class="header-top">
      <div class="logo">
        <img src="/assets/logotemp.jpg" alt="Yen Market Logo" />
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Từ khóa..." />
        <!-- Sử dụng NuxtIcon thay cho icon search -->
        <button><NuxtIcon name="search" /></button>
      </div>
      <div class="header-info">
        <div class="hotline">
          <!-- Sử dụng NuxtIcon cho icon phone -->
          <NuxtIcon name="phone" />
          <span>Hotline: 1900 066 890</span>
        </div>
        <div class="auth">
          <NuxtIcon name="user" />
          <span>Đăng nhập</span> / <span>Đăng ký</span>
        </div>
        <div class="cart">
          <NuxtIcon name="shopping-cart" />
        </div>
        <div class="language">
          <img src="/assets/vietnam.png" alt="Vietnamese" />
          <img src="/assets/uk.png" alt="English" />
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <button class="menu-button">
        <NuxtIcon name="menu" /> DANH MỤC SẢN PHẨM
      </button>
    </div>
  </header>
</template>


<script>

export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 250px;
  height: 150px;
  margin-right: 8px;
}

.logo span {
  font-weight: bold;
  color: #000;
}

.premium {
  color: #888;
  font-size: 12px;
  margin-left: 4px;
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin-left: auto;
}

.search-bar input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 4px;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.hotline, .auth, .cart, .language {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #000;
}

.header-bottom {
  background-color: #d32f2f;
  padding: 10px 20px;
}

.menu-button {
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  border: none;
  background: none;
  cursor: pointer;
}

.language img {
  width: 60px; /* Điều chỉnh kích thước chiều rộng */
  height: 35px; /* Giữ tỉ lệ hình ảnh */
  margin-left: 5px; /* Khoảng cách giữa các hình */
}
</style>
