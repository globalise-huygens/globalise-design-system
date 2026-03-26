import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { NavSearchBar, NavLinks, NavLink } from "./Navbar";
import { LogoNavbar } from "../logo/LogoNavbar";

const meta = {
  title: "UI/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Navbar logo={<LogoNavbar className="h-9 w-auto text-white" />}>
      <NavSearchBar placeholder="Search the archive" />
      <NavLinks>
        <NavLink href="#">Archive</NavLink>
        <NavLink href="#">Explore</NavLink>
        <NavLink href="#">About</NavLink>
      </NavLinks>
    </Navbar>
  ),
};

export const WithoutSearch: Story = {
  render: () => (
    <Navbar logo={<LogoNavbar className="h-9 w-auto text-white" />}>
      <NavLinks>
        <NavLink href="#">Archive</NavLink>
        <NavLink href="#">Explore</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavLinks>
    </Navbar>
  ),
};

export const LogoOnly: Story = {
  render: () => (
    <Navbar logo={<LogoNavbar className="h-9 w-auto text-white" />} />
  ),
};
