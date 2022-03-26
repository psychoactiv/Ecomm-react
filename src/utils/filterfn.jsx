const initialFilter = {
  RATING: 0,
  PRICE: 80000,
  TOPPROCESSOR: false,
  GPU: false,
  CAMERA: false,
  SORTBY: "",
  PROCESSOR: "",
  TYPE: "",
  INSTOCK: false,
  FASTDELIVERY: false,
  SAMSUNG: false,
  APPLE: false,
  VIVO: false,
  ASUS: false,
  ONEPLUS: false,
};

function priceFn(state, data) {
  return data
    ? data.filter((item) => {
        return item.price <= state.PRICE;
      })
    : data;
}

function topProcessor(state, data) {
  if (state.TOPPROCESSOR) {
    return data.filter((item) => item.topProcessor);
  }
  return data;
}

function isGoodGPU(state, data) {
  if (state.GPU) {
    return data.filter((item) => item.gamingGPU);
  }
  return data;
}

function isGoodCamera(state, data) {
  if (state.CAMERA) {
    const sumArr = data.filter(
      (item) => Number(item.camera.slice(0, item.camera.length - 2)) >= 24
    );
    return sumArr;
  }
  return data;
}

function sortBy(state, data) {
  if (state.SORTBY === "HIGHTOLOW") {
    return data.sort((a, b) => b["price"] - a["price"]);
  } else if (state.SORTBY === "LOWTOHIGH") {
    return data.sort((a, b) => a["price"] - b["price"]);
  }
  return data;
}

function processorFilter(state, data) {
  if (state.PROCESSOR === "MEDIATEK") {
    return data.filter((item) =>
      item.processor?.toUpperCase().includes("MEDIATEK")
    );
  } else if (state.PROCESSOR === "SNAPDRAGON") {
    return data.filter((item) =>
      item.processor?.toUpperCase().includes("SNAPDRAGON")
    );
  } else if (state.PROCESSOR === "A14 BIONIC") {
    return data.filter((item) =>
      item.processor?.toUpperCase().includes("A14 BIONIC")
    );
  }
  return data;
}

function phoneType(state, data) {
  if (state.TYPE === "ANDROID") {
    return data.filter((item) => item.type?.toUpperCase().includes("ANDROID"));
  } else if (state.TYPE === "IOS") {
    return data.filter((item) => item.type?.toUpperCase().includes("IOS"));
  } else if (state.TYPE === "FEATURE PHONE") {
    return data.filter((item) =>
      item.type?.toUpperCase().includes("FEATURE PHONE")
    );
  }
  return data;
}

function isInStock(state, data) {
  if (state.INSTOCK) {
    return data.filter((item) => item.inStock);
  }
  return data;
}

function isFastDelivery(state, data) {
  if (state.FASTDELIVERY) {
    return data.filter((item) => item.FASTDELIVERY);
  }
  return data;
}

function ratings(state, data) {
  if (state.RATING) {
    return data.filter((item) => item.rating === state.RATING);
  }
  return data;
}

function phoneBRAND(state, data) {
  if (
    state.SAMSUNG ||
    state.APPLE ||
    state.VIVO ||
    state.ASUS ||
    state.ONEPLUS
  ) {
    const newArrData = [...data];
    return newArrData.filter((item) => state[item.brand.toUpperCase()]);
  }
  return data;
}

const compose = (state, allFunctions) => (data) =>
  allFunctions.reduce((acum, cur) => cur(state, acum), data);

const functionArr = [
  priceFn,
  topProcessor,
  isGoodGPU,
  isGoodCamera,
  sortBy,
  processorFilter,
  phoneType,
  isInStock,
  isFastDelivery,
  ratings,
  phoneBRAND,
];

export { compose, functionArr, initialFilter };
