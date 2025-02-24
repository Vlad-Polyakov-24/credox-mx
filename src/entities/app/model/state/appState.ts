import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IAppState {
	isMobileNav: boolean;
	set: (newState: Partial<IAppState>) => void;
}

const appState = create<IAppState>()(
	devtools((set) => ({
		isMobileNav: false,
		set: (newState) => set((state) => ({ ...state, ...newState })),
	})),
);

export { appState };
