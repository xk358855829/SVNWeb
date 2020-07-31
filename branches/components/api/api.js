import axios from 'axios'
import Qs from 'qs'
import Vue from 'vue'
import {Message,Loading} from 'element-ui'
import '../../../common/common'
let url='http://39.104.113.112:2088'
let http='http://39.104.99.181:8080'
let abc='http://39.104.99.181:2080'
// let abcds='http://39.104.99.181:2080'
let that=this;
Vue.filter('validate', function(val) {
    let value=(JSON.stringify(val.time).slice(0,10))
    var d = new Date(value*1000);
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    return year + "-" + add(month) + "-" + add(date) + " " + add(hour) + ":" + add(minute) + ":" + add(second);
  });
  Vue.filter('statusele', function(val) {
    if(val==0){
        val='已使用'
    }else if(val==1){
        val='未使用'
    }else{
        val='已失效'
    }
    return val
  });
  Vue.filter('numnewchose', function(val) {
    if(val==''){
        val='无'
    }else{
        val=val+'元'
    }
    return val
  });
  Vue.filter('numnew', function(val) {
    if(val==''){
        val='无'
    }else{
        val=val
    }
    return val
  });
  Vue.filter('cardtype', function(val) {
    if(val==1){
        val='电子券'
    }else{
        val='纸券'
    }
    return val
  });
  Vue.filter('fangtype', function(val) {
    if(val==0){
        val='团体'
    }else{
        val='个人'
    }
    return val
  });
  Vue.filter('userwaytyape', function(val) {
    if(val==1){
        val='免费时长'
    }else if(val==2){
        val='现金抵用券'
    }else{
        val='满减券'
    }
    return val
  });
  Vue.filter('note', function(val) {
    if(val==0){
        val='已开通'
    }else{
        val='未开通'
    }
    return val
  });
  Vue.filter('issus_typefilter', function(val) {
    if(val==1){
        val='免费'
    }else if(val==2){
        val='收费'
    }else{
        val='积分兑换'
    }
    return val
  });
  Vue.filter('sizes', function(val) {

    if(val==''){
        val='无'
    }
    return val
  });
  Vue.filter('team', function(val) {
    if(val==''){
        val='团体'
    }else{
        val='个人'
    }
    return val
  });
  Vue.filter('moneypay', function(val) {

    return val+'元'
  });
  Vue.filter('paytype', function(val) {
    if(val==1){
        val='居民小区'
    }else if(val==2){
        val='商圈停车场'
    }else if(val==3){
        val='路侧停车'
    }else if(val==4){
        val='公园景点'
    }else if(val==5){
        val='商务楼宇'
    }else if(val==6){
        val='其他'
    }else if(val==7){
        val='交通枢纽'
    }else if(val==8){
        val='市政设施'
    }
    return val
  });
export function add(m){return m<10?'0'+m:m }
export const searchClicks = (baseurl,data) => axios.post(url+baseurl,Qs.stringify(data))
export const logins = (baseurl,data) => axios.post(http+baseurl,Qs.stringify(data))
export const jurisdictionShows = (baseurl,data) =>axios.post(url+baseurl,Qs.stringify(data))
export const salePlans = (baseurl, data) => axios.post(`${url}${baseurl}`,Qs.stringify(data))
export const bindDevice = (data) => axios.post(`${url}/Device/queryBindDeviceld`,Qs.stringify(data))
