export default {
  demoLabel: "Tutor",
  demoIcon: "book-open",
  meta: {
    title: "Jovan Ahmed – Math & Science Tutor",
    description:
      "Small-batch Math, Physics, Chemistry and English classes for SSC and HSC. Join a free demo class.",
  },
  theme: { accent: "#f43f5e", accent2: "#fb923c" },
  ui: {
    nav: "pill",
    pattern: "notebook",
    eyebrow: "pill",
    align: "center",
    radius: "28px",
    font: "round",
  },
  brand: { name: "Jovan Ahmed", navCta: "Join a Batch" },
  contact: {
    phone: "8801740000000",
    whatsapp: "8801740000000",
    email: "jovan.tutor@example.com",
    address: "House 21, Road 3, Shalshiri, Rajshahi",
    socials: [
      { label: "Facebook", icon: "facebook", url: "#" },
      { label: "YouTube", icon: "youtube", url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" },
    ],
  },
  sections: [
    {
      type: "heroOrbit",
      id: "home",
      badge: "Math & Science Tutor • 10 years",
      headline: "Learning that makes every student confident",
      highlight: "confident",
      subtitle:
        "Small batches, simple explanations and weekly practice tests, so your child understands the subject instead of memorising it.",
      photo: "/images/tutor.jpg",
      ctas: [
        { label: "Free Demo Class", href: "@whatsapp", icon: "calendar-check" },
        {
          label: "View Subjects",
          href: "#subjects",
          icon: "arrow-right",
          variant: "ghost",
        },
      ],
      trust: [
        { icon: "users", text: "800+ students taught" },
        { icon: "award", text: "95% got GPA 5 in SSC/HSC" },
      ],
      subjects: [
        { icon: "calculator", label: "Math" },
        { icon: "atom", label: "Physics" },
        { icon: "flask-conical", label: "Chemistry" },
        { icon: "languages", label: "English" },
      ],
    },

    {
      type: "about",
      variant: "facts",
      id: "about",
      nav: "About",
      eyebrow: "About the teacher",
      title: "Hello, I'm Jovan",
      text: [
        "I have taught SSC and HSC students for over ten years. My goal is to make hard topics feel easy and to help every child believe they can do well.",
        "Every batch is small so each student gets individual attention, regular feedback and doubt-solving support.",
      ],
      tags: [
        "Concept-based",
        "Weekly tests",
        "Doubt solving",
        "Parent updates",
      ],
      facts: [
        {
          icon: "graduation-cap",
          label: "Education",
          value: "MSc in Physics, Rajshahi University",
        },
        { icon: "clock", label: "Experience", value: "10+ years" },
        { icon: "users", label: "Batch size", value: "Maximum 8 students" },
        { icon: "video", label: "Mode", value: "Offline & online" },
      ],
      stats: [
        { value: "800+", label: "Students" },
        { value: "95%", label: "GPA 5" },
        { value: "10+", label: "Years" },
      ],
    },

    {
      type: "cards",
      variant: "badges",
      id: "subjects",
      nav: "Subjects",
      eyebrow: "Subjects",
      title: "What I teach",
      items: [
        {
          icon: "calculator",
          title: "Mathematics",
          text: "Class 9 to 12, with problem-solving practice",
        },
        {
          icon: "atom",
          title: "Physics",
          text: "Concepts, numericals and board questions",
        },
        {
          icon: "flask-conical",
          title: "Chemistry",
          text: "Reactions explained step by step",
        },
        {
          icon: "languages",
          title: "English",
          text: "Grammar, writing and speaking confidence",
        },
      ],
    },

    {
      type: "gallery",
      id: "gallery",
      nav: "Gallery",
      eyebrow: "Inside the classroom",
      title: "Where learning happens",
      subtitle:
        "Real classes, real students. Replace these with your own photos.",
      items: [
        {
          icon: "users",
          title: "Group class",
          text: "Small batch of 8",
          image: "/images/group-class.png",
        },
        {
          icon: "pencil",
          title: "Practice test",
          image: "/images/practice-test.png",
        },
        {
          icon: "book-open",
          title: "Study notes",
          image: "/images/study-notes.png",
        },
        {
          icon: "award",
          title: "Result celebration",
          text: "Our GPA 5 achievers",
          image: "/images/result-celebration.png",
        },
        {
          icon: "video",
          title: "Online class",
          image: "/images/online-class.png",
        },
        {
          icon: "lightbulb",
          title: "Doubt solving",
          image: "/images/doubt-solving.png",
        },
      ],
    },

    {
      type: "schedule",
      id: "routine",
      nav: "Routine",
      eyebrow: "Class routine",
      title: "Weekly batch schedule",
      items: [
        { day: "Sat, Mon, Wed (Class 9–10)", time: "4:00 PM – 5:30 PM" },
        { day: "Sun, Tue, Thu (Class 11–12)", time: "5:30 PM – 7:00 PM" },
        { day: "Friday (Doubt solving)", time: "10:00 AM – 12:00 PM" },
      ],
      place: "House 21, Road 3, Shalshiri, Rajshahi",
      note: "Free demo class available. New batches start on the 1st of every month.",
      cta: { label: "Book demo class", href: "@whatsapp" },
    },

    {
      type: "pricing",
      id: "fees",
      nav: "Fees",
      eyebrow: "Fees",
      title: "Simple monthly fees",
      subtitle: "No admission fee. Pay month by month.",
      items: [
        {
          name: "Group Batch",
          price: "৳1,500",
          period: "/subject/month",
          text: "Small batch, 8 students maximum.",
          features: [
            "12 classes per month",
            "Weekly test",
            "Doubt-solving class",
            "Monthly parent report",
          ],
          button: { label: "Join batch", href: "@whatsapp" },
        },
        {
          name: "Private Home Tutoring",
          price: "৳4,000",
          period: "/subject/month",
          text: "One-to-one attention at home.",
          featured: true,
          features: [
            "3 classes per week",
            "Personal study plan",
            "Exam preparation",
            "Daily homework check",
            "Parent progress call",
          ],
          button: { label: "Book tutor", href: "@whatsapp" },
        },
        {
          name: "Online Batch",
          price: "৳1,200",
          period: "/subject/month",
          text: "Live classes from anywhere.",
          features: [
            "Live Zoom classes",
            "Recorded lessons",
            "Weekly online test",
            "WhatsApp doubt support",
          ],
          button: { label: "Join online", href: "@whatsapp" },
        },
      ],
    },

    {
      type: "testimonials",
      variant: "featured",
      id: "reviews",
      nav: "Reviews",
      eyebrow: "Results",
      title: "Students and parents love it",
      items: [
        {
          name: "Mrs. Shirin Sultana",
          role: "Parent of a Class 10 student",
          text: "My son was afraid of Math. After three months he started enjoying it and got A+ in the half-yearly exam.",
        },
        {
          name: "Nabila Islam",
          role: "HSC student",
          text: "Her Physics classes are very clear. I finally understand numericals.",
        },
        {
          name: "Mr. Kamal Hossain",
          role: "Parent",
          text: "Weekly updates keep us informed. Very responsible teacher.",
        },
      ],
    },

    {
      type: "faq",
      id: "faq",
      eyebrow: "FAQ",
      title: "Questions parents ask",
      items: [
        {
          q: "Is there a free demo class?",
          a: "Yes. Your child can attend one demo class for free before deciding to join.",
        },
        {
          q: "How many students are in a batch?",
          a: "A maximum of 8 students so everyone can ask questions and get feedback.",
        },
        {
          q: "Do you provide study materials?",
          a: "Yes. Printed notes and weekly practice sheets are included in the fee.",
        },
        {
          q: "Are online classes available?",
          a: "Yes. Live online batches run on the same routine with recordings for revision.",
        },
      ],
    },

    {
      type: "contact",
      variant: "split",
      id: "contact",
      nav: "Contact",
      eyebrow: "Contact",
      title: "Join the next batch",
      subtitle:
        "Message us your class and subject, and we will share the batch details.",
      buttonLabel: "Send on WhatsApp",
    },
  ],
};
