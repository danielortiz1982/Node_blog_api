module.exports.homeTemplate = ()=>{

    let homeMessage	= `
		<h1><a href="https://nodejs.org/en/" target="_blank">Node.js</a> Blog API.</h1>
		<h3>API endpoints below:</h3>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About API</a></li>
			<li><a href="/about/post">Post Category API</a></li>
			<li><a href="/api/categories">Get All Categories API</a></li>
			<li><a href="/api/blog">Get All Blog Post API</a></li>
		</ul>
	`;
    return homeMessage;
};

module.exports.aboutTemplate = ()=>{
    let aboutMessage = `
		<h1>This is a Node.js Blog Restful API...</h1>
		<p><a href="/">Return Home</a></p>
	`;
    return aboutMessage;

};

module.exports.aboutPostTemplate = ()=>{
    let postAPIMessage = `
		<h1>About Post Template...</h1>
		<p><a href="/">Return Home</a></p>
	`;
    return postAPIMessage;
};