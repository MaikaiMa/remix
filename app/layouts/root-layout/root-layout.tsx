import type { PropsWithChildren } from "react";
import { AppShell, Header, Navbar } from "@mantine/core";
import Logo from "~/components/logo";
import { MainNavigation } from "~/modules/main-navigation/main-navigation";

export interface IRootLayoutProps {}

export type IRootLayout = (
	props: PropsWithChildren<IRootLayoutProps>
) => JSX.Element;

export const RootLayout: IRootLayout = ({ children }) => (
	<AppShell
		padding="md"
		navbar={
			<Navbar width={{ base: 300 }} height={500} p="xs">
				<Navbar.Section grow mt="md">
					<MainNavigation />
				</Navbar.Section>
				<Navbar.Section>Footer</Navbar.Section>
			</Navbar>
		}
		header={
			<Header height={78} p="xs">
				<Logo />
			</Header>
		}
	>
		{children}
	</AppShell>
);

export default RootLayout;
