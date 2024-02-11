// declaration.d.ts
declare module "uikit"

declare module "*.scss" {
  const content: Record<string, string>
  export default content
}

declare module "*.scss" {
  const css: { [key: string]: string }
  export default css
}

declare module "react-markup"
declare module "*.webp"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"