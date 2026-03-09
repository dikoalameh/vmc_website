export const cmsMixin = {
  data() {
    return {
      cms: {},
      // Removed 'polling' variable
    };
  },
  mounted() {
    this.loadCMSData();
  },
  methods: {
    async loadCMSData() {
      try {
        const response = await fetch(`http://localhost:3000/api/content?_nocache=${new Date().getTime()}`);
        
        if (!response.ok) {
            console.error("❌ CMS Sync Blocked! HTTP Status:", response.status);
            return;
        }

        const data = await response.json();
        
        // ADDED THIS LINE: Exposes what the server actually sent!
        console.log("📦 Data received from server:", data); 

        if (data && Object.keys(data).length > 0) {
          this.cms = { ...this.cms, ...data };
        }
      } catch (error) {
        console.error("❌ CMS Sync: Server offline or unreachable", error);
      }
    }
  }
};