export let assistantId = ""; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_ID;
}

export let threadId = ""

if (threadId === "") {
  threadId = process.env.NEXT_PUBLIC_THREAD_ID;
}