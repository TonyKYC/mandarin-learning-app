// Define the data structure
export type QAData = {
  [key: string]: {
    english: {
      question: string;
      answer: string;
    };
    pinyin: {
      question: string;
      answer: string;
    };
    chinese: {
      question: string;
      answer: string;
    };
  };
};
