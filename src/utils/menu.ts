export function isMenuActive(pathname: string, menu: string) {
  return menu != "/" && pathname.includes(menu);
}
