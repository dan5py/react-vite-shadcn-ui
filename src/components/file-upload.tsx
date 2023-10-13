import { Box } from '@radix-ui/themes';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

export default function FileDrop() {
  return (
    <Card className='max-w-md'>
      <CardHeader>
        <CardTitle>Upload nieuw document</CardTitle>
        <CardDescription>
          Het bestand wordt eerst gecheckt voordat het kan worden verwerkt
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Box className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
          Sleep bestand hier naartoe of klik om te uploaden
        </Box>
        <Box className='rt-ContextMenuContent rt-variant-soft' height={'9'}></Box>
        <Separator className='my-4' />
        <div className='space-y-4'>
          <h4 className='text-sm font-medium'>People with access</h4>
          <div className='grid gap-6'>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center space-x-4'>
                <Avatar>
                  <AvatarImage src='/avatars/03.png' />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-sm font-medium leading-none'>Olivia Martin</p>
                  <p className='text-sm text-muted-foreground'>m@example.com</p>
                </div>
              </div>
              <Select defaultValue='edit'>
                <SelectTrigger className='ml-auto w-[110px]'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='edit'>Can edit</SelectItem>
                  <SelectItem value='view'>Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center space-x-4'>
                <Avatar>
                  <AvatarImage src='/avatars/05.png' />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-sm font-medium leading-none'>Isabella Nguyen</p>
                  <p className='text-sm text-muted-foreground'>b@example.com</p>
                </div>
              </div>
              <Select defaultValue='view'>
                <SelectTrigger className='ml-auto w-[110px]'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='edit'>Can edit</SelectItem>
                  <SelectItem value='view'>Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center space-x-4'>
                <Avatar>
                  <AvatarImage src='/avatars/01.png' />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-sm font-medium leading-none'>Sofia Davis</p>
                  <p className='text-sm text-muted-foreground'>p@example.com</p>
                </div>
              </div>
              <Select defaultValue='view'>
                <SelectTrigger className='ml-auto w-[110px]'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='edit'>Can edit</SelectItem>
                  <SelectItem value='view'>Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
