import { useFetch } from 'hooks/useFetch'
import { JOBS } from 'modules/api/endpoints'
import { useEffect } from 'react'

const Jobs = () => {
	const { res, performFetch } = useFetch(JOBS)

	useEffect(() => {
		performFetch()
	}, [performFetch])
  
  console.log(res)

	return <div>Jobs</div>
}

export default Jobs
