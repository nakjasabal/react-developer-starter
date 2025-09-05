import { create } from "zustand";

const useCounterStore = create((set, get) => ({
  count: 0,
  increment: () => {
    const current = get().count;
    if (current >= 10) {
      alert('최대값은 10입니다');
      return;
    }
    set({ count: current + 1 });
  },
  decrement: () => {
    const current = get().count;
    if (current <= 0){
      alert('최소값은 0입니다');
      return;
    }
    set({ count: current - 1 });
  },
  reset: () => set({ count: 0 })
}));

export default useCounterStore;
