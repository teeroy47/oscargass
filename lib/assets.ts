const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function resolveStaticAssetPath(path: string) {
  if (!path) {
    return path;
  }

  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  if (basePath && path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}

export function stripStaticAssetBasePath(path: string) {
  if (!path || !basePath) {
    return path;
  }

  return path.startsWith(`${basePath}/`) ? path.slice(basePath.length) : path;
}
