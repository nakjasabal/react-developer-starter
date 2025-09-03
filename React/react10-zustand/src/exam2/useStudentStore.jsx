import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const logger = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('[Zustand 로그]', ...args);
      set(...args);
    },
    get, api
  );

const useStudentStore = create(
  logger( // logger 시작
    devtools( // devtools 시작
      persist( // persist 시작
        (set) => ({
          students: [{ id: Date.now(), name: '성유겸', isHere: false }],
          count: 1,
          addStudent: (name) =>
            set((state) => ({
              students: [...state.students, { id: Date.now(), name, isHere: false }],
              count: state.count + 1,
            }), false, 'addStudent'),
          deleteStudent: (id) =>
            set((state) => ({
              students: state.students.filter((student) => student.id !== id),
              count: state.count - 1,
            }), false, 'deleteStudent'),
          toggleAttendance: (id) =>
            set((state) => ({
              students: state.students.map((student) =>
                student.id === id ? { ...student, isHere: !student.isHere } : student
              ),
            }), false, 'toggleAttendance'),
        }),
        { name: 'student-storage', }
      ), // persist 끝
      { name: 'StudentStore' }
    ) // devtools 끝
  ) // logger 끝
);

export default useStudentStore;
