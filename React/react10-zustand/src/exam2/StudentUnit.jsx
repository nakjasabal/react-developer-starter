import useStudentStore from "./useStudentStore";

const StudentUnit = ({ id, name, isHere }) => {
  const { deleteStudent, toggleAttendance } = useStudentStore();

  let nameStyle = { 
    textDecoration: isHere ? 'line-through' : 'none', 
    color: isHere ? 'gray' : 'black', cursor : 'pointer' 
  };
  return (
    <li>
      <span style={nameStyle} onClick={() => toggleAttendance(id)} >
        {name}
      </span>
      <button onClick={() => {
          if (window.confirm('삭제할까요?')) {
            deleteStudent(id);
          }
      }}>삭제</button>
    </li>
  );
};

export default StudentUnit;