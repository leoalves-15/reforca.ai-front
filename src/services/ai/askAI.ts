export async function askAI(question: string): Promise<string> {
  const res = await fetch('http://localhost:3001/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question })
  });

  if (!res.ok) {
    throw new Error('Erro ao chamar IA');
  }

  const data = await res.json();

  return data.answer;
}