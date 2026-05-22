import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Bot,
  ChartNoAxesCombined,
  CircleDashed,
  GalleryVerticalEnd,
  Map as MapIcon,
  Plus,
  Settings2,
  SquareTerminal,
} from 'lucide-react'

export type Workspace = {
  id: string
  name: string
  plan: string
  logo: LucideIcon
}

export type PrimaryNavigationGroup = {
  id: string
  title: string
  icon: LucideIcon
  children?: readonly string[]
  defaultOpen?: boolean
}

export type ProjectNavigationItem = {
  id: string
  title: string
  icon: LucideIcon
}

export type SidebarUser = {
  name: string
  email: string
  initials: string
}

export const workspaces: readonly Workspace[] = [
  { id: 'acme-inc', name: 'Acme Inc', plan: 'Enterprise', logo: GalleryVerticalEnd },
]

export const workspaceMenu = {
  label: 'Workspaces',
  addItem: { id: 'add-workspace', title: 'Add workspace', icon: Plus },
} as const

export const primaryNavigationGroups: readonly PrimaryNavigationGroup[] = [
  {
    id: 'playground',
    title: 'Playground',
    icon: SquareTerminal,
    children: ['History', 'Starred', 'Settings'],
  },
  { id: 'models', title: 'Models', icon: Bot, children: ['Genesis', 'Explorer', 'Quantum'] },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: BookOpen,
    children: ['Introduction', 'Get Started', 'Tutorials', 'Changelog'],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: Settings2,
    children: ['General', 'Team', 'Billing', 'Limits'],
  },
]

export const projectNavigationItems: readonly ProjectNavigationItem[] = [
  { id: 'design-engineering', title: 'Design Engineering', icon: ChartNoAxesCombined },
  { id: 'sales-marketing', title: 'Sales & Marketing', icon: CircleDashed },
  { id: 'travel', title: 'Travel', icon: MapIcon },
]

export const sidebarUser: SidebarUser = {
  name: 'shadcn',
  email: 'm@example.com',
  initials: 'CN',
}
