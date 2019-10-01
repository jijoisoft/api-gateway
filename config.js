module.exports = {
	port:8000,
	routes:  [
		{
			path:"books",
			port:"7000"
		},
		{
			path:"videos", 
			port:"7001"
		}, 
		{
			path:"games", 
			port:"7002"
		}, 
		{
			path:"charity", 
			port:"7003"
		}, 
		{
			path:"tests", 
			port:"7004"
		}, 
		{
			path:"feeds", 
			port:"7005"
		} 
	]

}