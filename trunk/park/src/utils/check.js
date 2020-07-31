export const checkNum = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("不能为空"));
  }
  setTimeout(() => {
    if (!Number.isInteger(Number(value))) {
      callback(new Error("请输入数字值"));
    } else {
      callback();
    }
  }, 1000);
};
export const checkaddNum = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("不能为空"));
  }
  setTimeout(() => {
    const regex = /^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/;
    if (!regex.test(value)) {
      callback(new Error("请输入大于0的数字值"));
    } else {
      callback();
    }
  }, 1000);
};
export const checkaddNum1 = (rule, value, callback) => {
  if(value){
    const regex = /^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/;
    if (!regex.test(value)) {
      callback(new Error("请输入大于等于0的数字值"));
    } else {
      callback();
    }
  }else{
    callback();
  }
};
export const checktypeNum = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("不能为空"));
  }
  setTimeout(() => {
    const regex = /^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/;
    if (!regex.test(value)) {
      callback(new Error("请输入大于0的数字值"));
    } else {
      if(value > 30){
        callback(new Error("间隔不得大于30分钟"));
      }else{
        callback();
      }      
    }
  }, 1000);
};
export const checkMchnt_id = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("不能为空"));
  }
  setTimeout(() => {
    if (value.slice(0, 4) != 2088 || value.length != 16) {
      callback(new Error("收款方编号为2088开头的16位纯数字"));
    } else {
      callback();
    }
  }, 1000);
};
export const checkMobile = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("不能为空"));
  }
  setTimeout(() => {
    if (value.length < 6 || value.length > 12) {
      callback(new Error("客服电话长度不能小于6位大于12位"));
    } else {
      callback();
    }
  }, 1000);
};

export const equipmentRules = {
  sid: [{ required: true, message: "不能为空", trigger: "blur" }],
  deviceid: [{ required: true, message: "不能为空", trigger: "blur" }],
  alias: [{ required: true, message: "不能为空", trigger: "blur" }],
};

export const parkinglotRules = {
  mark: [{ required: true, message: "不能为空", trigger: "blur" }],
  remark: [{ required: true, message: "不能为空", trigger: "blur" }],
  // id: [{ required: true, message: "不能为空", trigger: "blur" }],
  parkid: [{ required: true, message: "不能为空", trigger: "blur" }],
  devid: [{ required: true, message: "不能为空", trigger: "blur" }],
  stantype: [{ required: true, message: "不能为空", trigger: "blur" }],
  devname: [{ required: true, message: "不能为空", trigger: "blur" }],
  type: [{ required: true, message: "不能为空", trigger: "blur" }],
};

export const guideData = {
  name: [{ required: true, message: "不能为空", trigger: "blur" }],
  position: [{ required: true, message: "不能为空", trigger: "blur" }],
  devid: [{ required: true, message: "不能为空", trigger: "blur" }],
  color: [{ required: true, message: "不能为空", trigger: "blur" }],
};

export const cameraequipmentRules = {
  deviceId: [{ required: true, message: "不能为空", trigger: "blur" }],
  alias: [{ required: true, message: "不能为空", trigger: "blur" }],
};

export const parkingListRules = {
  // type: [{ required: true, message: "不能为空", trigger: "blur" }],
  // remark: [{ required: true, message: "不能为空", trigger: "blur" }],
  parkid: [{ required: true, message: "不能为空", trigger: "blur" }],
  // devid: [{ required: true, message: "不能为空", trigger: "blur" }],
  // stanType: [{ required: true, message: "不能为空", trigger: "blur" }],
  devname: [{ required: true, message: "不能为空", trigger: "blur" }],
  mac: [{ required: true, message: "不能为空", trigger: "blur" }],
  berthcode: [{ required: true, message: "不能为空", trigger: "blur" }],
  carName: [{ required: true, message: "不能为空", trigger: "blur" }],
  rentype: [{ required: true, message: "不能为空", trigger: "blur" }]
};
export const parkingManageRules = {
  parkingId: [{ required: true, message: "不能为空", trigger: "blur" }],
  // parkingName: [{ required: true, message: "不能为空", trigger: "blur" }],
  carportName: [{ required: true, message: "不能为空", trigger: "blur" }],
  address: [{ required: true, message: "不能为空", trigger: "blur" }],
  startTime: [{ required: true, message: "不能为空", trigger: "blur" }],
  endTime: [{ required: true, message: "不能为空", trigger: "blur" }]
};