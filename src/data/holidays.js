// src/data/holidays.js

const holidays = [
    {
      id: 'diwali-2024', // Unique ID
      name: {
        en: 'Diwali',
        mr: 'दिवाळी'  // Marathi
      },
      date: '2024-11-01', // YYYY-MM-DD format
      pronunciation: {
        en: 'di-vah-lee', // Phonetic spelling (or audio file path: '/audio/english/diwali.mp3')
        mr: 'di-vaa-lii'   // Phonetic spelling (or audio file path)
      },
      history: {
        en: 'Diwali, the festival of lights, is one of the major festivals celebrated by Hindus, Jains, Sikhs, and some Buddhists...',
        mr: 'दिवाळी, दिव्यांचा सण, हिंदू, जैन, शीख आणि काही बौद्धांद्वारे साजरा केला जाणारा एक प्रमुख सण आहे...' // Marathi translation
      },
      greeting: {
        en: 'Happy Diwali!',
        mr: 'शुभ दीपावली!'
      },
      type: 'Indian' // Category for filtering (optional)
    },
    {
      id: 'thanksgiving-2024',
      name: {
        en: 'Thanksgiving',
        mr: 'थँक्सगिव्हिंग'
      },
      date: '2024-11-28',
      pronunciation: {
        en: 'thanks-giv-ing',
        mr: 'thanks-giv-ing' // (Can keep English pronunciation for US holidays if desired)
      },
      history: {
        en: 'Thanksgiving is a national holiday celebrated in the United States...',
        mr: 'थँक्सगिव्हिंग हा अमेरिकेमध्ये साजरा केला जाणारा राष्ट्रीय सण आहे...' // Marathi translation (optional, but good for completeness)
      },
      greeting: {
        en: 'Happy Thanksgiving!',
        mr: 'हॅपी थँक्सगिव्हिंग!'  // (Can keep English greeting, or provide a Marathi equivalent if appropriate)
      },
      type: 'US'
    },
    // ... Add more holidays here ...
  ];
  
  export default holidays;