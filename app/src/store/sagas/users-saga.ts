import { takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchUsersFailure,
  fetchUsersSuccess,
  requestFetchUsers,
} from '../reducers/users-reducer';
import UsersApi from '@/api/users';
import { User } from '@/types';

function* fetchUsers() {
  try {
    const users: User[] = yield call(UsersApi.getAllUsers);
    console.log(JSON.stringify(users));
    yield put(fetchUsersSuccess(users));
  } catch (error: unknown) {
    yield put(fetchUsersFailure(error instanceof Error ? error : null));
  }
}

export default function* usersSaga() {
  yield takeLatest(requestFetchUsers.type, fetchUsers);
}
