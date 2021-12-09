export const NAV_TEXT = [
  {
    link: '#',
    text: 'Dlwlrma'
  },
  {
    link: '#',
    text: 'Clothes'
  },
  {
    link: '#',
    text: 'Jewelry'
  },
  {
    link: '#',
    text: 'About us'
  }
];
interface imageMotion {
  opacity: number;
  transition: {
    staggerChildren: number;
    delayChildren: number;
  };
}
export const imageContainer = {
  initial: {
    opacity: 0
  },
  animate: (delay: number): imageMotion => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: delay
    }
  })
};
export const imageAnimation = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8
    }
  }
};
export const imageAnimationReverse = {
  initial: {
    opacity: 0,
    y: -100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8
    }
  }
};
export const navTextContainer = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.2
    }
  }
};
interface NAV_TEXT_ANIMATE {
  opacity: number;
  x: number;
}
export const navTextAnimation = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: (index: number): NAV_TEXT_ANIMATE => ({
    opacity: index === 0 ? 1 : 0.7,
    x: index * 20
  })
};
