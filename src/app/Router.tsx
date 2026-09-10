// src/app/Router.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import Onboarding from '../pages/onboarding/Onboarding';
import Home from '../pages/home/Home';
import EducationalContent from '../pages/educationalContent/EducationalContent';
import Assistant from '../pages/assistant/assistant';
import Discipline from '../pages/discipline/Discipline';
import { SerieProvider } from '../domain/series/SerieContext';
// import { BNCCProvider } from '../domain/bncc-context/BnccContext';

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* <BNCCProvider> */}
        <SerieProvider>
          <Routes>
            {/* Rota SEM layout */}

            {/* Rotas COM layout */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Onboarding />} />
              <Route path="/home/:serie" element={<Home />} />
              <Route path="/assistente" element={<Assistant />} />
              <Route path="/disciplina/:serie/:disciplinaId" element={<Discipline />} />
              <Route path="/conteudo/:disciplinaId/:serie/:objetoId/:habilidadeId" element={<EducationalContent />} />
            </Route>
          </Routes>
        </SerieProvider>
      {/* </BNCCProvider> */}
    </BrowserRouter>
  );
}