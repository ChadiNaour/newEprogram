import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import ActualityWrapper from "./actuality.style";
import BlogCard from "../../reusecore/BlogCard";
import { createClient } from 'contentful';
import { m, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
                        {blogPosts.length ? <div ref={ref} className="Blog-container">
                            {
                                blogPosts.map((blogContent, index) => {
                                    if (index >= 3)
                                        return null;
                                    return (
                                        <m.div animate={blogsAnimation} initial="hidden" variants={getButtonVariants(index)}>
                                            <BlogCard key={index} blogContent={blogContent} />
                                        </m.div>
                                    )
                                })
                            }
                        </div> : <div style={{ paddingBlock: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>Chargement...</h1></div>}
                    </Col>
                </Row>
            </Container>
        </ActualityWrapper>
    );
};

export default Actuality;
