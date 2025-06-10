import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from '../contexts/ThemeContext';
import ThemedBox from '../contexts/ThemedBox';

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>테마 전환</button>;
};

const UseContextExam = () => {
  return (<>
    <h2>useContext 사용하기</h2>
    <ThemeProvider>      
      <ThemeToggleButton />
      <ThemedBox />
    </ThemeProvider>
  </>);
}

export default UseContextExam;