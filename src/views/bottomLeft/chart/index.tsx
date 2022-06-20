import { defineComponent, reactive, onMounted } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup() {
    const cdata = reactive({
      category: [
        "竹园楼",
        "体育馆",
        "信远楼",
        "礼仪广场",
        "E楼下",
        "G楼下",
        "东门口",
        "竹园餐厅",
        "工训中心",
        "校医院"
      ],
      lineData: [
        115,
        15,
        53,
        50,
        36,
        78,
        30,
        40,
        60,
        80
      ],
      // 已挂牌
      barData: [
        61,
        0,
        40,
        0,
        30,
        26,
        0,
        10,
        20,
        0
      ],
      rateData: []
    })

    // methods
    const setData = () => {
      for (let i = 0; i < cdata.barData.length ; i++) {
        const rate = cdata.barData[i] / cdata.lineData[i];
        cdata.rateData.push(rate.toFixed(2));
      }
    }

    // 生命周期
    onMounted(() => {
      setData()
    })

    return () => {
      return <div>
        <Draw cdata={cdata} />
      </div>
    }
  }
})