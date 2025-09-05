import { useState } from "react";

function ArticleEdit(props){
	const [title, setTitle] = useState(props.selectRow.title);
	const [writer, setWriter] = useState(props.selectRow.writer);
	const [contents, setContents] = useState(props.selectRow.contents);
	return (
		<article>
			<form onSubmit={(event)=>{
				event.preventDefault();
				let title = event.target.title.value;
				let writer = event.target.writer.value;
				let contents = event.target.contents.value;
				props.editAction(title, writer, contents);
			}}>
				<table id="boardTable">
					<tbody>
					<tr>
						<th>작성자</th>
						<td><input type='text' name="writer" value={writer} 
							onChange={(event)=>{
								setWriter(event.target.value);
							}}/></td>
					</tr>
					<tr>
						<th>제목</th>
						<td><input type='text' name="title" value={title} 
							onChange={(event)=>{
									setTitle(event.target.value);
							}} 
						/></td>
					</tr>
					<tr>
						<th>내용</th>
						<td><textarea name="contents" cols='22' rows='3' value={contents}
							onChange={(event)=>{
									setContents(event.target.value);
							}}></textarea></td>
					</tr>
					</tbody>
				</table>
				<input type="submit" value="수정하기"></input>
			</form>
		</article>
	);
}
export default ArticleEdit;
