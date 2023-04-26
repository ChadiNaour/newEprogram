const Animations = {
    fadeInLeft : {
        initial: {
            opacity: 0,
            x: 60
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                opacity: { ease: "linear" },
                duration: .6
            }
        }
    },
    fadeInUp : {
        initial: {
            opacity: 0,
            y: 60
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                opacity: { ease: "linear" },
                duration: .6
            }
        }
    },
    fadeInUpText : {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                opacity: { ease: "linear" },
                duration: .6
            }
        }
    }
}
export default Animations;