<template>
    <div style="width: 100%; height: 100%;">
      <iframe
        :src="iframeSrc"
        width="100%"
        height="800px"
        style="border: none;"
        title="Embedded HTML Content"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        iframeSrc: `/yenmarket/yenmarket.vn/index.html`,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tùy chỉnh CSS cho iframe nếu cần */
  </style>
  