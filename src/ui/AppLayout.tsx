import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { useMatch } from "react-router-dom"

export default function AppLayout() {
  const match = useMatch('/disciplina/:serie/:disciplinaId')

  let disciplinaId = match?.params.disciplinaId;
  const location = useLocation();

  const isHome = useMatch('/home/:disciplinaId');
  const isOnboarding = location.pathname === '/';
  const isDiscipline = location.pathname.startsWith('/disciplina');
  const isContent = location.pathname.startsWith('/conteudo');
  const isAi = location.pathname === '/assistente';
  const hiddenFooter = isOnboarding || isAi;
  const showSimpleHeader = isHome || isOnboarding;
  const showBackHeader = isDiscipline || isContent || isAi;

  return (
    <>
      {showSimpleHeader && <Header />}

      {showBackHeader && (
        <Header
          variant={isAi ? 'ai' : 'back'}
          title={isDiscipline ? disciplinaId : 'Conteúdo Educacional'}
        />
      )}
      <main style={{ paddingBottom: 60 }}>
        <Outlet />
      </main>

      {!hiddenFooter && <Footer />}
    </>
  );
}