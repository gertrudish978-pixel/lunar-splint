// Prefixes public files with the GitHub Pages base path when one is set.
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
