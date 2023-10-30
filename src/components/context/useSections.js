import { create } from "zustand";

const useSections = create((set, get) => ({
    isProjectSectionActive: false,
    isProductSectionActive: false,

    toggleProjectActive: () => {
        set((state) => ({ isProjectSectionActive: !state.isProjectSectionActive }))
    },
    toggleProductActive: () => {
        set((state) => ({ isProductSectionActive: !state.isProductSectionActive }))
    },
}))

export default useSections