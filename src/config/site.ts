export const SITE_NAME = "rznish"
export const SITE_URL = "https://rznish.com"
export const SITE_DESCRIPTION =
  "rznish — software and Design engineer, building thoughtful products on the web."

export const SOURCE_CODE_GITHUB_URL = "https://github.com/rznish"
export const X_HANDLE = "@rznishsigh"

export const LICENSE = {
  name: "MIT",
  url: "https://github.com/rznish/rznish.com/blob/main/LICENSE",
}
export const SCROLL_AREA_ID = "scroll-area"

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export type NavItem = {
  title: string
  href: string
}

export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Testimonials", href: "/testimonials" },
    
]

export const MOBILE_NAV: NavItem[] = MAIN_NAV
export const SPONSORSHIP_URL = "https://github.com/sponsors/rznish" // swap in your real sponsorship link

export const UTM_PARAMS = {
  utm_source: "rznish.com",
  utm_medium: "sponsors_page",
}