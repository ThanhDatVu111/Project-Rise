import { db } from "@/configs/db";
import {
  CHAPTER_NOTES_TABLE,
  STUDY_TYPE_CONTENT_TABLE,
} from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { courseId, studyType } = await req.json(); // Get The Study Type from The Request

  if (studyType == "ALL") {
    const notes = await db
      .select()
      .from(CHAPTER_NOTES_TABLE)
      .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

    // Get The All Other Study Type Records
    // const contentList = await db
    //   .select()
    //   .from(STUDY_TYPE_CONTENT_TABLE)
    //   .where(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId));

    const result = {
      notes: notes,
      flashcard: [],
      quiz: [],
      qa: [],
    };
    return NextResponse.json(result);
  }
}
  
  // } else if (studyType == "notes") {
  //   const notes = await db
  //     .select()
  //     .from(CHAPTER_NOTES_TABLE)
  //     .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

  //   return NextResponse.json(notes);
  // } else {
  //   const result = await db
  //     .select()
  //     .from(STUDY_TYPE_CONTENT_TABLE)
  //     .where(
  //       and(
  //         eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId),
  //         eq(STUDY_TYPE_CONTENT_TABLE.type, studyType)
  //       )
  //     );

  //   return NextResponse.json(result[0] ?? []);
  // }
