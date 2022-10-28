
import { computed, ref, onMounted } from "vue"

export function useVirtualScrollLis({ dom, height, pageSize, list }) {
    const pt = ref(0);
    const pb = ref(0);
    const page = ref(0);
    pb.value = (list.length - pageSize) * height
    onMounted(() => {
        const Dom = document.querySelector(dom);
        Dom?.addEventListener("scroll", (e) => {
            const target = e.target
            // const targetHeight = target.clientHeight;
            const scrollTop = target.scrollTop;
            page.value = Math.floor(scrollTop / height);
            pt.value = scrollTop
            pb.value = (list.length - (page.value + pageSize)) * height
        })
    })

    const renderList = computed(() => {
        return list.slice(page.value, page.value + pageSize)
    })
    const style = computed(() => {
        return {
            paddingTop: pt.value + "px",
            paddingBottom: pb.value + "px",
        }
    })
    return {
        style,
        renderList
    }
}