import { useMemo } from 'react'

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    const range = () => {}
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}
