import { all,  } from "redux-saga/effects";
 
// import { GET_TK_HP_CAMPS_REQUEST  } from "../actionTypes";

// function* watchGetTKHPCamps() {
//   yield takeEvery(GET_TK_HP_CAMPS_REQUEST, getTKHPCamps);
// }

// function* getTKHPCamps(action) {
//   try {
//     const res = yield call(apiCall,
//       'post',
//       'public/campaign/getPaginationCampaigns',
//       {
//         page: 0,
//         size: 5
//       }
//     );
//     yield put(actions.getTKHPCampsSucceeded([...res.data.data]));
//   } catch (err) {
//     yield put(actions.getTKHPCampsFailed());
//   }
// }

export default function* homepageSaga() {
  yield all([
    // fork(watchGetTKHPCamps),
  ]);
}
