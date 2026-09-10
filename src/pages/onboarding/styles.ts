import maeComFilho from '../../assets/mae-com-filho.png';


export const styles: Record<string, React.CSSProperties> = {
  container: {
    height: '100%',
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },

  imagePlaceholder: {
    backgroundImage: `url(${maeComFilho})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    maxWidth: 280,
    height: 180,
    borderRadius: 16,
    marginBottom: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 0,
    color: '#254979',
  },

  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 24,
    maxWidth: 320,
  },

  containInfos: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 24,
    alignItems: 'center',
    borderTop: '1px solid rgb(195 , 195 , 195 )',
    borderBottom: '1px solid rgb(195 , 195 , 195 )',
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 8,
  },

  select: {
    width: '100%',
    maxWidth: 320,
    padding: '12px',
    fontSize: 16,
    borderRadius: 8,
    border: '1px solid rgb(234, 234, 234)',
    marginBottom: 12,
    marginTop: 12
  },

  helper: {
    fontSize: 12,
    color: '#777',
    marginBottom: 24,
  },

  button: {
    width: '100%',
    maxWidth: 320,
    padding: '14px',
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#2563EB', // azul educacional
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    marginBottom: 24,
  },

  footerText: {
    fontSize: 11,
    color: '#888',
    maxWidth: 320,
  },
};