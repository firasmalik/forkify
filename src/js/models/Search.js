 //export default "Hi everyone";

 import axios from  'axios';
 export default class Search {


		 	constructor(query){

		 		this.query=query;
		 	}
		 	

			async getResults(){
						const proxy='https://cors-anywhere.herokuapp.com/';
						const Key="77e952321e684905cfcc4eb5a83749f4";


						try{
						this.result=res.data.recipes;
						const res=await axios(`${proxy}https://www.food2fork.com/api/search?key=${Key}&q=${this.query}`);


						//console.log(this.result);
						//console.log(res);
						}
						catch(error){

						alert(error +'dfyhf');
				}
		  }
}

