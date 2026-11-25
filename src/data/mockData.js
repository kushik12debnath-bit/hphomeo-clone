export const navLinks = [
  { label: 'Find Doctors', href: '#doctors', type: 'directory' },
  { label: 'How it works', href: '#how-it-works', type: 'section' },
  { label: 'Why Us', href: '#why-us', type: 'section' },
]

export const heroContent = {
  title: {
    lead: 'Heal',
    middle: 'with',
    accent: 'Homeopathy',
  },
  description:
    'Book online appointments with expert homeopathic doctors and receive digital prescriptions — from home.',
  primaryCta: 'Book an Appointment',
  secondaryCta: 'See how it works ↓',
  trust: {
    label: 'Trusted by',
    count: '1,000+',
    suffix: 'patients',
  },
  badges: [
    { label: 'Verified Doctors', color: 'bg-green-500' },
    { label: '100% Natural', color: 'bg-emerald-500' },
    { label: 'Digital Prescriptions', color: 'bg-violet-500' },
    { label: '7-Day Follow-up', color: 'bg-blue-500' },
  ],
  image: {
    src: '/images/hero-illustration.webp',
    alt: 'Online homeopathy consultation illustration',
  },
}

export const whyHomeopathy = [
  {
    icon: '/images/icon-leaf.svg',
    title: 'Treats Root Cause',
    description:
      'Goes beyond symptom suppression by treating the underlying imbalances in your body.',
  },
  {
    icon: '/images/icon-capsule.svg',
    title: 'Zero Side Effects',
    description:
      'Natural remedies with no side effects, making them safe for long-term use including children.',
  },
  {
    icon: '/images/icon-body.svg',
    title: 'Holistic Approach',
    description:
      'Treats the whole person — mind, body and emotions — not just individual symptoms.',
  },
  {
    icon: '/images/icon-pregnancy.svg',
    title: 'Safe for Mother & Child',
    description:
      'Gentle and safe during pregnancy and for infants, supporting natural healing at every stage.',
  },
]

export const journeySteps = [
  {
    number: 1,
    icon: '/images/icon-doctor.svg',
    title: 'Browse Doctors',
    description: 'Find the right practitioner for you.',
    highlight: false,
  },
  {
    number: 2,
    icon: '/images/icon-chat.svg',
    title: 'Book Consultation',
    description:
      'Pick a time that works, and schedule an online consultation at your convenience.',
    highlight: true,
  },
  {
    number: 3,
    icon: '/images/icon-paper.svg',
    title: 'Get Prescription',
    description: 'Digital prescription delivered instantly.',
    highlight: false,
  },
  {
    number: 4,
    icon: '/images/icon-event.svg',
    title: 'Free Follow-Up',
    description: '7 days of support after every visit.',
    highlight: false,
  },
]

export const whyChooseUs = [
  {
    icon: 'video',
    title: 'Online Consultations',
    description: 'Connect with doctors from anywhere via video call.',
  },
  {
    icon: 'card',
    title: 'Transparent Pricing',
    description: 'Affordable consultations, no hidden charges.',
  },
  {
    icon: 'calendar',
    title: '7-Day Follow-Up',
    description: 'Free support included after every visit.',
  },
  {
    icon: 'file',
    title: 'Digital Prescriptions',
    description: 'Rx delivered instantly after consultation.',
  },
]

export const specialties = [
  'All',
  'Chronic Care',
  'Skin & Hair',
  "Women's Health",
  'Child Care',
  'Digestive Health',
]

export const doctors = [
  {
    id: 'dr-ananya-sen',
    name: 'Dr. Ananya Sen',
    registrationNo: 'WBMC 65432',
    specialization: 'Chronic Care',
    qualification: 'BHMS, MD (Hom.)',
    experience: 12,
    fee: 499,
    languages: ['English', 'Bengali', 'Hindi'],
    rating: 4.9,
    reviews: 218,
    photo:
      '/images/doctors/ananya-sen.jpg',
    availableToday: true,
    bio: 'Helps patients manage long-standing conditions with individualised constitutional homeopathy.',
  },
  {
    id: 'dr-arjun-mehta',
    name: 'Dr. Arjun Mehta',
    registrationNo: 'MHMC 48219',
    specialization: 'Skin & Hair',
    qualification: 'BHMS, CCH',
    experience: 9,
    fee: 449,
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.8,
    reviews: 164,
    photo:
      '/images/doctors/arjun-mehta.jpg',
    availableToday: true,
    bio: 'Focuses on chronic skin, hair and allergy concerns using gentle, non-suppressive remedies.',
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    registrationNo: 'KMC 57104',
    specialization: "Women's Health",
    qualification: 'BHMS, MD (Hom.)',
    experience: 15,
    fee: 599,
    languages: ['English', 'Malayalam', 'Hindi'],
    rating: 5.0,
    reviews: 302,
    photo:
      '/images/doctors/priya-nair.jpg',
    availableToday: true,
    bio: 'Supports hormonal balance, PCOS, menstrual health and pregnancy care with homeopathy.',
  },
  {
    id: 'dr-rohan-das',
    name: 'Dr. Rohan Das',
    registrationNo: 'WBMC 61087',
    specialization: 'Child Care',
    qualification: 'BHMS, PG Dip. Paediatrics',
    experience: 11,
    fee: 549,
    languages: ['English', 'Bengali', 'Hindi'],
    rating: 4.9,
    reviews: 189,
    photo:
      '/images/doctors/rohan-das.jpg',
    availableToday: false,
    bio: 'Gentle paediatric homeopathy for recurring infections, allergies and growth support.',
  },
  {
    id: 'dr-ishita-roy',
    name: 'Dr. Ishita Roy',
    registrationNo: 'WBMC 58921',
    specialization: 'Digestive Health',
    qualification: 'BHMS, MD (Hom.)',
    experience: 8,
    fee: 499,
    languages: ['English', 'Bengali'],
    rating: 4.8,
    reviews: 141,
    photo:
      '/images/doctors/ishita-roy.jpg',
    availableToday: true,
    bio: 'Works with IBS, acidity, bloating and other recurring digestive complaints.',
  },
  {
    id: 'dr-vikram-bose',
    name: 'Dr. Vikram Bose',
    registrationNo: 'WBMC 44018',
    specialization: 'Chronic Care',
    qualification: 'BHMS, PhD (Hom.)',
    experience: 18,
    fee: 699,
    languages: ['English', 'Bengali', 'Hindi'],
    rating: 4.9,
    reviews: 411,
    photo:
      '/images/doctors/vikram-bose.jpg',
    availableToday: false,
    bio: 'Senior homeopath with a special interest in autoimmune and lifestyle disorders.',
  },
  {
    id: 'dr-meera-iyer',
    name: 'Dr. Meera Iyer',
    registrationNo: 'TNMC 70335',
    specialization: "Women's Health",
    qualification: 'BHMS, CCH',
    experience: 10,
    fee: 549,
    languages: ['English', 'Tamil', 'Hindi'],
    rating: 4.9,
    reviews: 176,
    photo:
      '/images/doctors/meera-iyer.jpg',
    availableToday: true,
    bio: 'Combines classical homeopathy with lifestyle guidance for women at every life stage.',
  },
  {
    id: 'dr-sanjay-gupta',
    name: 'Dr. Sanjay Gupta',
    registrationNo: 'DMC 39280',
    specialization: 'Skin & Hair',
    qualification: 'BHMS, MD (Hom.)',
    experience: 14,
    fee: 599,
    languages: ['English', 'Hindi'],
    rating: 4.7,
    reviews: 233,
    photo:
      '/images/doctors/sanjay-gupta.jpg',
    availableToday: false,
    bio: 'Treats psoriasis, eczema, acne and hair fall with individualised homeopathic care.',
  },
]

export const consultationTypes = [
  { id: 'video', label: 'Video consultation' },
  { id: 'clinic', label: 'In-person visit' },
]

export const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM',
]

export const footerLinks = {
  quickLinks: [
    { label: 'Find Doctors', href: '#doctors' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Patient Login', href: '#patient-login' },
    { label: 'Doctor Login', href: '#doctor-login' },
  ],
  legal: [
    { label: 'Privacy Policy', href: 'https://hphomeo.com/privacy-policy' },
    { label: 'Terms & Conditions', href: 'https://hphomeo.com/terms-and-conditions' },
  ],
}

export const contact = {
  address: ["Hahnemann's Homoeo Pharmacy,", '53 Boral Main Road, Garia', 'Kolkata 700084'],
  email: 'support@hphomeo.com',
  phone: '+91 9830661016',
  phoneHref: 'tel:+919830661016',
}
