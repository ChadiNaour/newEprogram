import styled from 'styled-components';

const ModalvideoWrapper = styled.section`

@keyframes modal-video {

	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
@keyframes modal-video-inner {
	from {
		transform: translate(0, 100px);
	}

	to {
		transform: translate(0, 0);
	}
}

.modal-video {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	z-index: 1000000;
	cursor: pointer;
	opacity: 1;
	animation-timing-function: east-out;
	animation-duration: .3s;
	animation-name: modal-video;
	-webkit-transition: opacity .3s east-out;
	-moz-transition: opacity .3s east-out;
	-ms-transition: opacity .3s east-out;
	-o-transition: opacity .3s east-out;
	transition: opacity .3s east-out;
}

.modal-video-effect-exit {
	opacity: 0;

	& .modal-video-movie-wrap {
		-webkit-transform: translate(0, 100px);
		-moz-transform: translate(0, 100px);
		-ms-transform: translate(0, 100px);
		-o-transform: translate(0, 100px);
		transform: translate(0, 100px);
	}
}

.modal-video-body {
	max-width: 960px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0 10px;
    display: flex;
    justify-content: center;
	box-sizing: border-box;
}

.modal-video-inner {
	display: flex;
    justify-content: center;
    align-items: center;
	width: 100%;
	height: 100%;

    @media (orientation: landscape) {
        padding: 10px 60px;
        box-sizing: border-box;
    }
}

.modal-video-movie-wrap {
	width: 100%;
	height: 0;
	position: relative;
	padding-bottom: 56.25%;
	background-color: #333;
	animation-timing-function: east-out;
	animation-duration: .3s;
	animation-name: modal-video-inner;
	-webkit-transform: translate(0, 0);
	-moz-transform: translate(0, 0);
	-ms-transform: translate(0, 0);
	-o-transform: translate(0, 0);
	transform: translate(0, 0);
	-webkit-transition: -webkit-transform .3s east-out;
	-moz-transition: -moz-transform .3s east-out;
	-ms-transition: -ms-transform .3s east-out;
	-o-transition: -o-transform .3s east-out;
	transition: transform .3s east-out;

	& iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}

.modal-video-close-btn {
	position: absolute;
	z-index: 2;
	top: -45px;
	right: 0px;
	display: inline-block;
	width: 35px;
	height: 35px;
	overflow: hidden;
	border: none;
	background: transparent;

    @media (orientation: landscape) {
        top: 0;
        right: -45px;
    }

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}

	&:before,
	&:after {
		
		position: absolute;
		height: 2px;
		width: 100%;
		top: 50%;
		left: 0;
		margin-top: -1px;
		background: #fff;
		border-radius: 5px;
		margin-top: -6px;
	}
}
`
export default ModalvideoWrapper;

