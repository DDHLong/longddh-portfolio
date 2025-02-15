import { cn } from "@/lib/utils";

function NavItem({ title, href }: { title: string; href: string }) {
  const isActive = false;
  return (
    <a href={`#${href}`} className="group flex items-center py-3">
      <span
        className={cn(
          "mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
          isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
        )}
      />
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200",
          isActive ? "text-slate-200" : "text-slate-500"
        )}
      >
        {title}
      </span>
    </a>
  );
}

export default NavItem;
