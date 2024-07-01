import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
} from "./navigation-menu";

const meta: Meta<typeof NavigationMenu> = {
  title: "shadcn/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const NavigationMenuWrapper = () => {
  return (
    <div className="h-40">
      <NavigationMenu className="flex flex-col items-center space-y-4">
        <NavigationMenuList className="flex w-full justify-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-48 p-2">
              Menu 1
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <NavigationMenuLink href="#link1" className="block w-48 p-2">
                Link 1
              </NavigationMenuLink>
              <NavigationMenuLink href="#link2" className="block w-48 p-2">
                Link 2
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-48 p-2">
              Menu 2
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <NavigationMenuLink href="#link3" className="block w-48 p-2">
                Link 3
              </NavigationMenuLink>
              <NavigationMenuLink href="#link4" className="block w-48 p-2">
                Link 4
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    </div>
  );
};


export const DefaultMenu: Story = {
  render: () => (
    <div className="h-40">
      <NavigationMenu className="flex flex-col items-center space-y-4">
        <NavigationMenuList className="flex w-full justify-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-48 p-2">
              Default Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <NavigationMenuLink href="#default1" className="block w-48 p-2">
                Default Link 1
              </NavigationMenuLink>
              <NavigationMenuLink href="#default2" className="block w-48 p-2">
                Default Link 2
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    </div>
  ),
};

export const MultipleMenus: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <NavigationMenuWrapper />
      <NavigationMenu className="flex flex-col items-center space-y-4 h-[400px]">
        <NavigationMenuList className="flex w-full justify-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-48 p-2">
              Another Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <NavigationMenuLink href="#another1" className="block w-48 p-2">
                Another Link 1
              </NavigationMenuLink>
              <NavigationMenuLink href="#another2" className="block w-48 p-2">
                Another Link 2
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    </div>
  ),
};
