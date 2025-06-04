// Initialize Supabase
const { createClient } = supabase;
const supabaseUrl = 'https://rjgotbruhdursgcvnvaw.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your actual anon key
const supabase = createClient(supabaseUrl, supabaseKey);

// Chatbot functionality
const faqData = {
    "hours": "We're open every day from 8:00 AM to 8:00 PM",
    "delivery": "Yes, we offer home delivery service for medications and health products.",
    // Additional FAQ data...
};

// Chatbot event listeners and functionality
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotModal = document.getElementById('chatbotModal');
const closeChatbot = document.querySelector('.close-chatbot');
const chatbotBody = document.getElementById('chatbotBody');
const chatbotInput = document.getElementById('chatbotInput');
const sendChatbotMessage = document.getElementById('sendChatbotMessage');

chatbotBtn.addEventListener('click', () => {
    chatbotModal.style.display = 'block';
    chatbotInput.focus();
});

closeChatbot.addEventListener('click', () => {
    chatbotModal.style.display = 'none';
});

// Additional JavaScript for handling form submissions, file uploads, etc.
