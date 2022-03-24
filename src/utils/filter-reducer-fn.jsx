import { initialFilter } from "./filterfn";

export function filterReduceFn(state, action) {
  switch (action.type) {
    case "PRICE":
      return { ...state, PRICE: action.payload };
    case "TOPPROCESSOR":
      return { ...state, TOPPROCESSOR: !state.TOPPROCESSOR };
    case "GPU":
      return { ...state, GPU: !state.GPU };
    case "CAMERA":
      return { ...state, CAMERA: !state.CAMERA };
    case "SORTBY":
      return { ...state, SORTBY: action.payload };
    case "PROCESSOR":
      return { ...state, PROCESSOR: action.payload };
    case "TYPE":
      return { ...state, TYPE: action.payload };
    case "INSTOCK":
      return { ...state, INSTOCK: !state.INSTOCK };
    case "FASTDELIVERY":
      return { ...state, FASTDELIVERY: !state.FASTDELIVERY };
    case "RATING":
      return { ...state, RATING: action.payload };
    case "BRAND":
      return { ...state, [action.payload]: !state[action.payload] };
    case "RESET":
      const categoryReset = action.payload || null;
      return { ...initialFilter, categoryReset: !state[categoryReset] };
    default:
      return { ...state };
  }
}
