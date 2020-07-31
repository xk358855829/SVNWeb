// import { timestampsFormat } from '@/utils/utils'
export default {
  getWaitCarOrders: state => {
    console.log(state.waitCar)
    let result = new Array(0)
    if (state.waitCar.length === 0) {
      return new Array(0)
    } else {
      state.tac1=state.tac1.concat(state.waitCar.result);
      state.count4=state.waitCar.count;
      for (let i = 0; i < state.tac1.length; i++) {
        // console.log(state.waitCar.result.length)
        if (state.tac1[i].state === '2') {
          let temp = {
            washMode: state.tac1[i].cname,
            keyCode: state.tac1[i].password,
            keyInfo: state.tac1[i].keyaddress,
            carAddress: state.tac1[i].address,
            carNum: state.tac1[i].country,
            uname: state.tac1[i].uname,
            userPhone: state.tac1[i].phone,
            appointment: 0,
            state: state.tac1[i].state,
            OrderId: state.tac1[i].number,
            startTime: state.tac1[i].starTime,
            endTime: state.tac1[i].endTime
            // timestampsFormat(
            //   Number(state.waitCar.result[i].starTime.time)
            // ),
            // timestampsFormat(
            //   Number(state.waitCar.result[i].endTime.time)
            // )
          }
          result.push(temp)
        }
      }
      console.log(result)
      return result
    }
  },
  getFinishedCarOrders: state => {
    console.log(state.finishedCarOrders.length)
    let result = new Array(0)
    if (state.finishedCarOrders.length === 0) {
      return new Array(0)
    } else {
      state.tac2=state.tac2.concat(state.finishedCarOrders.result);
      state.count3=state.finishedCarOrders.count;
      for (let i = 0; i < state.tac2.length; i++) {
        if (state.tac2[i].state === '5') {
          let temp = {
            washMode: state.tac2[i].cname,
            keyCode: state.tac2[i].password,
            keyInfo: state.tac2[i].keyaddress,
            carAddress: state.tac2[i].address,
            carNum: state.tac2[i].country,
            userPhone: state.tac2[i].phone,
            uname: state.tac2[i].uname,
            appointment: 0,
            state: state.tac2[i].state,
            OrderId: state.tac2[i].number,
            startTime: state.tac2[i].starTime,
            endTime: state.tac2[i].endTime
            // startTime: timestampsFormat(
            //   Number(state.finishedCarOrders.result[i].starTime.time)
            // ),
            // endTime: timestampsFormat(
            //   Number(state.finishedCarOrders.result[i].endTime.time)
            // )
          }
          result.push(temp)
        }
      }
      console.log(result)
      return result
    }
  },
  getKeyOrders: state => {
    let result = new Array(0)
    if (state.keyOrders.length === 0) {
      return new Array(0)
    } else {
      console.log(state.keyOrders)
      state.tac3=state.tac3.concat(state.keyOrders.result);
      state.count2=state.keyOrders.count;
      for (let i = 0; i < state.tac3.length; i++) {
        if (state.tac3[i].state === '3') {
          let temp = {
            washMode: state.tac3[i].cname,
            keyCode: state.tac3[i].password,
            keyInfo: state.tac3[i].keyaddress,
            carAddress: state.tac3[i].address,
            uname: state.tac3[i].uname,
            carNum: state.tac3[i].country,
            userPhone: state.tac3[i].phone,
            appointment: 0,
            state: state.tac3[i].state,
            OrderId: state.tac3[i].number,
            startTime: state.tac3[i].starTime,
            endTime: state.tac3[i].endTime
          }
          result.push(temp)
        }
      }
      console.log(result)
      return result
    }
  },
  getAllOrders: state => {
    let result = new Array(0)
    if (state.allOrders.length === 0) {
      return new Array(0)
    } else {
      state.tac=state.tac.concat(state.allOrders.result);
      state.count1=state.allOrders.count;
      for (let i = 0; i < state.tac.length; i++) {
        let temp = {
          washMode: state.tac[i].cname,
          keyCode: state.tac[i].password,
          keyInfo: state.tac[i].keyaddress,
          uname: state.tac[i].uname,
          carAddress: state.tac[i].address,
          carNum: state.tac[i].country,
          userPhone: state.tac[i].phone,
          appointment: 0,
          state: state.tac[i].state,
          OrderId: state.tac[i].number,
          startTime: state.tac[i].starTime,
          endTime: state.tac[i].endTime
          // startTime: timestampsFormat(
          //   Number(state.allOrders.result[i].starTime.time)
          // ),
          // endTime: timestampsFormat(
          //   Number(state.allOrders.result[i].endTime.time)
          // )
        }
        // console.log(temp);
        result.push(temp)
        // }
      }
      return result
    }
  },
  getOrderInfo: state => {
    let order = state.userOrderInfo.result
    console.log(order)
    if (order) {
      return {
        washMode: order.cname,
        washCost: order.money,
        orderTime: order.orderTime,
        // timestampsFormat(Number(order.orderTime.time)),
        connectUser: order.uname,
        connectPhone: order.phone,
        carId: order.country,
        carAddress: order.address,
        keyAddress: order.keyaddress,
        beizhu: order.memarks,
        orderId: order.number,
        starTime: order.starTime,
        // timestampsFormat(Number(order.starTime.time)),
        payType: order.payment,
        state: order.state
      }
    } else {
      return {}
    }
  },
  getWxinfo: state => {
    let wxinfo = state.wxInfo
    if (wxinfo) {
      return {
        nickname: wxinfo.nickname,
        img: wxinfo.headimgurl
      }
    }
  }
}
