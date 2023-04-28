import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import Layout from "../components/layout"
import { GlobalStyle } from '../sections/app.style';
import Navigation from 'sections/Navigation';
import Footer from 'sections/Footer-crypto';
import theme from '../theme/app/themeStyles';
import SEO from "../components/seo";
import styled from "styled-components";
import moment from "moment";
import { Container } from "../reusecore/Layout"
import SectionTitle from "../reusecore/SectionTitle";
import { createClient } from 'contentful';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import BlogCard from "../reusecore/BlogCard";
import { SlickSlider, SliderItem } from "reusecore/SlickSlider";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from "react-share";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Modal from '../reusecore/Modal';
import { m } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';

export default function BlogPost({ pageContext }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [post, setpost] = useState(null);
    const [posts, setPosts] = useState([]);
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const client = createClient({ space: `${process.env.GATSBY_CONTENTFUL_SPACE}`, accessToken: `${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}` });

    const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className="slick-arrow slick-prev-icon">
            <IoIosArrowRoundBack /><span style={{ height: "100%!important", pointerEvents: "none!important", cursor: "default" }} onClick={(event) => event.stopPropagation()}>{currentSlide + 1 + " / " + slideCount}</span>
        </button>
    );
    const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className="slick-arrow slick-next-icon">
            <IoIosArrowRoundForward />
        </button>
    );

    const calculateDisplayedSlide = (length) => {
        if (length && length < 3)
            return length;
        else if (length >= 3)
            return 3;
        else
            return null;
    }

    const settings = {
        //autoplay: true,
        infinite: true,
        //dots: true,
        //dotsClass: "button__bar",
        //speed: 1500,
        slidesToShow: calculateDisplayedSlide(pageContext.length - 1),
        slidesToScroll: 1,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
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
        const getAllPosts = async () => {
            try {
                await client.getEntries().then((entries) => {
                    const foundPost = entries.items.find(post => post.fields.slug === pageContext.slug);
                    const filteredArray = entries.items.filter(post => post.fields.slug !== pageContext.slug);
                    setpost(foundPost.fields);
                    setPosts(filteredArray);
                })
            }
            catch (error) {
                console.log("Error getting entries", error);
            }
        }
        getAllPosts();
        //getPost();
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <SEO title={`${pageContext?.title} | eProgram`} image={pageContext?.image} description={pageContext?.description} />
                {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen} />}
                <Navigation modalOpen={modalOpen} setModalOpen={setModalOpen} />
                {post ? <Container>
                    <StyledHead>
                        <m.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }} className={`head ${post?.color}`}>
                            <img alt="post cover" src={`https://${post?.coverImage.fields.file.url}`} />
                            <m.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }} className="color-badge"></m.div>
                        </m.div>
                        <SectionTitle style={{ fontSize: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            <div className="title-container">
                                <div className='blog-title-container'>
                                    <h2>
                                        <span>{post?.title}</span>
                                    </h2>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                                        <FacebookShareButton url={url}><FacebookIcon size={40} round={true} /></FacebookShareButton>
                                        <LinkedinShareButton url={url}><LinkedinIcon size={40} round={true} /></LinkedinShareButton>
                                        <TwitterShareButton url={url}><TwitterIcon size={40} round={true} /></TwitterShareButton>
                                    </div>
                                </div>
                                <div className="underline underline-left"></div>
                            </div>
                        </SectionTitle>
                        {/* Blog Post Content */}
                        <ContentMarkdown><ReactMarkdown children={post?.content} rehypePlugins={[rehypeRaw]} />
                        </ContentMarkdown>
                        <div style={{ marginTop: "40px" }}>
                            <span style={{ fontWeight: "bold", fontSize: "18px" }}>{moment(post?.creationDate).locale("fr").format("DD MMMM YYYY")} par {post?.author}</span>
                        </div>
                    </StyledHead>
                    <ReadMoreWrapper>
                        <h1>Lire plus</h1>
                        <SlickSlider {...settings} className="testimonial__slider">
                            {posts.map((blogContent, index) => (
                                <SliderItem key={index}>
                                    <BlogCard key={index} blogContent={blogContent} />
                                </SliderItem>
                            ))}
                        </SlickSlider>
                    </ReadMoreWrapper>
                </Container> :
                    <Container>
                        <Loading style={{ paddingBlock: "40vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/ff3883d6-13c1-4789-bec4-3edda705b83b/yjh56MTXlo.json"
                                className="loading"
                            >
                            </Player>
                        </Loading>
                    </Container>}
                <Footer />
            </Layout>
        </ThemeProvider>
    )
}

const Loading = styled.div`
.loading {
    padding: 0px;
    height: 180px;
    width: 180px 
  }
  @media only screen and (max-width: 768px) {
    .loading {
        padding: 0px;
        height: 120px;
        width: 120px 
      }
  }
  @media only screen and (max-width: 568px) {
    .loading {
        padding: 0px;
        height: 80px;
        width: 80px 
      }
  }
`

const ReadMoreWrapper = styled.div`
padding: 50px 0 120px 0;
position: relative;
//background-color: red;
h1 {
    color: ${props => props.theme.black};
    margin-bottom: 20px ;
}
.testimonial__slider {
    // background-color: red;
  .slick-arrow {
    position: absolute;
    bottom: -50px;
    left: 0px;
    background: transparent;
    border: none;
    display: flex!important;
    justify-content: center;
    align-items: center;
    flex-direction : row;
    font-size: 40px;
    line-height: 30px;
    cursor: pointer;
    span {
        font-size: 20px;
        font-weight: 600;
        margin-left: 5px;
        z-index: 99!important;
    }
    svg {
      fill: ${props => props.theme.primaryLightColor};
      transition: 450ms all;
    }
    &:hover {
      svg {
        fill: ${props => props.theme.primaryDarkColor};
      }
    }
  }
  .slick-next-icon {
    left: 85px;
  }
}
`

const ContentMarkdown = styled.div`
font-size: 18px;
margin-top: 0px;
h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
img {
    display: block;
    margin-inline: auto;
}
ul {
    marggin: 0;
    padding-inline-start : 30px!important;
}
@media only screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 22px;
    ul {
        marggin: 0;
        padding-inline-start : 22px!important;
    }
    h1 {
        font-size: 1.6em;
    }
    h2 {
        font-size: 1.4em;
    }
    h3 {
        font-size: 1.2em;
    }

}
`

const StyledHead = styled.div`
padding: 150px 0 20px 0;
.head {
    width: 100%;
    position: relative;
    margin-bottom: 60px;
    img {
        width: 100%;
        height: 100%;
        aspect-ratio: 3/1;
        object-fit: cover;
        // border-radius: 20px;
     }
}
.color-badge {
    position: absolute;
    width: 80px;
    height: 80px;
    bottom: -30px;
    right: 10%;
}
.pink {
    .color-badge {
        background-color: ${props => props.theme.rose};
    }
    span, .link {
        color: ${props => props.theme.rose};
    }
}
.green {
    .color-badge {
        background-color: ${props => props.theme.green};
    }
    span, .link {
        color: ${props => props.theme.green};
    }
}
.red {
    .color-badge {
        background-color: ${props => props.theme.red};
    }
    span, .link {
        color: ${props => props.theme.red};
    }
}
.yellow {
    .color-badge {
        background-color: ${props => props.theme.yellow};
    }
    span, .link {
        color: ${props => props.theme.yellow};
    }
}

.light-blue {
    .color-badge {
        background-color: ${props => props.theme.primaryLightColor};
    }
    span, .link {
        color: ${props => props.theme.primaryLightColor};
    }
}
.dark-blue {
    .color-badge {
        background-color: ${props => props.theme.primaryDarkColor};
    }
    span, .link {
        color: ${props => props.theme.primaryDarkColor};
    }
}
 .Shading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background: red; 
 }
 .contentContainer {
            position: absolute;
            padding-top: 1rem;
            padding-left: 2rem;
            padding-bottom: 2rem;
            bottom: 0;
            left: 0;
            width: 60%;
            height: 70%;
            // background-color: yellow;
            border-bottom-left-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
 }
 @media only screen and (max-width: 500px) {
    padding: 100px 0 20px 0;
    .color-badge {
        width: 40px;
        height: 40px;
        bottom: -10px;
        right: 10%;
    }
    .head {
        margin-bottom: 20px;
    }
    .contentContainer {
                padding-inline: 1rem;
                text-align: center;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
    }
 }
`

// const Tag = styled.span`
//     margin-right: 1rem;
//     margin-bottom: 0.6rem;
//     font-size: var(--size-300);
//     position: relative;
//     z-index: 2;
//     text-decoration: none;
//     color: white;
//     padding: 0.2rem 1rem;
//     border: 1px solid white;
//     border-radius: 4px;
//     cursor: pointer;
//     background-color: ${props => props.theme.primaryLightColor};
//     border: 1px solid ${props => props.theme.primaryLightColor};

//   & :hover {
//     background-color: rgba(255, 255, 255, .2);
//     border: 2px solid ${props => props.theme.primaryLightColor};
//   }

//   body {
//     backdrop-filter: blur(10px);
//     border: 1.2px solid white;
//     background-color: rgba(255, 255, 255, 0.1);
//   }

//   body &:hover {
//     background-color: rgba(255, 255, 255, 1);
//     color: ${props => props.theme.primaryLightColor};
//   }
// `;