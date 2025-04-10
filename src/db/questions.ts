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
  is_completed: boolean;
};

/*
 * Questions
 */
export async function fetchAllQuestions(): Promise<{
  data: QAData;
  progress: Record<string, boolean>;
}> {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .order("id");

  if (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }

  // Transform the flat data structure into the QAData format and extract progress
  const qaData: QAData = {};
  const progress: Record<string, boolean> = {};

  (data as QuestionRow[]).forEach((row) => {
    qaData[row.id.toString()] = {
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
    progress[row.id.toString()] = row.is_completed || false;
  });

  return { data: qaData, progress };
}

export async function createQuestion(
  question: QAData[keyof QAData]
): Promise<number> {
  // First, get the current max ID
  const { data: maxIdData, error: maxIdError } = await supabase
    .from("questions")
    .select("id")
    .order("id", { ascending: false })
    .limit(1);

  if (maxIdError) {
    console.error("Error fetching max ID:", maxIdError);
    throw maxIdError;
  }

  const nextId = maxIdData && maxIdData.length > 0 ? maxIdData[0].id + 1 : 1;

  // Insert the new question
  const { data, error } = await supabase.from("questions").insert([
    {
      id: nextId,
      english_question: question.english.question,
      english_answer: question.english.answer,
      pinyin_question: question.pinyin.question,
      pinyin_answer: question.pinyin.answer,
      chinese_question: question.chinese.question,
      chinese_answer: question.chinese.answer,
      is_completed: false,
    },
  ]);

  if (error) {
    console.error("Error creating question:", error);
    throw error;
  }

  return nextId;
}

export async function updateQuestion(
  id: number,
  question: QAData[keyof QAData]
): Promise<void> {
  const { error } = await supabase
    .from("questions")
    .update({
      english_question: question.english.question,
      english_answer: question.english.answer,
      pinyin_question: question.pinyin.question,
      pinyin_answer: question.pinyin.answer,
      chinese_question: question.chinese.question,
      chinese_answer: question.chinese.answer,
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating question:", error);
    throw error;
  }
}

export async function updateQuestionProgress(
  questionId: number,
  isCompleted: boolean
): Promise<void> {
  const { error } = await supabase
    .from("questions")
    .update({ is_completed: isCompleted })
    .eq("id", questionId);

  if (error) {
    console.error("Error updating question progress:", error);
    throw error;
  }
}
