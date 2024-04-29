import clsx from "clsx";
import Link from "next/link";

interface ContactButtonProps {
  label?: string;
  href?: string;
  variant?: "primary" | "secondary";
}

const ContactButton = ({
  label = "Contacto",
  href = "/contacto",
  variant = "primary",
}: ContactButtonProps) => {
  return (
    <Link href={href}>
      <div
        className={clsx(
          "hover:ring-2 ring-white duration-300 ease-in-out font-bold rounded-full px-6 py-3 text-white",
          variant === "primary" ? "bg-primary hover:text-accent" : 'ring-2'
        )}
      >
        {label}
      </div>
    </Link>
  );
};

export default ContactButton;
