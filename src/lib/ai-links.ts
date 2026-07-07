function prompt(url: string) {
  return `Read from ${url} so I can ask questions about it.`
}

export function buildAIToolLinks(url: string) {
  const q = encodeURIComponent(prompt(url))
  return {
    chatgpt: `https://chatgpt.com/?q=${q}`,
    claude: `https://claude.ai/new?q=${q}`,
    cursor: `https://cursor.com/?q=${q}`,
    grok: `https://grok.com/?q=${q}`,
    scira: `https://scira.ai/?q=${q}`,
  }
}