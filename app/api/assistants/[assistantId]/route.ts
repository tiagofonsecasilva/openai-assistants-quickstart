import { openai } from "@/app/openai";

export async function GET({assistantId}) {

    const assistantInfo = await openai.beta.assistants.retrieve(
        assistantId
    );
  
    return Response.json(assistantInfo);
  }