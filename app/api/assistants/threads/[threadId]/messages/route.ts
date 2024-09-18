import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { content } = await request.json();

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}

export async function GET(request, {params} ) {
  const { threadId } = params;
    
  if (!threadId) {
    return NextResponse.json(threadId);
  }

  const threadMessages = await openai.beta.threads.messages.list(threadId);

  return NextResponse.json(threadMessages);
}
