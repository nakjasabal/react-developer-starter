import Stats from './Stats';
import Stopwatch from './Stopwatch';
import usePlayerStore from '../zustand/usePlayerStore';

export default function Header(props) {
  const {title} = usePlayerStore();
  return (<>
    <header className="header">
			<Stats />
			<h1 className="h1">{title}</h1>
			<Stopwatch></Stopwatch>
		</header>
  </>);
} 