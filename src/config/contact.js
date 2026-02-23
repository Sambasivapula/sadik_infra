export const contactConfig = {
    whatsapp: "+918919939269",
    notificationPhone: "+918919939269",
    notificationEmail: "sadikinfra@gmail.com",
    // CallMeBot WhatsApp API key
    // To get your API key:
    // 1. Save +34 644 59 71 67 in your contacts
    // 2. Send "I allow callmebot to send me messages" to that number on WhatsApp
    // 3. You will receive your API key
    // 4. Replace the key below with your actual 
    callmebotApiKey: "4529873",
    emailjs: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
    }
};
