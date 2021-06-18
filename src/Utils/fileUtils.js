export default {
	getSuffixFormUrl(url){
		const filename = String(url);
		const pos = filename.lastIndexOf('.');
		let suffix = '';
		if (pos !== -1) {
			suffix = filename.substring(pos);
		}
		return suffix;
	},
}
