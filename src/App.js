import React, { useState } from 'react';
import './App.css';

function App() {
  // State for roll number, class, result, student name, and marks
  const [roll, setRoll] = useState('');
  const [className, setClassName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [result, setResult] = useState('');
  const [marks, setMarks] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for roll and class
    if (!roll || !className) {
      alert('দয়া করে রোল নাম্বার এবং ক্লাস সিলেক্ট করুন');
      return;
    }

    // Example of result generation (this could be replaced with a real API call)
    const fetchedResult = getMadrasahResult(roll, className);
    setResult(fetchedResult);

    // Fetch marks for the class and roll number
    const fetchedMarks = getSubjectMarks(roll, className);
    setMarks(fetchedMarks);

    // Add student name based on roll number (mocked here, you can modify this as needed)
    const name = getStudentName(roll);
    setStudentName(name);
  };

  // Function to simulate getting a result based on roll and class
  const getMadrasahResult = (roll, className) => {
    if (className === "১০ম শ্রেণী") {
      return "আপনার ফলাফল : উত্তীর্ণ";
    }
    return "ফলাফল পাওয়া যায়নি";
  };

  // Function to simulate fetching subject-wise marks for 13 subjects
  const getSubjectMarks = (roll, className) => {
    if (className === "১০ম শ্রেণী") {
      const studentMarks = mockMarksData[roll - 1]; // Use roll number (1-based index)
      return studentMarks || [];
    }
    return [];
  };

  // Function to simulate getting student name based on roll number
  const getStudentName = (roll) => {
    return mockStudentNames[roll - 1] || "নাম পাওয়া যায়নি";
  };

  // Mocked data for student names in ৯ম শ্রেণী
  const mockStudentNames = [
    "জাকিয়া সুলতানা লিমা", "তরিকুল ইসলাম শেখ ", "মোঃ সজিব গাজী", "নাইমুল ইসলাম", "মুরশিদা খাতুন", "জুবাইদা খাতুন", "রুকাইয়া খাতুন", "ফারিয়া খাতুন", "মিকাইল", "অলিজা খাতুন",
    "ফারজানা খাতুন", "ফাতেমা খাতুন", "তানিয়া খাতুন", "শারমিন খাতুন", "মুহাইমিনুল", "রুকাইয়া খাতুন", "এহসান", "রিয়াদুল ইসলাম", "শাহিনা খাতুন", "আব্দুল্লাহ",
    "হাসিবা খাতুন", "রুপা", "শাহিন", "আল ইমরান", "ফাহিম", "জাকোয়ান", "সাব্বির"
  ];

  // Mocked marks data for 27 students in ৯ম শ্রেণী
  const mockMarksData = [
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 68 }, { subject: 'হাদিস শরিফ', marks: 85 }, { subject: 'আকাইদ ও ফিকাহ', marks: 65 },
      { subject: 'আরবি ১ম পত্র', marks: 60 }, { subject: 'আরবি ২য় পত্র', marks: 48 }, { subject: 'বাংলা', marks: 87 },
      { subject: 'ইংরেজি', marks: 65 }, { subject: 'গণিত', marks: 59 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 86 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 70 }, { subject: 'জীবন ও জীবিকা', marks: 83 }, { subject: 'বিজ্ঞান', marks: 90 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 81 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 85 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 72 }, { subject: 'হাদিস শরিফ', marks: 65 }, { subject: 'আকাইদ ও ফিকাহ', marks: 46 },
      { subject: 'আরবি ১ম পত্র', marks: 37 }, { subject: 'আরবি ২য় পত্র', marks: 65 }, { subject: 'বাংলা', marks: 75 },
      { subject: 'ইংরেজি', marks: 79 }, { subject: 'গণিত', marks: 80 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 80 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 84 }, { subject: 'জীবন ও জীবিকা', marks: 82 }, { subject: 'বিজ্ঞান', marks: 87 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 78 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 84 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 49 }, { subject: 'হাদিস শরিফ', marks: 57 }, { subject: 'আকাইদ ও ফিকাহ', marks: 52 },
      { subject: 'আরবি ১ম পত্র', marks: 36 }, { subject: 'আরবি ২য় পত্র', marks: 52 }, { subject: 'বাংলা', marks: 80 },
      { subject: 'ইংরেজি', marks: 65 }, { subject: 'গণিত', marks: 83 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 84 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 70 }, { subject: 'জীবন ও জীবিকা', marks: 62 }, { subject: 'বিজ্ঞান', marks: 85 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 82 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 84 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 61 }, { subject: 'হাদিস শরিফ', marks: 67 }, { subject: 'আকাইদ ও ফিকাহ', marks: 46 },
      { subject: 'আরবি ১ম পত্র', marks: 40 }, { subject: 'আরবি ২য় পত্র', marks: 56 }, { subject: 'বাংলা', marks: 75 },
      { subject: 'ইংরেজি', marks: 64 }, { subject: 'গণিত', marks: 86 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 80 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 69 }, { subject: 'জীবন ও জীবিকা', marks: 60 }, { subject: 'বিজ্ঞান', marks: 84 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 72 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 78 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 66 }, { subject: 'হাদিস শরিফ', marks: 63 }, { subject: 'আকাইদ ও ফিকাহ', marks: 60 },
      { subject: 'আরবি ১ম পত্র', marks: 55 }, { subject: 'আরবি ২য় পত্র', marks: 57 }, { subject: 'বাংলা', marks: 73 },
      { subject: 'ইংরেজি', marks: 63 }, { subject: 'গণিত', marks: 54 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 84 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 68 }, { subject: 'জীবন ও জীবিকা', marks: 60 }, { subject: 'বিজ্ঞান', marks: 60 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 82 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 72 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 55 }, { subject: 'হাদিস শরিফ', marks: 60 }, { subject: 'আকাইদ ও ফিকাহ', marks: 43 },
      { subject: 'আরবি ১ম পত্র', marks: 35 }, { subject: 'আরবি ২য় পত্র', marks: 50 }, { subject: 'বাংলা', marks: 75 },
      { subject: 'ইংরেজি', marks: 65 }, { subject: 'গণিত', marks: 65 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 63 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 70 }, { subject: 'জীবন ও জীবিকা', marks: 62 }, { subject: 'বিজ্ঞান', marks: 83 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 78 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 79 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 58 }, { subject: 'হাদিস শরিফ', marks: 62 }, { subject: 'আকাইদ ও ফিকাহ', marks: 42 },
      { subject: 'আরবি ১ম পত্র', marks: 38 }, { subject: 'আরবি ২য় পত্র', marks: 50 }, { subject: 'বাংলা', marks: 76 },
      { subject: 'ইংরেজি', marks: 64 }, { subject: 'গণিত', marks: 54 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 78 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 68 }, { subject: 'জীবন ও জীবিকা', marks: 51 }, { subject: 'বিজ্ঞান', marks: 84 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 77 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 77 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 59 }, { subject: 'হাদিস শরিফ', marks: 52 }, { subject: 'আকাইদ ও ফিকাহ', marks: 44 },
      { subject: 'আরবি ১ম পত্র', marks: 38 }, { subject: 'আরবি ২য় পত্র', marks: 65 }, { subject: 'বাংলা', marks: 76 },
      { subject: 'ইংরেজি', marks: 66 }, { subject: 'গণিত', marks: 58 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 73 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 71 }, { subject: 'জীবন ও জীবিকা', marks: 45 }, { subject: 'বিজ্ঞান', marks: 75 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 80 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 52 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 52 }, { subject: 'হাদিস শরিফ', marks: 65 }, { subject: 'আকাইদ ও ফিকাহ', marks: 42 },
      { subject: 'আরবি ১ম পত্র', marks: 40 }, { subject: 'আরবি ২য় পত্র', marks: 55 }, { subject: 'বাংলা', marks: 54 },
      { subject: 'ইংরেজি', marks: 58 }, { subject: 'গণিত', marks: 73 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 80 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 63 }, { subject: 'জীবন ও জীবিকা', marks: 61 }, { subject: 'বিজ্ঞান', marks: 72 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 68 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 70 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 62 }, { subject: 'হাদিস শরিফ', marks: 60 }, { subject: 'আকাইদ ও ফিকাহ', marks: 40 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 43 }, { subject: 'বাংলা', marks: 68 },
      { subject: 'ইংরেজি', marks: 52 }, { subject: 'গণিত', marks: 53 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 72 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 57 }, { subject: 'জীবন ও জীবিকা', marks: 55 }, { subject: 'বিজ্ঞান', marks: 84 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 81 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 65 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 56 }, { subject: 'হাদিস শরিফ', marks: 50 }, { subject: 'আকাইদ ও ফিকাহ', marks: 42 },
      { subject: 'আরবি ১ম পত্র', marks: 40 }, { subject: 'আরবি ২য় পত্র', marks: 47 }, { subject: 'বাংলা', marks: 64 },
      { subject: 'ইংরেজি', marks: 58 }, { subject: 'গণিত', marks: 49 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 48 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 63 }, { subject: 'জীবন ও জীবিকা', marks: 55 }, { subject: 'বিজ্ঞান', marks: 83 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 80 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 79 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 53 }, { subject: 'হাদিস শরিফ', marks: 56 }, { subject: 'আকাইদ ও ফিকাহ', marks: 44 },
      { subject: 'আরবি ১ম পত্র', marks: 38 }, { subject: 'আরবি ২য় পত্র', marks: 38 }, { subject: 'বাংলা', marks: 64 },
      { subject: 'ইংরেজি', marks: 60 }, { subject: 'গণিত', marks: 54 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 65 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 65 }, { subject: 'জীবন ও জীবিকা', marks: 48 }, { subject: 'বিজ্ঞান', marks: 77 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 86 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 69 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 42 }, { subject: 'হাদিস শরিফ', marks: 49 }, { subject: 'আকাইদ ও ফিকাহ', marks: 41 },
      { subject: 'আরবি ১ম পত্র', marks: 39 }, { subject: 'আরবি ২য় পত্র', marks: 51 }, { subject: 'বাংলা', marks: 54 },
      { subject: 'ইংরেজি', marks: 58 }, { subject: 'গণিত', marks: 45 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 48 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 65 }, { subject: 'জীবন ও জীবিকা', marks: 42 }, { subject: 'বিজ্ঞান', marks: 77 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 75 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 69 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 52 }, { subject: 'হাদিস শরিফ', marks: 60 }, { subject: 'আকাইদ ও ফিকাহ', marks: 45 },
      { subject: 'আরবি ১ম পত্র', marks: 38 }, { subject: 'আরবি ২য় পত্র', marks: 45 }, { subject: 'বাংলা', marks: 51 },
      { subject: 'ইংরেজি', marks: 50 }, { subject: 'গণিত', marks: 42 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 60 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 55 }, { subject: 'জীবন ও জীবিকা', marks: 35 }, { subject: 'বিজ্ঞান', marks: 69 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 68 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 74 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 49 }, { subject: 'হাদিস শরিফ', marks: 50 }, { subject: 'আকাইদ ও ফিকাহ', marks: 42 },
      { subject: 'আরবি ১ম পত্র', marks: 40 }, { subject: 'আরবি ২য় পত্র', marks: 37 }, { subject: 'বাংলা', marks: 45 },
      { subject: 'ইংরেজি', marks: 51 }, { subject: 'গণিত', marks: 66 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 60 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 63 }, { subject: 'জীবন ও জীবিকা', marks: 43 }, { subject: 'বিজ্ঞান', marks: 66 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 81 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 45 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 59 }, { subject: 'হাদিস শরিফ', marks: 54 }, { subject: 'আকাইদ ও ফিকাহ', marks: 44 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 41 }, { subject: 'বাংলা', marks: 73 },
      { subject: 'ইংরেজি', marks: 51 }, { subject: 'গণিত', marks: 40 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 46 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 56 }, { subject: 'জীবন ও জীবিকা', marks: 53 }, { subject: 'বিজ্ঞান', marks: 57 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 65 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 57 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 44 }, { subject: 'হাদিস শরিফ', marks: 57 }, { subject: 'আকাইদ ও ফিকাহ', marks: 38 },
      { subject: 'আরবি ১ম পত্র', marks: 40 }, { subject: 'আরবি ২য় পত্র', marks: 46 }, { subject: 'বাংলা', marks: 61 },
      { subject: 'ইংরেজি', marks: 52 }, { subject: 'গণিত', marks: 36 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 60 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 57 }, { subject: 'জীবন ও জীবিকা', marks: 38 }, { subject: 'বিজ্ঞান', marks: 53 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 65 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 65 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 44 }, { subject: 'হাদিস শরিফ', marks: 55 }, { subject: 'আকাইদ ও ফিকাহ', marks: 33 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 42 }, { subject: 'বাংলা', marks: 60 },
      { subject: 'ইংরেজি', marks: 49 }, { subject: 'গণিত', marks: 65 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 50 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 54 }, { subject: 'জীবন ও জীবিকা', marks: 51 }, { subject: 'বিজ্ঞান', marks: 70 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 60 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 44 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 48 }, { subject: 'হাদিস শরিফ', marks: 47 }, { subject: 'আকাইদ ও ফিকাহ', marks: 39 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 42 }, { subject: 'বাংলা', marks: 53 },
      { subject: 'ইংরেজি', marks: 50 }, { subject: 'গণিত', marks: 38 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 60 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 56 }, { subject: 'জীবন ও জীবিকা', marks: 49 }, { subject: 'বিজ্ঞান', marks: 72 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 75 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 44 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 47 }, { subject: 'হাদিস শরিফ', marks: 45 }, { subject: 'আকাইদ ও ফিকাহ', marks: 40 },
      { subject: 'আরবি ১ম পত্র', marks: 34 }, { subject: 'আরবি ২য় পত্র', marks: 33 }, { subject: 'বাংলা', marks: 46 },
      { subject: 'ইংরেজি', marks: 42 }, { subject: 'গণিত', marks: 50 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 70 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 47 }, { subject: 'জীবন ও জীবিকা', marks: 45 }, { subject: 'বিজ্ঞান', marks: 53 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 61 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 44 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 57 }, { subject: 'হাদিস শরিফ', marks: 52 }, { subject: 'আকাইদ ও ফিকাহ', marks: 40 },
      { subject: 'আরবি ১ম পত্র', marks: 34 }, { subject: 'আরবি ২য় পত্র', marks: 54 }, { subject: 'বাংলা', marks: 65 },
      { subject: 'ইংরেজি', marks: 65 }, { subject: 'গণিত', marks: 55 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 55 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 70 }, { subject: 'জীবন ও জীবিকা', marks: 0 }, { subject: 'বিজ্ঞান', marks: 88 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 80 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 67 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 45 }, { subject: 'হাদিস শরিফ', marks: 46 }, { subject: 'আকাইদ ও ফিকাহ', marks: 40 },
      { subject: 'আরবি ১ম পত্র', marks: 23 }, { subject: 'আরবি ২য় পত্র', marks: 38 }, { subject: 'বাংলা', marks: 51 },
      { subject: 'ইংরেজি', marks: 64 }, { subject: 'গণিত', marks: 51 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 60 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 69 }, { subject: 'জীবন ও জীবিকা', marks: 43 }, { subject: 'বিজ্ঞান', marks: 73 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 75 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 56 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 52 }, { subject: 'হাদিস শরিফ', marks: 65 }, { subject: 'আকাইদ ও ফিকাহ', marks: 38 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 21 }, { subject: 'বাংলা', marks: 50 },
      { subject: 'ইংরেজি', marks: 45 }, { subject: 'গণিত', marks: 51 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 60 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 53 }, { subject: 'জীবন ও জীবিকা', marks: 39 }, { subject: 'বিজ্ঞান', marks: 54 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 57 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 48 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 41 }, { subject: 'হাদিস শরিফ', marks: 50 }, { subject: 'আকাইদ ও ফিকাহ', marks: 34 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 22 }, { subject: 'বাংলা', marks: 54 },
      { subject: 'ইংরেজি', marks: 42 }, { subject: 'গণিত', marks: 56 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 50 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 40 }, { subject: 'জীবন ও জীবিকা', marks: 33 }, { subject: 'বিজ্ঞান', marks: 52 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 64 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 54 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 41 }, { subject: 'হাদিস শরিফ', marks: 42 }, { subject: 'আকাইদ ও ফিকাহ', marks: 38 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 33 }, { subject: 'বাংলা', marks: 43 },
      { subject: 'ইংরেজি', marks: 47 }, { subject: 'গণিত', marks: 46 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 80 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 52 }, { subject: 'জীবন ও জীবিকা', marks: 51 }, { subject: 'বিজ্ঞান', marks: 65 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 0 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 35 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 37 }, { subject: 'হাদিস শরিফ', marks: 37 }, { subject: 'আকাইদ ও ফিকাহ', marks: 33 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 33 }, { subject: 'বাংলা', marks: 48 },
      { subject: 'ইংরেজি', marks: 42 }, { subject: 'গণিত', marks: 45 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 51 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 47 }, { subject: 'জীবন ও জীবিকা', marks: 35 }, { subject: 'বিজ্ঞান', marks: 56 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 56 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 0 }
    ],
    [
      { subject: 'কুরআন মাজিদ ও তাজভিদ', marks: 47 }, { subject: 'হাদিস শরিফ', marks: 42 }, { subject: 'আকাইদ ও ফিকাহ', marks: 33 },
      { subject: 'আরবি ১ম পত্র', marks: 33 }, { subject: 'আরবি ২য় পত্র', marks: 15 }, { subject: 'বাংলা', marks: 33 },
      { subject: 'ইংরেজি', marks: 37 }, { subject: 'গণিত', marks: 0 }, { subject: 'ডিজিটাল প্রযুক্তি', marks: 40 },
      { subject: 'ইতিহাস ও সামাজিক বিজ্ঞান', marks: 42 }, { subject: 'জীবন ও জীবিকা', marks: 33 }, { subject: 'বিজ্ঞান', marks: 0 },
      { subject: 'শিল্প ও সাংস্কৃতি', marks: 0 }, { subject: 'স্বাস্থ ও সুরক্ষা', marks: 44 }
    ],
    // Continue with similar data for the remaining 25 students
    // (For brevity, I'm only adding 2 students' data here, but you'll add data for all 27 students)
    // Add remaining students' mock marks here...
  ];

  return (
    <div className="App">
      

      {/* Madrasah Name */}
      <h2 className="madrasah-name">শরাফপুর দারুল কুরআন দাখিল মাদ্রাসা</h2>

      <h1>ফলাফল চেক করুন</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="roll">রোল নাম্বার:</label>
          <input 
            type="text" 
            id="roll" 
            placeholder="রোল নাম্বার দিন" 
            value={roll} 
            onChange={(e) => setRoll(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="class">ক্লাস:</label>
          <select 
            id="class" 
            value={className} 
            onChange={(e) => setClassName(e.target.value)}
          >
            <option value="">ক্লাস সিলেক্ট করুন</option>
            <option value="১০ম শ্রেণী">১০ম শ্রেণী</option>
          </select>
        </div>

        <button type="submit">ফলাফল দেখুন</button>
      </form>

      {result && (
        <div className="result">
          {/* Show student name only in the result section */}
          <h3>শিক্ষার্থীর নাম: {studentName}</h3>
          <p>{result}</p>
        </div>
      )}

      {marks.length > 0 && (
        <div className="marks">
          <h3>ফলাফল:</h3>
          <table>
            <thead>
              <tr>
                <th>বিষয়</th>
                <th>মার্কস</th>
              </tr>
            </thead>
            <tbody>
              {marks.map((mark, index) => (
                <tr key={index}>
                  <td>{mark.subject}</td>
                  <td>{mark.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

{/* Notice for ongoing work */}
      <div className="notice-banner">
        <p>ওয়েব সাইটের কাজ চলমান। দয়া করে অপেক্ষা করুন।</p>
      </div>
  <div className="notice-banner">
        <p>ফলাফল দেখার নিয়মঃ ৯ম শ্রেণীতে অংশগ্রহণকারী পরীক্ষার্থীরা শ্রেণী ১০ম সিলেক্ট করবে।</p>
      </div>

      {/* Footer */}
      <footer>
        <p>Developed by ♡<a href="https://www.facebook.com/s.s0han" target="_blank" rel="noopener noreferrer">Sohan</a></p>
      </footer>
    </div>
  );
}

export default App;
