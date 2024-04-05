import clsx from "clsx";

interface FullWidthContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidthChildren?: boolean;
}

/**
 * Renders a container component that spans the full width of the screen or a maximum width container.
 * @param children - The content to be rendered inside the container.
 * @param className - Additional CSS class names to be applied to the container.
 * @param fullWidthChildren - Determines whether the children should span the full width of the container or be contained within a maximum width container.
 * @returns The rendered FullWidthContainer component.
 */
export default function FullWidthContainer({
  children,
  className = "",
  fullWidthChildren = false,
}: FullWidthContainerProps) {
  return (
    <div
      style={{ margin: "0 calc(50% - 50vw)" }}
      className={clsx("w-screen", className)}
    >
      {fullWidthChildren ? (
        children
      ) : (
        <div className="max-w-screen-xl mx-auto">{children}</div>
      )}
    </div>
  );
}
