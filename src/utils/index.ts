export const getResponsiveProps = (props: Record<string, string[]>): string =>
  Object.entries(props)
    .map(([size, props]) => props.map(prop => `${size}:${prop}`).join(' '))
    .join(' ');
