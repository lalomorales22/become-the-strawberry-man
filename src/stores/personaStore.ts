import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Persona {
  id: string;
  name: string;
  bio: string;
  originStory: string;
  primarySymbol: string;
  secondarySymbols: string;
  symbolMeanings: string;
  voiceStyle: string;
  signaturePhrases: string;
  usesLowercase: boolean;
  usesCrypticQuestions: boolean;
  usesEllipses: boolean;
  visualTheme: string;
  colorPalette: string;
  imageStyle: string;
}

const defaultPersona: Persona = {
  id: 'strawberry-man',
  name: 'The Strawberry Man',
  bio: 'Tending the patch. The soil remembers.',
  originStory: '',
  primarySymbol: 'strawberry',
  secondarySymbols: 'vine,seed,soil,frost',
  symbolMeanings: '',
  voiceStyle: 'cryptic',
  signaturePhrases: 'The seeds are sown. Not all will see the fruit.',
  usesLowercase: true,
  usesCrypticQuestions: true,
  usesEllipses: false,
  visualTheme: 'nature',
  colorPalette: 'strawberry',
  imageStyle: 'Abstract nature imagery with subtle patterns and hidden details.',
};

interface PersonaStore {
  personas: Persona[];
  currentPersona: Persona;
  addPersona: (persona: Persona) => void;
  setCurrentPersona: (persona: Persona) => void;
  updatePersona: (id: string, updates: Partial<Persona>) => void;
}

export const usePersonaStore = create<PersonaStore>()(
  persist(
    (set) => ({
      personas: [defaultPersona],
      currentPersona: defaultPersona,
      addPersona: (persona) => set((state) => ({
        personas: [...state.personas, persona]
      })),
      setCurrentPersona: (persona) => set({ currentPersona: persona }),
      updatePersona: (id, updates) => set((state) => {
        const updatedPersonas = state.personas.map(p => 
          p.id === id ? { ...p, ...updates } : p
        );
        const updatedCurrentPersona = state.currentPersona.id === id
          ? { ...state.currentPersona, ...updates }
          : state.currentPersona;
        
        return {
          personas: updatedPersonas,
          currentPersona: updatedCurrentPersona,
        };
      }),
    }),
    {
      name: 'strawberry-man-personas',
      onRehydrateStorage: () => ((state) => {
        if (!state) return;
        
        // Ensure currentPersona is never null
        if (!state.currentPersona) {
          state.currentPersona = defaultPersona;
        }
      }),
    }
  )
);