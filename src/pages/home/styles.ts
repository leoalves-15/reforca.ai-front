import maeComFilho from '../../assets/mae-com-filho.png';

export const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
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
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 0,
    color: '#254979',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 12,
    color: 'rgb(135 , 135 , 135 )',
  },

  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },

  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(151 195 255 / 23%)',
    borderRadius: 16,
    padding: 20,
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },

  icon: {
    fontSize: 32,
    marginRight: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: 500,
    color: '#254979',
  },
};