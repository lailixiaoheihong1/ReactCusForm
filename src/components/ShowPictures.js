import React, {useState } from 'react';

function ShowPictures(props) {
	let {value = []} = props;
	
	return <ul>
		{value.map((item)=>{
			return <li>
				<img src={item} alt=""/>
			</li>;
		})}
	</ul>;
}

export default ShowPictures;
