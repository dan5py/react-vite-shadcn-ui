import { Separator } from '@/components/ui/separator';
import SidebarNav from './sidebar-nav';
import { Box, Flex, Text, Heading, ScrollArea } from '@radix-ui/themes';
import TopNavBar from './top-nav';
import { sidebarNavItems } from './nav-items';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      {/* <div className='hidden space-y-6 p-10 pb-16 md:block'> */}
      <Flex direction='column' className='space-y-6 p-10 pb-16 max-h-screen font-sans'>
        <TopNavBar props={{ img: '', firstname: 'Emile', lastname: 'Cornelissen' }} />
        <Separator className='my-6' />
        <Flex
          direction={{ initial: 'column', lg: 'row' }}
          className='space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'
        >
          <aside className='-mx-4 lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex-1'>{children}</div>
        </Flex>
      </Flex>
    </>
  );
}
