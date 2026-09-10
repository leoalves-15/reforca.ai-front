import { useState } from 'react';
import { styles } from './styles';
import { askAI } from '../../services/ai/askAI';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!question.trim() || loading) return;

    const q = question;

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: q }
    ];

    setMessages(newMessages);
    setQuestion('');
    setLoading(true);

    try {
      const answer = await askAI(q);

      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: answer
        }
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Erro ao falar com a IA.'
        }
      ]);
    }

    setLoading(false);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Faça sua pergunta</h1>

      <div style={styles.chat}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={
              msg.role === 'user'
                ? styles.userMessage
                : styles.aiMessage
            }
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div style={styles.aiMessage}>
            Pensando...
          </div>
        )}
      </div>

      <div style={styles.inputContainer}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAsk();
          }}
          placeholder="Pergunte algo..."
          style={styles.input}
        />

        <button
          onClick={handleAsk}
          style={styles.button}
          disabled={loading}
        >
          {loading ? '...' : 'Enviar'}
        </button>
      </div>
    </div>
  );
}