import { createClient } from "@supabase/supabase-js";
import { QAData } from "@/app/data-provider";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type QuestionRow = {
  id: number;
  english_question: string;
  english_answer: string;
  pinyin_question: string;
  pinyin_answer: string;
  chinese_question: string;
  chinese_answer: string;
};

export async function fetchAllQuestions(): Promise<QAData> {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .order("id");

  if (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }

  // Transform the flat data structure into the QAData format
  return (data as QuestionRow[]).reduce((acc, row) => {
    acc[row.id.toString()] = {
      english: {
        question: row.english_question,
        answer: row.english_answer,
      },
      pinyin: {
        question: row.pinyin_question,
        answer: row.pinyin_answer,
      },
      chinese: {
        question: row.chinese_question,
        answer: row.chinese_answer,
      },
    };
    return acc;
  }, {} as QAData);
}
