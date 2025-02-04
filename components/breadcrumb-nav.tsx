import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ChevronRight,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function BreadcrumbNav() {
  return (
    <div className="pb-10 pt-4 flex justify-between items-center flex-wrap gap-5 px-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="">HomePage</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="">Women</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Leather boots with tall leg</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-10 text-sm">
        <Link href="" className="flex items-center text-primary/60 gap-2">
          <CircleChevronLeft size={20} className="text-primary" />
          Previous Product
        </Link>
        <Link href="" className="flex items-center text-primary/60 gap-2">
          Next Product
          <CircleChevronRight size={20} className="text-primary" />
        </Link>
      </div>
    </div>
  );
}
