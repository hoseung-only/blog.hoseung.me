import { ComponentType, Suspense } from "react";

export function withPlaceholder<ComponentProps extends {}>(
  Component: ComponentType<ComponentProps>,
  Placeholder: ComponentType<{}>
) {
  return (props: ComponentProps) => (
    <Suspense fallback={<Placeholder />}>
      <Component {...props} />
    </Suspense>
  );
}
