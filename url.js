var url = require('url')
var q = url.parse('http://localhost/empresa/cerveja?qualidade=alta&marca=nocal')
{
	host:'localhost',
	port:5000,
	pathname:"/empresa/cerveja",
	query:{qualidade:"alta",marca:"nocal"}
}
q.query.qualidade