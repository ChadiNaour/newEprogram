import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import ActualityWrapper from "./actuality.style";
import BlogCard from "../../reusecore/BlogCard";
import { createClient } from 'contentful';
import { m, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Player } from '@lottiefiles/react-lottie-player';
import { SlickSlider, SliderItem } from "reusecore/SlickSlider";

const Actuality = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const client = createClient({ space: `${process.env.GATSBY_CONTENTFUL_SPACE}`, accessToken: `${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}` });
    const blogsAnimation = useAnimation();
    const [ref, inView] = useInView();

    const getButtonVariants = (number) => {
        return {
            hidden: {
                opacity: 0,
                y: 60
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    opacity: { ease: "linear" },
                    delay: 0.1 + number * 0.25,
                    duration: 0.7
                }
            }
        }
    }

    const settings = {
        //autoplay: true,
        infinite: true,
        //dots: true,
        //dotsClass: "button__bar",
        //speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: <ArrowLeft />,
        // nextArrow: <ArrowRight />,
        responsive: [
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };

    useEffect(() => {
        if (inView) {
            blogsAnimation.start("visible");
            return () => blogsAnimation.stop;
        }
    }, [inView])

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                await client.getEntries().then((entries) => {
                    setBlogPosts(entries.items);
                })
            }
            catch (error) {
                console.log("Error getting entries", error);
            }
        }
        getAllPosts();
    }, [])

    return (
        <ActualityWrapper id="actuality">
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle UniWidth="100%">
                            <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "60px" }}>
                                <h2><span>
                                    Actualités</span>
                                </h2>
                                <div className="underline"></div>
                            </div>
                        </SectionTitle>
                        {blogPosts.length ?
                            <div ref={ref} className="Blog-container">
                                {/* <SlickSlider {...settings} ref={ref} className="Blog-container"> */}
                                    {
                                        blogPosts.map((blogContent, index) => {
                                            if (index >= 3)
                                                return null;
                                            return (
                                                // <SliderItem key={index}>
                                                    <m.div key={index} animate={blogsAnimation} initial="hidden" variants={getButtonVariants(index)}>
                                                        <BlogCard key={index} blogContent={blogContent} />
                                                    </m.div>
                                                // </SliderItem>
                                            )
                                        })
                                    }
                                {/* </SlickSlider> */}
                            </div> :
                            <div style={{ paddingBlock: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Player
                                    autoplay
                                    loop
                                    src="https://lottie.host/ff3883d6-13c1-4789-bec4-3edda705b83b/yjh56MTXlo.json"
                                    className="loading"
                                >
                                </Player>
                            </div>}
                    </Col>
                </Row>
            </Container>
        </ActualityWrapper>
    );
};

export default Actuality;
