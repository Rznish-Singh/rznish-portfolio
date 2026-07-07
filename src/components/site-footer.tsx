import { LICENSE, SOURCE_CODE_GITHUB_URL } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <dl className="flex flex-col gap-4 font-mono text-sm [&_dt]:text-muted-foreground">
          <Item>
            <dt>Crafted by</dt>
            <dd>rznish</dd>
          </Item>

          {/* <Item>
            <dt>Source code</dt>
            <dd>
              <a
                className="link-underline"
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </dd>
          </Item> */}

          {/* <Item>
            <dt>License</dt>
            <dd>
              <a className="link-underline" href={LICENSE.url} target="_blank" rel="noopener">
                {LICENSE.name}
              </a>
            </dd>
          </Item> */}
        </dl>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} rznish. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function Item({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>
}
