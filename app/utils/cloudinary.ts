/**
 * Extract the Cloudinary public ID from a full Cloudinary URL.
 * e.g., "https://res.cloudinary.com/demo/image/upload/v1234/folder/photo.jpg"
 *       → "folder/photo.jpg"
 */
export function extractCloudinaryPath(url: string): string {
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)$/)
  return match?.[1] ?? url
}
