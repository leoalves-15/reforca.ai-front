// import { Record } from "react"

export const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 16,
    paddingBottom: 80,
    backgroundColor: '#FAFAFA',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  },

  contextCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    border: '1px solid #E5E7EB',
  },

  badge: {
    backgroundColor: '#4F46E5',
    color: '#FFF',
    fontSize: 10,
    fontWeight: 800,
    padding: '4px 8px',
    borderRadius: 6,
    marginBottom: 10,
    display: 'inline-block',
  },

  title: {
    fontSize: 22,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 1.2,
  },

  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 1.5,
  },

  steps: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },

  parentCard: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 16,
    borderLeft: '6px solid #4F46E5',
  },

  stepCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },

  icon: {
    fontSize: 24,
  },

  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    backgroundColor: '#4F46E5',
    color: '#FFF',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },

  stepTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#111827',
  },

  actionsRow: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'center',
  },

  tipBox: {
    marginTop: 32,
    backgroundColor: '#FFF7ED',
    borderRadius: 16,
    padding: 16,
    display: 'flex',
    gap: 12,
    color: '#7C2D12',
    border: '1px dashed #FED7AA',
  },
  stepText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 1.6,
    margin: 0,
    whiteSpace: 'pre-wrap', 
  },

  markdownContainer: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 1.6,
  },

  desafioBox: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    border: '1px solid #F3F4F6',
    marginBottom: 16
  },

  bubble: {
    backgroundColor: '#F3F4F6',
    padding: '8px 16px', 
    borderRadius: '0px 16px 16px 16px',
    marginBottom: 8,
  },

  primaryButton: {
    backgroundColor: '#10B981',
    color: '#FFF',
    border: 'none',
    borderRadius: 12,
    padding: '14px 24px',
    fontSize: 16,
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
    marginTop: 10,
    boxShadow: '0 4px 0 #059669', 
  },

  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    gap: 12,
    color: '#4F46E5',
    fontWeight: 600
  }
};