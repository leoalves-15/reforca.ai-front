export const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderRadius: '15px 15px 0 0',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#edf2fd',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 10,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12,
    color: '#254979',
    textDecoration: 'none',
  },

  icon: {
    fontSize: 20,
    marginBottom: 4,
  },

  active: {
    color: '#254979',
    fontWeight: 600,
  },
};