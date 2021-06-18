import React, {useState } from 'react';
import Utils from "@/Utils";

function ShowPictures(props) {
	let {value = []} = props;
	
	return <ul>
		{value.map((item)=>{
			return <li>
				<a href={item} target="target" download={item}>
					<span className="suffix">{Utils.fileUtils.getSuffixFormUrl(item)}</span>
					<span className="file-name">{item}</span>
				</a>
			</li>;
		})}
	</ul>;
}

export default ShowPictures;
