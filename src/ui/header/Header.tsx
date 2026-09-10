import { styles } from './styles';
import { useNavigate } from 'react-router-dom';
import { useSerie } from '../../domain/series/SerieContext';
import { GRADES } from '../../domain/grades/grades';
import { useBNCC } from '../../hooks/useBncc';

type HeaderProps = {
  variant?: 'home' | 'back' | 'ai';
  title?: string;
};

function BackIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#254979"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function Header({ variant = 'home', title }: HeaderProps) {
  const { serie, setSerie } = useSerie();
  const navigate = useNavigate();

  const bncc = useBNCC(serie);

  function handleChangeSerie(value: string) {
    setSerie(value);
    localStorage.setItem('serie', value);
    navigate(`/home/${value}`);
  }

  const subjectName =
    title && bncc?.disciplines?.[title]?.name
      ? bncc.disciplines[title].name
      : title;

  return (
    <header style={styles.header}>
      
      {variant === 'ai' && (
        <div style={styles.containerBack}>
          <button
            type="button"
            style={styles.backButton}
            onClick={() => navigate(-1)}
          >
            <BackIcon />
          </button>

          <div style={styles.logo}>Reforça.AI</div>
        </div>
      )}

      {variant === 'back' && (
        <div style={styles.containerBack}>
          <button
            type="button"
            style={styles.backButton}
            onClick={() => navigate(-1)}
          >
            <BackIcon />
          </button>

          <span style={styles.title}>
            {subjectName || '...'}
          </span>
        </div>
      )}

      {variant === 'home' && (
        <>
          <div style={styles.logo}>Reforça.AI</div>

          <select
            name="series-header"
            style={styles.select}
            value={serie}
            onChange={(e) => handleChangeSerie(e.target.value)}
          >
            <option value="" disabled>
              Série
            </option>

            {GRADES.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.label}
              </option>
            ))}
          </select>
        </>
      )}

    </header>
  );
}