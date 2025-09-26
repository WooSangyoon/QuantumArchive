import Link from "next/link"
import { GitHubLink, Navigations } from "@/settings/navigation"
import { LuArrowUpRight, LuGithub } from "react-icons/lu"

import { buttonVariants } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import Anchor from "@/components/navigation/anchor"
import { Logo } from "@/components/navigation/logo"
// import Search from "@/components/navigation/search"
import { SheetLeft } from "@/components/navigation/sidebar"
// import { ModeToggle } from "@/components/navigation/theme-toggle"

// 네비게이션 아이템 타입: external 은 선택 필드(없어도 됨)
export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export function Navbar() {
  return (
    <nav className="bg-opacity-5 sticky top-0 z-50 h-16 w-full border-b px-2 backdrop-blur-xl backdrop-filter md:px-4">
      <div className="mx-auto flex h-full items-center justify-between p-1 sm:p-3 md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeft />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex">
              <Logo />
            </div>
            <div className="text-muted-foreground hidden items-center gap-5 text-sm font-medium md:flex">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* <Search /> */}
          <div className="flex gap-2 sm:ml-0">
            {/* {GitHubLink.href && (
              <Link
                href={GitHubLink.href}
                className={buttonVariants({ variant: "outline", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the repository on GitHub"
              >
                <LuGithub className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            )} */}
            {/* <ModeToggle /> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }: { isSheet?: boolean }) {
  return (
    <>
      {Navigations.map((item: NavItem) => {
        // external 이 명시돼 있으면 우선 사용, 없으면 href로 자동 판별
        const isExternal =
          item.external ?? /^https?:\/\//.test(item.href)

        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="font-bold text-primary"
            absolute
            className="flex items-center gap-1 text-sm"
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {item.title}{" "}
            {isExternal && (
              <LuArrowUpRight className="h-3 w-3 align-super" strokeWidth={3} />
            )}
          </Anchor>
        )

        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
