<template>
  <div>
    <pages :list="lista"
           :fet="fet"
           @imgs="imgt"
           @parkimg="parkimg"></pages>
  </div>
</template>
<script>
import pages from './pages'
import Qs from 'qs'
import axios from 'axios'
export default {
  data () {
    return {
      lista: [],
      fet: {
        page: 1,
        allLoaded: false,
        nodata: false,
        disay: true,
      },
      totalnum: '',
      pagenum: ''
    }
  },
  components: {
    pages
  },
  methods: {
    imgt (val) {
      console.log('**8')
      console.log(val)
      this.fet.page = val
      this.parkimg()


      // this.allLoaded = true;


    },
    parkimg () {
      axios({
        method: 'post',
        url: 'http://39.104.113.112:2088/carInfo/findAll',
        data: Qs.stringify({
          page: this.fet.page,
          pageSize: 10,
          userId: 'SURIOT',
          dealer: 123
        })
      }).then(res => {
        console.log(res)
        if (res.data.count == 0) {
          this.fet.nodata = false
        }
        res.data.result.forEach((a, b) => {
          this.lista.push(a)
        })
        this.totalnum = res.data.count
        this.pagenum = Math.ceil(this.totalnum / 10)
        console.log(this.pagenum)
        if (this.pagenum == this.fet.page) {
          console.log(90)

          this.fet.nodata = true
          this.fet.allLoaded = true
          this.fet.disay = false
        }
      })
    }
  },
  mounted () {
    this.parkimg()
    console.log(this.lista)
  }
}
</script>
<style lang="scss" scoped>
</style>
