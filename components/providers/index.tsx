import { ViewTransitions } from "@/lib/transition"
import { ThemeProvider } from "@/components/providers/theme"

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"     // <- 핵심: 테마를 다크로 강제
          enableSystem={false}   // 시스템 테마 무시
          disableTransitionOnChange
        >
      <ViewTransitions>{children}</ViewTransitions>
    </ThemeProvider>
  )
}
