export const styles = {
  container: {
    height: '100%',
    maxWidth: 700,
    margin: '0 auto',
    padding: 20,
    display: 'flex',
    flexDirection: 'column' as const,
  },

  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20
  },

  chat: {
    overflowY: 'auto' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 10,
    marginBottom: 20
  },

  userMessage: {
    alignSelf: 'flex-end',
    background: '#254979',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    maxWidth: '70%',
  },

  aiMessage: {
    alignSelf: 'flex-start',
    background: '#eee',
    padding: 12,
    borderRadius: 10,
    maxWidth: '70%'
  },

  inputContainer: {
    display: 'flex',
    gap: 10,
    position: 'fixed' as const,
    width: "80%",
    bottom: 30
  },

  input: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    border: '1px solid #ccc'
  },

  button: {
    background: '#254979',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: 8,
    cursor: 'pointer'
  }
};