import { cn } from "@/lib/utils";

function NavItem({
  title,
  href,
  isActive,
}: {
  title: string;
  href: string;
  isActive: boolean;
}) {
  return (
    <li>
      <a href={`#${href}`} className="group flex items-center py-3">
        <span
          className={cn(
            "mr-4 h-px transition-all group-hover:w-16 group-hover:dark:bg-slate-200 group-focus-visible:w-16 group-focus-visible:dark:bg-slate-200 group-hover:bg-primary motion-reduce:transition-none",
            isActive
              ? "w-16 dark:bg-slate-200 bg-primary"
              : "w-8 dark:bg-slate-600 bg-muted-foreground"
          )}
        />
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-widest group-hover:dark:text-slate-200 group-focus-visible:dark:text-slate-200 group-hover:text-primary group-focus-visible:text-primary",
            isActive
              ? "dark:text-slate-200 text-primary"
              : "dark:text-slate-500 text-muted-foreground"
          )}
        >
          {title}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
