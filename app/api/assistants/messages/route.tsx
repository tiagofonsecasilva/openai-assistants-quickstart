import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";

// upload file to assistant's vector store
// export async function POST(request) {
//   const formData = await request.formData(); // process file as FormData
//   const file = formData.get("file"); // retrieve the single file from FormData
//   const vectorStoreId = await getOrCreateVectorStore(); // get or create vector store

//   // upload using the file stream
//   const openaiFile = await openai.files.create({
//     file: file,
//     purpose: "assistants",
//   });

//   // add file to vector store
//   await openai.beta.vectorStores.files.create(vectorStoreId, {
//     file_id: openaiFile.id,
//   });
//   return new Response();
// }

// list files in assistant's vector store
export async function GET() {

  const threadMessages = await openai.beta.threads.messages.list(
    process.env.THREAD_ID
  );

  return Response.json(threadMessages);
}
