import { create } from 'zustand'

interface RegisterModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useHookModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useHookModal
