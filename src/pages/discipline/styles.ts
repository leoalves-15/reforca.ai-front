export const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 12,
    color: 'rgb(37, 73, 121)'
  },

  search: {
    padding: 12,
    borderRadius: 12,
    border: '1px solid #E5E7EB',
    marginBottom: 16,
    fontSize: 14,
  },
  containSearch: {
    display: 'flex',
    flexDirection: 'column',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },

  cardObject: {
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },

  cardSkill: {
    padding: "10px",
    cursor: "pointer",
    borderLeft: "3px solid #4CAF50",
    marginBottom: "6px",
    marginTop: "6px",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 4,
    color: 'rgb(37, 73, 121)'
  },

  cardDescription: {
    fontSize: 13,
    color: '#6B7280',
  },
};