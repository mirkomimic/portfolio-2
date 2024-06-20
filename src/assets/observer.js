import Observer from 'gsap/Observer';
import Lenis from 'lenis';
import gsap from 'gsap';

export default class ObserverAnimation {

  constructor() {
    this.createLenis()
    this.render()
  }

  createLenis() {
    this.lenis = new Lenis({
      lerp: 0.5,
      // duration: .1,
      easing(x) {
        // https://easings.net/en
        // return Math.sin((x * Math.PI) / 2);
      }
    })
  }

  render(time) {
    this.lenis.raf(time)
    requestAnimationFrame(this.render.bind(this))
  }
  
  scrollDown(currentSection) {
    Observer.create({
      target: `#section_${currentSection}`,
      type: "wheel,touch",

      onDown: () => {
        this.lenis.scrollTo(`#section_${currentSection + 1}`)
      },
    });

  }

  scrollUp(currentSection) {
    Observer.create({
      target: `#section_${currentSection}`,
      type: "wheel,touch",

      onUp: () => {
        this.lenis.scrollTo(`#section_${currentSection - 1}`)
      },
    });
  }

}