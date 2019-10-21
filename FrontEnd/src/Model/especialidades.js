import { getEspecialidades } from "../Service/Especialidades";
import { message } from "antd";

export default {
  namespace: "especialidades",

  state: {},

  effects: {
    *getEspecialidades({ payload }, { call, put }) {
      const response = yield call(getEspecialidades, payload);
      if (!response) {
        return;
      }
      return yield response.data;
    }
  },

  reducers: {
    //   update(state, action) {
    //     return {
    //       ...state,
    //       ordenesTratadasPendientes: action.payload,
    //       reloadGrid: false,
    //     };
    //   },
  }
};
