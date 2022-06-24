import type { ReactNode } from "react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";

export interface IMainNavigationLinkProps {
	icon: ReactNode;
	color: string;
	label: string;
}

export type IMainNavigationLink = (
	props: IMainNavigationLinkProps
) => JSX.Element;

export const MainNavigationLink: IMainNavigationLink = ({
	icon,
	color,
	label,
}) => (
	<UnstyledButton
		sx={(theme) => ({
			display: "block",
			width: "100%",
			padding: theme.spacing.xs,
			borderRadius: theme.radius.sm,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[0]
					: theme.black,

			"&:hover": {
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[6]
						: theme.colors.gray[0],
			},
		})}
	>
		<Group>
			<ThemeIcon color={color} variant="light">
				{icon}
			</ThemeIcon>

			<Text size="sm">{label}</Text>
		</Group>
	</UnstyledButton>
);

export default MainNavigationLink;
