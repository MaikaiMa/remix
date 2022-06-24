export interface ILogoProps {
	size?: number;
	color?: string;
}

export type ILogo = (props: ILogoProps) => JSX.Element;

export const Logo: ILogo = ({ size = 56, color = "#10241E" }) => (
	<svg
		x="0px"
		y="0px"
		width={`${size}px`}
		height={`${size}px`}
		viewBox="0 0 500 500"
	>
		<g>
			<path
				fill={color}
				d="M254.9,267h-17.2v28.8h17.2c9.6,0,15.2-5.8,15.2-14.5C270.1,272.8,264.2,267,254.9,267z"
			/>
			<path
				fill={color}
				d="M377,170.5c-8.7,0-15.7,6-18,15.3h34.4C393.2,176.4,386,170.5,377,170.5z"
			/>
			<path
				fill={color}
				d="M228,213.8c11.1,0,19.5-8.7,19.5-20.5s-8.4-20.8-19.5-20.8c-11.5,0-19.5,8.7-19.5,20.8
		C208.5,205.1,216.6,213.8,228,213.8z"
			/>
			<path
				fill={color}
				d="M250,2.5C113.3,2.5,2.5,113.3,2.5,250c0,136.7,110.8,247.5,247.5,247.5c136.7,0,247.5-110.8,247.5-247.5
		C497.5,113.3,386.7,2.5,250,2.5z M228,153.8c22.1-0.3,41.1,17.9,40.6,39.4c0.5,21.5-18.6,40-40.8,39.6c-22.1,0.5-40.8-18-40.3-39.6
		C187.1,171.7,205.9,153.4,228,153.8z M101.1,155.5h21.8l18.5,49.6l19.7-49.6h21.7l-36.2,82.2c-6.9,15.7-16,22.8-30.1,22.8
		c-4.3,0-10.4-1-15-2.2V241c4.7,0.5,9.4,1,10.6,1c7.3,0,12.2-2.3,15.7-10.2l2.3-5.2L101.1,155.5z M155.1,332.3
		c12,0,21.6-5.6,28.8-16.9l15.5,11c-8.7,15.7-25.1,25-44.5,25c-29.4,0.6-54.1-23.3-53.5-52.1c-0.2-13.8,5.4-26.4,14.5-35.8
		c0.7,0,1.5,0.1,2.2,0.1c11.6,0,19.9-4.9,26.3-15.5c3.5-0.6,7-1,10.7-0.9c19.1,0,35.4,9.3,44.4,25L184,283
		c-7.2-11.3-16.8-16.9-28.8-16.9c-18.7,0-32.5,14-32.5,33.2C122.7,318.5,136.4,332.3,155.1,332.3z M278.8,349.5L252.7,314h-15.1
		v35.5h-20.6V248.9h37.8c21,0,36.3,13.1,36.3,32.5c0,12.8-6.7,23.2-17.7,28.6l28.5,39.5H278.8z M305.3,193.4v37.7h-20.6v-75.6h18.9
		v9c5-6.3,12.4-9.9,20.8-9.9c2.6,0,4.7,0.3,6.7,0.9v18.2h-5.5C313.3,173.7,305.3,180.4,305.3,193.4z M413.1,349.5h-20.6v-53.6
		l-25.3,31.7h-6.7l-25.3-31.7v53.6h-20.6V247.1h6.7l42.5,54.4l42.5-54.4h6.7V349.5z M412,200.2h-53c2.4,9.6,10.2,15,21.2,15
		c7.5,0,14.5-2.6,21.1-7.6l8.6,14.1c-9,7.5-19.1,11.3-30.2,11.3c-23.4,0.5-41.8-17.7-41.4-39.6c-0.5-21.8,17.7-40,39.6-39.6
		c20.9,0,35.6,15.4,35.6,35.1C413.3,192.6,412.9,196.4,412,200.2z"
			/>
		</g>
	</svg>
);

export default Logo;