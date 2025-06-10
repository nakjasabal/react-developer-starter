import { create } from 'zustand';

const useStudentStore = create((set) => ({
  students: [{ id: Date.now(), name: '성유겸', isHere: false }],
  count: 1,
  addStudent: (name) => set((state) => ({
      students: [...state.students, { id: Date.now(), name, isHere: false }],
      count: state.count + 1,
    })
  ),
  deleteStudent: (id) => set((state) => ({
      students: state.students.filter((student) => student.id !== id),
      count: state.count - 1,
    })
  ),
  toggleAttendance: (id) => set((state) => ({
      students: state.students.map((student) =>
        student.id === id ? { ...student, isHere: !student.isHere } : student
      ),
    })
  ),
}));

export default useStudentStore;
