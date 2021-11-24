import { useCallback, useMemo } from "react";
import camelCase from "camelcase";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "modules/api/actions";

export const useFetch = (endpoint) => {
  const dispatch = useDispatch()
  const { api } = useSelector((store) => store)

  const performFetch = useCallback((data) => dispatch(apiActions.fetch(endpoint, data)), [endpoint, dispatch])
  const res = useMemo(() => api[camelCase(endpoint)], [api, endpoint])

  return { res, performFetch }
}