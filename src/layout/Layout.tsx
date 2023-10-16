import { Separator } from "@/components/ui/separator";
import SidebarNav from "../components/sidebar-nav";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import TopNavBar from "../components/top-nav";
import { sidebarNavItems } from "../components/nav-items";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Flex direction="column" className="min-h-screen w-screen  bg-light">
      <Grid
        columns={{ initial: "1", lg: "1fr 4fr" }}
        gapX="5"
        gapY="6"
        className="p-10 bg-background"
        width="100%"
      >
        <Box width="max-content">
          <img src="/noodfonds.svg" alt="SVG as an image" width="200" />
        </Box>

        <TopNavBar
          props={{ img: "", firstname: "Emile", lastname: "Cornelissen" }}
        />
      </Grid>
      <Separator />
      <Grid
        columns={{ initial: "1", lg: "1fr 4fr" }}
        gapX="5"
        gapY="6" // Add this style to stretch to the bottom
        className="p-10 pb-16"
        width="100%"
      >
        <Box width="max-content">
          <SidebarNav items={sidebarNavItems} />
        </Box>
        <Box className="flex-1">{children}</Box>
      </Grid>
    </Flex>
  );
}
