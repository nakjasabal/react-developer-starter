function NavList(props){
	return (
    <nav>
			<a href="/" onClick={function(event){
				event.preventDefault();
				props.onChangeMode();
			}}>글쓰기</a>
    </nav>
	)
}
export default NavList;