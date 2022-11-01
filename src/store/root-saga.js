import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";
import { blogsSagas } from "./blog/blog.sagas";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas), call(blogsSagas)]);
}
