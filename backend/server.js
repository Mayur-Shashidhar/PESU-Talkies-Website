// Express server for PESU Talkies contact form backend.
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Handles contact form submissions, sends email to club and auto-reply to user.
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "pesutalkies@pes.edu", // Your receiving email
    subject: `New message from ${name}`,
    text: `Email: ${email}\nMessage: ${message}`,
  };

  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email, // auto-reply to the user
    subject: "Thanks for reaching out to PESU Talkies!",
    text: `Hey ${name},\n\nWe've received your message and will get back to you soon!\n\n🎬 PESU Talkies`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReply);
    res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending emails" });
  }
});

// PESU Talkies Chatbot responses with club-specific information
const chatbotResponses = {
  // Greetings
  'hello': 'Hello! Welcome to PESU Talkies! 🎬 I\'m here to help you learn about our amazing film club. What would you like to know?',
  'hi': 'Hi there! 👋 Welcome to PESU Talkies! How can I assist you today?',
  'hey': 'Hey! Great to see you here! 🎥 I can help you learn about PESU Talkies. What interests you?',
  
  // Casual conversations
  'how are you': 'I\'m doing fantastic! 🌟 Ready to share all the exciting details about PESU Talkies with you. How can I help you learn about our amazing film club?',
  'how are you doing': 'I\'m doing great, thanks for asking! 😊 I\'m here and excited to tell you everything about PESU Talkies. What would you like to know?',
  'whats up': 'Not much, just here ready to chat about PESU Talkies! 🎬 What brings you to our film club today?',
  'how\'s it going': 'It\'s going wonderfully! 🎉 I love talking about PESU Talkies and helping people discover our amazing projects and community. What interests you most?',
  'who are you': 'I\'m the PESU Talkies chatbot! 🤖 I\'m here to help you learn everything about our amazing film club - from our projects and domains to how you can join our creative family!',
  'what are you': 'I\'m a friendly chatbot representing PESU Talkies! 🎭 Think of me as your personal guide to discovering all the exciting aspects of our film club. What would you like to explore?',
  'who r u': 'I\'m your PESU Talkies assistant! 🎬 I\'m here to share information about our club, answer your questions, and help you connect with our filmmaking community!',
  'nice to meet you': 'Nice to meet you too! 😊 I\'m excited to share the world of PESU Talkies with you. What aspect of our film club interests you most?',
  'good morning': 'Good morning! ☀️ Hope you\'re having a great day! Ready to explore the amazing world of PESU Talkies?',
  'good afternoon': 'Good afternoon! 🌞 Perfect time to learn about PESU Talkies and our incredible filmmaking journey!',
  'good evening': 'Good evening! 🌅 Great to have you here! Let me tell you about the fantastic world of PESU Talkies!',
  'good night': 'Good night! 🌙 Sweet dreams, and don\'t forget to check out our films and projects tomorrow!',
  'sup': 'Hey there! 👋 Just here ready to chat about all things PESU Talkies! What\'s on your mind?',
  'yo': 'Yo! 🎬 Welcome to PESU Talkies! Ready to dive into some awesome filmmaking content?',
  'wassup': 'Hey! Not much, just excited to tell you about PESU Talkies! 🎭 What brings you here today?',
  
  // About the club
  'about': 'PESU Talkies is a vibrant film club at PES University! 🎭 We follow the motto "Plan, Capture And Present" and work across 11 different domains including Direction, Cinematography, Acting, Editing, and more. We create short films, series, and organize amazing events!',
  'club': 'PESU Talkies is more than just a club - we\'re a creative family! 🎪 We have 15+ passionate members working across various domains to create compelling visual stories.',
  'motto': 'Our club motto is "Plan, Capture And Present" ✨ - it represents our complete filmmaking process from conception to final presentation!',
  
  // Projects
  'projects': 'We\'ve created 8 incredible short films including KID-NAF, BHRAME, HA, LAST PAGE PREETHI, VAM TV, THE DEVIL\'S LULLABY, SAMARPANE, and SHADOWS! 🎬 Plus our series "MISSED CONNECTIONS IN TAXI". Check out our Projects page!',
  'films': 'Our short films showcase diverse storytelling! From thriller (SHADOWS) to drama (SAMARPANE), we explore various genres. Each film has detailed cast, crew, and premise information on our website!',
  'series': 'Our series "MISSED CONNECTIONS IN TAXI" explores modern urban relationships and chance encounters. It\'s available with full cast and crew details!',
  
  // Individual Project Summaries
  'kid-naf': 'KID-NAF is a gripping thriller about a kidnapping gone wrong! 🎭 The story follows unexpected twists as plans unravel, showcasing intense performances and edge-of-your-seat suspense.',
  'kidnaf': 'KID-NAF is a gripping thriller about a kidnapping gone wrong! 🎭 The story follows unexpected twists as plans unravel, showcasing intense performances and edge-of-your-seat suspense.',
  'bhrame': 'BHRAME is a psychological drama exploring the complexity of human emotions and relationships! 🧠 It delves into the confusion and dilemmas we face in our daily lives, presenting a thought-provoking narrative.',
  'ha': 'HA is about two siblings Ajay and Divya are caught in a haunting time loop where each reset comes at a devastating cost. As they struggle to escape, they uncover a chilling truth: time isn’t just repeating — it holds onto their every choice.',
  'last page preethi': 'LAST PAGE PREETHI is a romantic drama about love, loss, and second chances! 💝 It tells the touching story of relationships that transcend time and the beauty of unexpected connections.',
  'vam tv': 'VAM TV is an innovative project exploring modern media and communication! 📺 It presents a satirical take on contemporary television culture and digital age relationships.',
  'the devils lullaby': 'THE DEVIL\'S LULLABY is a dark thriller that explores the supernatural and psychological horror! 👹 It combines eerie atmospheres with compelling storytelling to create a haunting cinematic experience.',
  'devils lullaby': 'THE DEVIL\'S LULLABY is a dark thriller that explores the supernatural and psychological horror! 👹 It combines eerie atmospheres with compelling storytelling to create a haunting cinematic experience.',
  'samarpane': 'SAMARPANE is a heartfelt drama about sacrifice, dedication, and the pursuit of dreams! 🌟 It showcases the journey of individuals who give their all for something greater than themselves.',
  'shadows': 'SHADOWS is an intense thriller that plays with light and darkness, both literally and metaphorically! 🌑 The film explores hidden truths, secrets, and the duality of human nature.',
  'missed connections in taxi': 'MISSED CONNECTIONS IN TAXI is our web series exploring chance encounters in urban life! 🚕 Each episode follows different passengers sharing a taxi ride, revealing intimate stories of missed opportunities, unexpected connections, and the beautiful randomness of city life.',
  'missed connections': 'MISSED CONNECTIONS IN TAXI is our web series exploring chance encounters in urban life! 🚕 Each episode follows different passengers sharing a taxi ride, revealing intimate stories of missed opportunities, unexpected connections, and the beautiful randomness of city life.',
  'taxi series': 'MISSED CONNECTIONS IN TAXI is our web series exploring chance encounters in urban life! 🚕 Each episode follows different passengers sharing a taxi ride, revealing intimate stories of missed opportunities, unexpected connections, and the beautiful randomness of city life.',
  
  // Domains
  'domains': 'We have 11 exciting domains: Direction, Cinematography, Acting, Editing, Production, Marketing, Content, Design, Operations, Cultural, and Social Media! 🎯 Each domain offers unique learning opportunities.',
  'direction': 'Our Direction domain is headed by Somesh! Directors shape the creative vision and guide the entire filmmaking process. 🎬',
  'cinematography': 'Cinematography is led by Rishi! This domain focuses on visual storytelling through camera work, lighting, and composition. 📹',
  'acting': 'Our Acting domain is headed by Archi! Actors bring characters to life and are the heart of our storytelling. 🎭',
  'editing': 'Editing domain is led by Pratham! Editors craft the final narrative through post-production magic. ✂️',
  'production': 'Production domain has two heads - Apurv and Kushal! They manage logistics, scheduling, equipment, and ensure smooth filming operations. 🎪',
  'marketing': 'Marketing domain is headed by Mayur! They promote our content, manage publicity campaigns, and build our audience reach. 📢',
  'content': 'Content domain is led by Sourish! They create engaging scripts, stories, and written material for our projects. ✍️',
  'design': 'Design domain is headed by Baasanthi! They handle visual design, graphics, posters, and all creative artwork. 🎨',
  'operations': 'Operations domain is led by Vineeth! They manage day-to-day club activities, coordination, and administrative tasks. ⚙️',
  'cultural': 'Cultural domain is headed by Yatharth! They organize cultural events, workshops, and community engagement activities. 🎪',
  'social media': 'Social Media domain is led by Bhanavi! They manage our online presence, content posting, and digital engagement. 📱',
  
  // Team/Heads
  'heads': 'Our amazing leadership includes Club Heads: Jayaram, Sharvani, Saumyaa, and Yatharth! Plus we have dedicated Domain Heads for each of our 11 domains. Check our Heads page for detailed profiles! 👑',
  'team': 'Our team consists of 15+ talented individuals across various domains, each bringing unique skills to create amazing content! 🌟',
  'leadership': 'PESU Talkies is led by passionate film enthusiasts who guide both creative and operational aspects of the club.',
  
  // Joining/Recruitment
  'join': 'Interested in joining PESU Talkies? 🚀 Visit our Recruitments page for the latest information! We welcome creative minds who are passionate about filmmaking and visual storytelling.',
  'recruitment': 'Keep an eye on our Announcements page and social media for recruitment updates! We look for passionate individuals across all 11 domains. 📢',
  'how to join': 'To join PESU Talkies: 1) Check our Recruitments page 2) Follow our social media for updates 3) Attend our events 4) Show your passion for filmmaking! 🎪',
  
  // Contact/Social
  'contact': 'You can reach us through: 📧 Official email: pesutalkies@pes.edu, 📱 Instagram: @pesutalkies, 🎥 YouTube: @PESU_TALKIES, 💼 LinkedIn: PESU Talkies. Or use our contact form! which is at the end of Overview page',
  'social': 'Follow us on: Instagram (@pesutalkies), YouTube (@PESU_TALKIES), LinkedIn (PESU Talkies), and X! 📱 Stay updated with all our latest content and announcements!',
  'instagram': 'Find us on Instagram @pesutalkies for behind-the-scenes content, event updates, and more! 📸',
  'youtube': 'Subscribe to our YouTube channel @PESU_TALKIES to watch all our short films, series, and exclusive content! 🎥',
  'linkedin': 'Connect with us on LinkedIn - PESU Talkies for professional updates, opportunities, and networking! 💼',
  'twitter': 'Follow us on X (formerly Twitter) for quick updates, announcements, and real-time engagement! 🐦',
  'email': 'Reach out to us directly at pesutalkies@pes.edu for official inquiries, collaborations, or any questions! 📧',
  
  // Events
  'events': 'We organize exciting events like CINIFEST, CINIQUIZZ, and POSTER CHRONICLES! 🎪 Check our Overview page and social media for upcoming events.',
  'announcements': 'Stay updated with our latest announcements on the Announcements page and follow our social media! 📢 We regularly share updates about recruitment, events, film releases, and club activities on Instagram @pesutalkies, YouTube @PESU_TALKIES, and LinkedIn!',
  'cinifest': 'CINIFEST is one of our major events celebrating cinema and creativity! 🎬 Follow our announcements for details.',
  'ciniquiz': 'CINIQUIZ is our fun film trivia and quiz event where movie buffs test their cinema knowledge! 🧠 It\'s always an exciting competition with amazing prizes!',
  'poster chronicles': 'POSTER CHRONICLES is our creative event focused on poster design, visual storytelling, and artistic expression! 🎨 Participants showcase their design skills and creativity.',
  
  // General help
  'help': 'I can help you with information about: 🔹 Our projects and films 🔹 Club domains and roles 🔹 Team members and heads 🔹 How to join 🔹 Contact information 🔹 Events and activities. Just ask!',
  'navigation': 'Our website has: Overview (about us), Projects (films & series), Domains (our areas), Heads (our team), Recruitments (join us), Announcements (updates), and Follow Us (social links)! 🧭',
  
  // Default responses
  'default': 'That\'s a great question! 🤔 I can help you with information about PESU Talkies - our projects, domains, team, recruitment, or contact details. Try asking about "projects", "domains", "how to join", or "contact"!',
  'thanks': 'You\'re welcome! 😊 Is there anything else you\'d like to know about PESU Talkies? I\'m here to help!',
  'thank you': 'You\'re most welcome! 🌟 Happy to help you learn about PESU Talkies! Any other questions?',
  'ty': 'You\'re welcome! 😄 Anything else about PESU Talkies you\'d like to know?',
  'thx': 'No problem! 👍 Feel free to ask me anything else about our film club!',
  'bye': 'Thanks for visiting PESU Talkies! 👋 Don\'t forget to check out our projects and follow us on social media. See you around! 🎬',
  'goodbye': 'Goodbye! 🎭 Thanks for chatting with me about PESU Talkies. Hope to see you at our events soon!',
  'see you later': 'See you later! 🎬 Don\'t forget to follow us on social media for updates!',
  'cya': 'See ya! 👋 Thanks for learning about PESU Talkies with me!',
  'gtg': 'Got to go? No worries! 😊 Thanks for stopping by PESU Talkies!',
  'ok': 'Awesome! 👍 Is there anything specific about PESU Talkies you\'d like to know more about?',
  'okay': 'Great! 😊 What else would you like to discover about our film club?',
  'cool': 'I\'m glad you think so! 😎 PESU Talkies really is pretty cool! Want to know more about our projects?',
  'awesome': 'Right? We think PESU Talkies is pretty awesome too! 🌟 What aspect interests you most?',
  'amazing': 'Thank you! 🎉 We work hard to make PESU Talkies amazing! Want to be part of our journey?',
  'wow': 'I know, right? 🤩 PESU Talkies has so many incredible aspects! What caught your attention?',
  'nice': 'Thanks! 😊 We\'re proud of what PESU Talkies has accomplished! Want to learn more?',
  'interesting': 'Glad you find it interesting! 🎭 PESU Talkies has so much to offer. What would you like to explore?',
  'tell me more': 'I\'d love to tell you more! 📚 What specifically interests you? Our projects, team, domains, or how to join?',
  'more info': 'Sure! I have tons of information about PESU Talkies! 📖 What area would you like to dive deeper into?',
  'details': 'I\'ve got all the details! 🔍 Whether it\'s about our films, team, events, or joining process - just ask!',
  'explain': 'Happy to explain! 💡 What aspect of PESU Talkies would you like me to break down for you?',
  'what can you do': 'I can help you with everything PESU Talkies! 🎯 Projects info, domain details, team profiles, recruitment process, contact info, events, and general club information!',
  'what do you know': 'I know everything about PESU Talkies! 🧠 From our 8 short films and series to our 11 domains, 15+ team members, events, and how you can join our creative family!',
  'are you real': 'I\'m a real chatbot with real enthusiasm for PESU Talkies! 🤖✨ While I\'m digital, my knowledge about our amazing film club is 100% authentic!',
  'are you human': 'Nope, I\'m a chatbot! 🤖 But I\'m powered by genuine passion for PESU Talkies and I\'m here to help you discover our incredible filmmaking community!',
  'lol': 'Haha! 😄 Glad I could make you smile! PESU Talkies is full of fun and creativity!',
  'haha': 'Happy to bring some joy! 😆 Just like our films - we love spreading happiness through storytelling!',
  'funny': 'Thanks! 😄 We believe creativity and fun go hand in hand at PESU Talkies!',
  'sorry': 'No need to apologize! 😊 I\'m here to help with anything about PESU Talkies. What can I assist you with?',
  'my bad': 'No worries at all! 👍 I\'m here whenever you need information about PESU Talkies!',
  'oops': 'It happens! 😄 No problem at all! How can I help you with PESU Talkies?',
};

// Function to find the best matching response
function findBestResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  // First check for specific project mentions (highest priority)
  if (message.includes('kid-naf') || message.includes('kidnaf')) {
    return chatbotResponses['kid-naf'];
  }
  if (message.includes('bhrame')) {
    return chatbotResponses['bhrame'];
  }
  if (message === 'ha' || message.includes('ha film') || message.includes('ha movie')) {
    return chatbotResponses['ha'];
  }
  if (message.includes('last page preethi') || message.includes('preethi')) {
    return chatbotResponses['last page preethi'];
  }
  if (message.includes('vam tv')) {
    return chatbotResponses['vam tv'];
  }
  if (message.includes('devil\'s lullaby') || message.includes('devils lullaby') || message.includes('the devils lullaby')) {
    return chatbotResponses['the devils lullaby'];
  }
  if (message.includes('samarpane')) {
    return chatbotResponses['samarpane'];
  }
  if (message.includes('shadows') && !message.includes('missed')) {
    return chatbotResponses['shadows'];
  }
  if (message.includes('missed connections') || message.includes('taxi series')) {
    return chatbotResponses['missed connections in taxi'];
  }
  
  // Events (second priority)
  if (message.includes('announcements') || message.includes('announcement')) {
    return chatbotResponses['announcements'];
  }
  if (message.includes('cinifest')) {
    return chatbotResponses['cinifest'];
  }
  if (message.includes('ciniquiz') || message.includes('cini quiz')) {
    return chatbotResponses['ciniquiz'];
  }
  if (message.includes('poster chronicles')) {
    return chatbotResponses['poster chronicles'];
  }
  if (message.includes('events')) {
    return chatbotResponses['events'];
  }
  
  // Specific conversational patterns (third priority)
  if (message.includes('thank') || message.includes('thx') || message.includes(' ty ') || message === 'ty') {
    return chatbotResponses['thanks'];
  }
  if (message.includes('bye') || message.includes('goodbye') || message.includes('see you') || message.includes('cya') || message.includes('gtg')) {
    return chatbotResponses['bye'];
  }
  if (message.includes('what') && (message.includes('do') || message.includes('can'))) {
    return chatbotResponses['help'];
  }
  if (message.includes('how are you') || message.includes('how r u') || message.includes('how are u')) {
    return chatbotResponses['how are you'];
  }
  if (message.includes('whats up') || message.includes('what\'s up') || message.includes('wassup') || message === 'sup') {
    return chatbotResponses['whats up'];
  }
  if (message.includes('how\'s it going') || message.includes('hows it going')) {
    return chatbotResponses['how\'s it going'];
  }
  if (message.includes('who are you') || message.includes('who r u') || message.includes('what are you')) {
    return chatbotResponses['who are you'];
  }
  if (message.includes('are you human') || message.includes('are u human') || message.includes('r u human') || message.includes('are you real')) {
    return chatbotResponses['are you human'];
  }
  if (message.includes('good morning')) {
    return chatbotResponses['good morning'];
  }
  if (message.includes('good afternoon')) {
    return chatbotResponses['good afternoon'];
  }
  if (message.includes('good evening')) {
    return chatbotResponses['good evening'];
  }
  if (message.includes('good night')) {
    return chatbotResponses['good night'];
  }
  if (message.includes('tell me more') || message.includes('more info')) {
    return chatbotResponses['tell me more'];
  }
  if (message.includes('what can you do') || message.includes('what do you know')) {
    return chatbotResponses['what can you do'];
  }
  if (message === 'lol' || message === 'haha' || message.includes('funny')) {
    return chatbotResponses['lol'];
  }
  if (message.includes('sorry') || message.includes('my bad') || message.includes('oops')) {
    return chatbotResponses['sorry'];
  }
  if (message === 'ok' || message === 'okay' || message === 'cool' || message === 'nice' || message === 'wow') {
    return chatbotResponses['ok'];
  }
  
  // General keyword matches (lowest priority - fallback)
  for (const [key, response] of Object.entries(chatbotResponses)) {
    if (message.includes(key)) {
      return response;
    }
  }
  
  // Default response
  return chatbotResponses['default'];
}

// Chatbot API endpoint - handles user messages and returns appropriate responses
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message, userId } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        success: false, 
        message: "Message is required" 
      });
    }
    
    // Find appropriate response
    const botResponse = findBestResponse(message);
    
    // Log conversation for analytics (optional)
    console.log(`💬 Chatbot - User: ${message} | Bot: ${botResponse.substring(0, 50)}...`);
    
    res.status(200).json({ 
      success: true, 
      response: botResponse,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Sorry, I'm having technical difficulties. Please try again!" 
    });
  }
});

// Starts the backend server.
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
