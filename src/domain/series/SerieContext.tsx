import { createContext, useContext, useState, useEffect } from 'react';
import { getSerie, saveSerie } from '../../services/storege/serieStorage';
import { isValidGrade } from '../onboarding/onboardingRules';

type SerieContextType = {
    serie: string;
    setSerie: (value: string) => void;
};

const SerieContext = createContext<SerieContextType | null>(null);

export function SerieProvider({ children }: { children: React.ReactNode }) {
    const [serie, setSerieState] = useState('');

    useEffect(() => {
        const savedSerie = getSerie();

        if (savedSerie !== null && isValidGrade(savedSerie)) {
            setSerieState(savedSerie);
        }
    }, []);

    function setSerie(value: string) {
        setSerieState(value);
        saveSerie(value);
    }

    return (
        <SerieContext.Provider value={{ serie, setSerie }}>
            {children}
        </SerieContext.Provider>
    );
}

export function useSerie() {
    const context = useContext(SerieContext);
    if (!context) {
        throw new Error('useSerie must be used within SerieProvider');
    }
    return context;
}