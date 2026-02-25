// src/data/monumentsData.js

// Import Images
import taj from "../assets/images/taj.jpg";
import qutub from "../assets/images/qutub.jpg";
import hampi from "../assets/images/hampi.jpg";
import redfort from "../assets/images/redfort.jpg";
import indiagate from "../assets/images/indiagate.jpg";
import nationalwar from "../assets/images/nationalwar.jpg";
import konark from "../assets/images/konark.jpg";
import jagannath from "../assets/images/jagannath.jpg";
import meenakshi from "../assets/images/meenakshi.jpg";
import brihadeeswara from "../assets/images/brihadeeswara.jpg";
import victoria from "../assets/images/victoria.jpg";
import dakshineswar from "../assets/images/dakshineswar.jpg";
import gateway from "../assets/images/gateway.jpg";
import ajanta from "../assets/images/ajanta.jpg";
import vaishnodevi from "../assets/images/vaishnovdevi.jpg";
import hidimba from "../assets/images/hidimba.jpg";
import kamakhya from "../assets/images/kamakhya.jpg";
import tawang from "../assets/images/tawang.jpg";
import amaravatistupa from "../assets/images/amaravtistupa.jpg";
import charminar from "../assets/images/charminar.jpg";

export const monuments = [

  // ===== UTTAR PRADESH =====
  {
    id: "taj",
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    type: "Mausoleum",
    location: "Agra, Uttar Pradesh, India",
    builtBy: "Shah Jahan",
    year: "1632",
    image: taj,
    gallery: [taj],
    description: [
      "The Taj Mahal is one of the Seven Wonders of the World and a UNESCO World Heritage Site. Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it stands as a symbol of eternal love.",
      "Constructed entirely from white marble, the monument blends Persian, Islamic, and Indian architectural styles. Its symmetrical gardens, reflecting pool, and intricate carvings attract millions of visitors every year."
    ]
  },

  // ===== DELHI =====
  {
    id: "qutub",
    name: "Qutub Minar",
    state: "Delhi",
    type: "Minaret",
    location: "Delhi, India",
    builtBy: "Qutb-ud-din Aibak",
    year: "1193",
    image: qutub,
    gallery: [qutub],
    description: [
      "Qutub Minar is the tallest brick minaret in the world and a UNESCO World Heritage Site. It was built to mark the beginning of Muslim rule in India.",
      "Standing 73 meters tall, the structure features intricate carvings and Quranic inscriptions. It remains one of Delhi's most important historical landmarks."
    ]
  },

  {
    id: "redfort",
    name: "Red Fort",
    state: "Delhi",
    type: "Fort",
    location: "Delhi, India",
    builtBy: "Shah Jahan",
    year: "1648",
    image: redfort,
    gallery: [redfort],
    description: [
      "The Red Fort served as the residence of Mughal emperors for nearly 200 years. It is one of India's most significant historical monuments.",
      "Built using red sandstone, the fort symbolizes India's independence and hosts the national flag hoisting ceremony every Independence Day."
    ]
  },

  {
    id: "indiagate",
    name: "India Gate",
    state: "Delhi",
    type: "War Memorial",
    location: "Delhi, India",
    builtBy: "Edwin Lutyens",
    year: "1931",
    image: indiagate,
    gallery: [indiagate],
    description: [
      "India Gate is a war memorial dedicated to Indian soldiers who died in World War I.",
      "The Amar Jawan Jyoti beneath the arch burns continuously to honor fallen soldiers and symbolizes national pride."
    ]
  },

  {
    id: "nationalwar",
    name: "National War Memorial",
    state: "Delhi",
    type: "War Memorial",
    location: "Delhi, India",
    builtBy: "Government of India",
    year: "2019",
    image: nationalwar,
    gallery: [nationalwar],
    description: [
      "The National War Memorial honors soldiers who sacrificed their lives after India's independence.",
      "It features concentric circles representing protection, valor, sacrifice, and immortality."
    ]
  },

  // ===== KARNATAKA =====
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    type: "Heritage Site",
    location: "Karnataka, India",
    builtBy: "Vijayanagara Empire",
    year: "14th Century",
    image: hampi,
    gallery: [hampi],
    description: [
      "Hampi was once the capital of the Vijayanagara Empire and one of the richest cities in the world.",
      "The ruins include temples, markets, and royal complexes. It is now a UNESCO World Heritage Site."
    ]
  },

  {
    id: "mysore",
    name: "Mysore Palace",
    state: "Karnataka",
    type: "Palace",
    location: "Mysuru, Karnataka, India",
    builtBy: "Wodeyar Dynasty",
    year: "1912",
    image: meenakshi,
    gallery: [meenakshi],
    description: [
      "Mysore Palace is the royal residence of the Wodeyar dynasty.",
      "It is famous for its grand architecture and is beautifully illuminated during Dussehra festival."
    ]
  },

  // ===== MAHARASHTRA =====
  {
    id: "gateway",
    name: "Gateway of India",
    state: "Maharashtra",
    type: "Heritage Site",
    location: "Mumbai, Maharashtra, India",
    builtBy: "British Government",
    year: "1924",
    image: gateway,
    gallery: [gateway],
    description: [
      "The Gateway of India was built to commemorate the visit of King George V and Queen Mary.",
      "It stands as a symbol of Mumbai and was the departure point for British troops after independence."
    ]
  },

  {
    id: "ajanta",
    name: "Ajanta Caves",
    state: "Maharashtra",
    type: "Heritage Site",
    location: "Maharashtra, India",
    builtBy: "Buddhist Monks",
    year: "2nd Century BCE",
    image: ajanta,
    gallery: [ajanta],
    description: [
      "Ajanta Caves are ancient rock-cut Buddhist caves known for paintings and sculptures.",
      "They depict stories from the life of Buddha and are considered masterpieces of ancient Indian art."
    ]
  },

  // ===== TELANGANA =====
  {
    id: "charminar",
    name: "Charminar",
    state: "Telangana",
    type: "Monument",
    location: "Hyderabad, Telangana, India",
    builtBy: "Muhammad Quli Qutb Shah",
    year: "1591",
    image: charminar,
    gallery: [charminar],
    description: [
      "Charminar is the symbol of Hyderabad and a historic Indo-Islamic monument.",
      "Built in 1591, it features four minarets and grand arches, attracting thousands of visitors daily."
    ]
  },

  // ===== ANDHRA PRADESH =====
  {
    id: "amaravati",
    name: "Amaravati Stupa",
    state: "Andhra Pradesh",
    type: "Buddhist Site",
    location: "Amaravati, Andhra Pradesh, India",
    builtBy: "Satavahana Dynasty",
    year: "2nd Century BCE",
    image: amaravatistupa,
    gallery: [amaravatistupa],
    description: [
      "Amaravati Stupa is one of the oldest Buddhist monuments in India.",
      "It is famous for its intricate carvings and is an important center of Buddhist heritage."
    ]
  }

];