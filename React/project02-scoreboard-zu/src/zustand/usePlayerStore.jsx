import { create } from 'zustand';

const usePlayerStore = create((set) => ({
	title : '스코어보드',
	playerData : [
		{idx: 1, name: '홍길동', score: 10},
    {idx: 2, name: '손오공', score: 20},
    {idx: 3, name: '유비', score: 30},
    {idx: 4, name: '달타냥', score: 40},
	],
	nextVal : 5, 
	addPlayerProcess: (pName) => {
		//console.log('추가', pName);
		set((state) => ({
			playerData : [...state.playerData, {idx: state.nextVal, name: pName, score: 0}],
			nextVal : state.nextVal + 1, 
		}));
	},
	scoreChangeProcess: (flag, pIdx) => {
		//console.log('점수변경', flag, pIdx);
		let changeScore = (flag==='+') ? 5 : -5;
		set((state) => ({
			playerData : state.playerData.map(row => {
				return (row.idx===pIdx) ? {...row, score: row.score+changeScore} : row
			})
		}));
	},
	deletePlayerProcess: (pIdx) => {
		//console.log('삭제', pIdx);
		if(confirm('삭제할까요?')){
			set((state) => ({
				playerData : state.playerData.filter(row => row.idx!==pIdx)
			}));
		}
	},
	editPlayerProcess: (pIdx, pName) => {
		//console.log('수정', pIdx, pName);
		set((state) => ({
			playerData : state.playerData.map(row => {
				return (row.idx===pIdx) ? {...row, name: pName} : row
			})
		}));
	},
}));

export default usePlayerStore;