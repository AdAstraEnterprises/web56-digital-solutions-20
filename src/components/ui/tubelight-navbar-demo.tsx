
import { briefcase, user, home, fileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: home },
    { name: 'About', url: '#', icon: user },
    { name: 'Projects', url: '#', icon: briefcase },
    { name: 'Resume', url: '#', icon: fileText }
  ]

  return <NavBar items={navItems} />
}
