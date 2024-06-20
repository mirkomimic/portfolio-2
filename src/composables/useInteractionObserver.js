import { onMounted, onUnmounted, ref } from "vue";

export function useIntersectionObserver(sections, options) {
  const activeSection = ref(null)
  const observer = ref(null)

  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = parseInt(entry.target.id.split('_')[1]);
      }
    });
  };

  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersect, options)

    sections.value.forEach(section => {
      const el = document.getElementById(`section_${section}`);
      if (el) observer.value.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect();
    }
  });

  return { activeSection }
}