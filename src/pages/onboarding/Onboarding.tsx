import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../hooks/useOnboarding';
import { styles } from './styles';
import { GRADES } from '../../domain/grades/grades';

export default function Onboarding() {

  const { serie, setSerie, submit } = useOnboarding();
  const navigate = useNavigate();

  function handleStart() {
    if (submit()) {
      navigate('/home/' + serie)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.imagePlaceholder} />

      <h1 style={styles.title}>
        Apoio para você ajudar seu filho a aprender
      </h1>

      <p style={styles.subtitle}>
        Conteúdos organizados por série escolar, com explicações simples
        para pais e responsáveis.
      </p>

      <div style={styles.containInfos}>
        <p style={styles.label}>
          Qual é a série do seu filho?
        </p>

        <select
          name="serie"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
          style={styles.select}
        >
          <option value="">Selecione a série</option>

          {GRADES.map((grade) => (
            <option key={grade.id} value={grade.id}>
              {grade.label}
            </option>
          ))}
        </select>

        <small style={styles.helper}>
          Você pode alterar essa opção depois.
        </small>

        <button
          onClick={handleStart}
          disabled={!serie}
          style={{
            ...styles.button,
            opacity: serie ? 1 : 0.5,
          }}
        >
          Começar agora
        </button>
      </div>

      <p style={styles.footerText}>
        Este aplicativo não substitui a escola ou o professor.
        Ele é um apoio para o estudo em casa.
      </p>
    </div>
  );
}