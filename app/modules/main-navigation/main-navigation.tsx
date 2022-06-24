import { Building, Home, Users } from "tabler-icons-react";
import MainNavigationLink from "~/components/main-navigation-link";

export interface IMainNavigationProps {}

export type IMainNavigation = (props: IMainNavigationProps) => JSX.Element;

export const MainNavigation: IMainNavigation = () => {
	const data = [
		{
			icon: <Home size={16} />,
			color: "blue",
			label: "Projecten",
		},
		{
			icon: <Building size={16} />,
			color: "teal",
			label: "Organisaties",
		},
		{ icon: <Users size={16} />, color: "violet", label: "Gebruikers" },
	];

	const links = data.map((link) => (
		<MainNavigationLink {...link} key={link.label} />
	));

	return <div>{links}</div>;
};
