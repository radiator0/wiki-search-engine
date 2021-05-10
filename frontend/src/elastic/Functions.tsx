import client from './Client'
const getPageByTitle = async (title: string) => {
	return client.post('/_search', {
		size: 1,
		query: {
			bool : {
				must : {
				  match : { title: title}
				},
				must_not: {
					exists : { field: 'redirect'}
				}
			}
		}
	}
	).then(r => {
		console.log(r);
		return r.data?.hits?.hits?.length > 0
			? { title: r.data.hits.hits[0]._source.title, ...r.data.hits.hits[0]._source.revision }
			: null
	})
}

export { getPageByTitle };