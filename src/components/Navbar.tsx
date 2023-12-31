import Logo from './ui/logo.tsx';
import { Separator } from './ui/separator.tsx';
import { Button } from './ui/button.tsx';
import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle.tsx';

import { useAuth } from '@/contexts/auth-context.ts';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="fixed bg-background top-0 w-full h-24 flex flex-col">
      <div className="w-full h-full py-8 px-16 flex flex-row justify-between">
        <Logo />
        
          <div className='md:w-1/2 lg:w-1/3 h-full flex flex-row items-center justify-between'>
            <div className="md:w-4/5 lg:w-3/4 h-full flex  justify-between items-center">
              {user && ( 
                <>
                  {!user.isAdmin && (
                    <>
                      <Button variant="outline" className="hover:text-white hover:bg-primary transition-all duration-300">
                        <Link to="/recipe/add">New Recipe</Link>
                      </Button>
                      <Button variant="link" className="hover:text-neutral-600 transition-all">
                        <Link to="/recipe">My Recipes</Link>
                      </Button>
                      <Button variant="link" className="hover:text-neutral-600 transition-all">
                        <Link to="/collection">My Collections</Link>
                      </Button>
                    </>
                  )}
                  {user.isAdmin && (
                    <>
                      <Button variant="outline" className="hover:text-white hover:bg-primary transition-all duration-300">
                        <Link to="/subscription">Manage Subscription</Link>
                      </Button>
                    </>
                  )}
                  <Button variant="link" className="hover:text-neutral-600 transition-all" onClick={logout}>
                    Logout
                  </Button>
                </>
              )}
              </div>
            <div className="aspect-square">
              <ModeToggle />
            </div>
          </div>
        
      </div>
      <Separator className="w-screen" />
    </div>
  );
};

export default Navbar;
