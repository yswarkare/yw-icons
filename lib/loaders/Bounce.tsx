import withIconHoc from "./withIconHoc";

const BounceJsx = (
	<ellipse cx='12' cy='5' fill='currentColor' rx='4' ry='4'>
		<animate
			id='svgSpinnersBouncingBall0'
			fill='freeze'
			attributeName='cy'
			begin='0;svgSpinnersBouncingBall2.end'
			calcMode='spline'
			dur='0.375s'
			keySplines='.33,0,.66,.33'
			values='5;20'
		/>
		<animate
			attributeName='rx'
			begin='svgSpinnersBouncingBall0.end'
			calcMode='spline'
			dur='0.05s'
			keySplines='.33,0,.66,.33;.33,.66,.66,1'
			values='4;4.8;4'
		/>
		<animate
			attributeName='ry'
			begin='svgSpinnersBouncingBall0.end'
			calcMode='spline'
			dur='0.05s'
			keySplines='.33,0,.66,.33;.33,.66,.66,1'
			values='4;3;4'
		/>
		<animate
			id='svgSpinnersBouncingBall1'
			attributeName='cy'
			begin='svgSpinnersBouncingBall0.end'
			calcMode='spline'
			dur='0.025s'
			keySplines='.33,0,.66,.33'
			values='20;20.5'
		/>
		<animate
			id='svgSpinnersBouncingBall2'
			attributeName='cy'
			begin='svgSpinnersBouncingBall1.end'
			calcMode='spline'
			dur='0.4s'
			keySplines='.33,.66,.66,1'
			values='20.5;5'
		/>
	</ellipse>
)

const Bounce = withIconHoc(BounceJsx)

export default Bounce;
