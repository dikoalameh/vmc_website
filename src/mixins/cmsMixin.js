// src/mixins/cmsMixin.js

export const cmsMixin = {
  data() {
    return {
      // This 'cms' variable will automatically hold ALL your data
      // You can access it in your HTML like: {{ cms.captionOneP1 }}
      cms: {} 
    };
  },
  async mounted() {
    console.log("🔌 Connecting to CMS...");
    try {
      const response = await fetch('http://localhost:3000/api/content');
      const data = await response.json();
      
      this.cms = data; // Load data into the 'cms' variable
      
    } catch (error) {
      console.log("❌ CMS Offline or Server not running.");
    }
  }
};