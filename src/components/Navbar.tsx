import Link from 'next/link';
import { Icons } from './Icons';
import MaxWidthWrapper from './MaxWidthWrapper';
import NavItems from './NavItems';

export const Navbar = () => {
  return (
    <div className=' bg-white sticky z-50 top-0 inset-0 h-16'>
      <header className=' relative bg-white'>
        <MaxWidthWrapper>
          <div className=' border-b border-gray-200'>
            <div className=' flex h-16 item-cemter'>
              {/* { todo: Mobile nav} */}

              <div className=' ml-4 flex lg:ml-0'>
                <Link href={'/'}>
                  <Icons.logo className=' h-16 w-16' />
                </Link>
              </div>

              <div className=' hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
