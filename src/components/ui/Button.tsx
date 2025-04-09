// Placeholder for a reusable Button component
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props}>{props.children}</button>;
}
