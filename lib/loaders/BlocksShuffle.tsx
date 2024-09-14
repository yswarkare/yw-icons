import { JSX } from "react";
import withIconHoc from "./withIconHoc";

const BlocksShuffleJsx: JSX.Element = (
	<><rect width='10' height='10' x='1' y='1' fill='currentColor' rx='1'>
		<animate
			id='svgSpinnersBlocksShuffle30'
			fill='freeze'
			attributeName='x'
			begin='0;svgSpinnersBlocksShuffle3b.end'
			dur='0.2s'
			values='1;13' />
		<animate
			id='svgSpinnersBlocksShuffle31'
			fill='freeze'
			attributeName='y'
			begin='svgSpinnersBlocksShuffle38.end'
			dur='0.2s'
			values='1;13' />
		<animate
			id='svgSpinnersBlocksShuffle32'
			fill='freeze'
			attributeName='x'
			begin='svgSpinnersBlocksShuffle39.end'
			dur='0.2s'
			values='13;1' />
		<animate
			id='svgSpinnersBlocksShuffle33'
			fill='freeze'
			attributeName='y'
			begin='svgSpinnersBlocksShuffle3a.end'
			dur='0.2s'
			values='13;1' />
	</rect><rect width='10' height='10' x='1' y='13' fill='currentColor' rx='1'>
			<animate
				id='svgSpinnersBlocksShuffle34'
				fill='freeze'
				attributeName='y'
				begin='svgSpinnersBlocksShuffle30.end'
				dur='0.2s'
				values='13;1' />
			<animate
				id='svgSpinnersBlocksShuffle35'
				fill='freeze'
				attributeName='x'
				begin='svgSpinnersBlocksShuffle31.end'
				dur='0.2s'
				values='1;13' />
			<animate
				id='svgSpinnersBlocksShuffle36'
				fill='freeze'
				attributeName='y'
				begin='svgSpinnersBlocksShuffle32.end'
				dur='0.2s'
				values='1;13' />
			<animate
				id='svgSpinnersBlocksShuffle37'
				fill='freeze'
				attributeName='x'
				begin='svgSpinnersBlocksShuffle33.end'
				dur='0.2s'
				values='13;1' />
		</rect><rect width='10' height='10' x='13' y='13' fill='currentColor' rx='1'>
			<animate
				id='svgSpinnersBlocksShuffle38'
				fill='freeze'
				attributeName='x'
				begin='svgSpinnersBlocksShuffle34.end'
				dur='0.2s'
				values='13;1' />
			<animate
				id='svgSpinnersBlocksShuffle39'
				fill='freeze'
				attributeName='y'
				begin='svgSpinnersBlocksShuffle35.end'
				dur='0.2s'
				values='13;1' />
			<animate
				id='svgSpinnersBlocksShuffle3a'
				fill='freeze'
				attributeName='x'
				begin='svgSpinnersBlocksShuffle36.end'
				dur='0.2s'
				values='1;13' />
			<animate
				id='svgSpinnersBlocksShuffle3b'
				fill='freeze'
				attributeName='y'
				begin='svgSpinnersBlocksShuffle37.end'
				dur='0.2s'
				values='1;13' />
		</rect></>
)


const BlocksShuffle = withIconHoc(BlocksShuffleJsx);

export default BlocksShuffle;
