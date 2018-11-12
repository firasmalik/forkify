//Api Key:77e952321e684905cfcc4eb5a83749f4
//https://www.food2fork.com/api/search
//const search=new Search('pizza');
//console.log(search);

import Search from './models/Search';



const state={};//Global state

const controlSearch= async () =>{


	//get query from view
	const query='pizza';

	if(query){

		//new search object and add to state
		state.search= new Search(query);
		//prepare  UI for results

		//search for recipies
		 await state.search.getResults();
		//render of results on Ui
		console.log(state.search.result);
	}
}

document.querySelector(".search").addEventListener('submit', e=>{

	console.log('hello');
	e.preventDefault();
	controlSearch();
});
	
































/*   LECTURE 138
import axios from  'axios';
async function getRecipie(query){
		const proxy='https://cors-anywhere.herokuapp.com/';
		const Key="77e952321e684905cfcc4eb5a83749f4";
		const res=await axios(`${proxy}https://www.food2fork.com/api/search?key=${Key}&q=${query}`);


		try{
		const recipes=res.data.recipes;

		console.log(recipes);
		//console.log(res);
		alert(recipes);
					}
		catch(error){

			alert(error);
		}
}
getRecipie("fish");

*/