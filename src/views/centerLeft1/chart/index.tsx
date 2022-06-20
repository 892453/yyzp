import { defineComponent, onUnmounted, reactive } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    let intervalInstance = null
    const cdata = reactive({
      xData: ['国槐', '栾树', '白蜡', '雪松', '紫叶李', '白杨'],
      seriesData: [
        { value: 10, name: '国槐' },
        { value: 5, name: '栾树' },
        { value: 15, name: '白蜡' },
        { value: 25, name: '雪松' },
        { value: 20, name: '紫叶李' },
        { value: 35, name: '白杨' },
      ],
    })
    intervalInstance = setInterval(() => {
      const data = cdata.seriesData
      cdata.seriesData = data.map((e) => {
        return { value: e.value + 10, name: e.name }
      })
    }, 1000)

    onUnmounted(() => {
      clearInterval(intervalInstance)
    })
    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      )
    }
  },
})
