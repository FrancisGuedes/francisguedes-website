export function createClassName(defaultClass: string, classes?: string) {
  return classes ? `${classes} ${defaultClass}` : defaultClass;
}