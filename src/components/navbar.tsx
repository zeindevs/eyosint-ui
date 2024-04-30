import { Link, NavLink } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from './mode-toggle'
import { cn } from '@/lib/utils'

const navManuStyles = (active?: boolean) =>
  cn(
    navigationMenuTriggerStyle(),
    'relative after:absolute after:bottom-0 after:duration-500 hover:after:w-[80%] after:border-b-2 after:border-primary',
    active ? 'after:w-[80%]' : 'after:w-0',
  )

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex max-w-7xl items-center justify-between gap-3 px-5 py-2">
        <Link to="/" className="text-2xl font-medium">
          <span className="font-bold text-primary">EYE</span>OSINT
        </Link>
        <div className="flex items-center gap-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="hidden md:flex">
                <NavLink to={`/new-threat`}>
                  {({ isActive }) => <span className={navManuStyles(isActive)}>New Threat</span>}
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:flex">
                <NavLink to={`/how-it-work`}>
                  {({ isActive }) => <span className={navManuStyles(isActive)}>How it Work</span>}
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to={`/login`}>
                  {({ isActive }) => <span className={navManuStyles(isActive)}>Login</span>}
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
