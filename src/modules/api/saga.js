import { takeEvery, put, all } from 'redux-saga/effects'
import api from "modules/api/api";
import { apiActions, API_ACTIONS } from "modules/api/actions";

function* onApiLoad({ payload, type }) {
  const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase()
  try {
    const res = yield api.fetch(actionType, payload)
    yield put(apiActions.fetchSuccess(actionType, res))
  } catch (error) {
    yield put(apiActions.fetchFailure(actionType, error))
  }
}

export function* watchApiLoad() {
  yield takeEvery((action) => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad)
}

export default function* apiRootSaga() {
  yield all([
    watchApiLoad()
  ])
}