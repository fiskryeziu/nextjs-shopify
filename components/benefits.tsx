import React from "react";
import { PhoneCall, ArchiveRestore, BadgeCheck, Truck } from "lucide-react";
const PhoneCallIcon = () => <PhoneCall className="w-10 lg:w-18 h-auto" />;

const ArchiveRestoreIcon = () => (
  <ArchiveRestore className="w-10 lg:w-18 h-auto" />
);
const BadgeCheckIcon = () => <BadgeCheck className="w-10 lg:w-18 h-auto" />;
const TruckIcon = () => <Truck className="w-10 lg:w-18 h-auto" />;
const benefits = [
  {
    icon: <PhoneCallIcon />,
    title: "24/7 Customer Service",
    subtitle:
      "We're here to help you with any questions or concerns you have, 24/7.",
  },
  {
    icon: <ArchiveRestoreIcon />,
    title: "14-day Money Back",
    subtitle:
      "If you're not satisfied with your purchase, simply return it within 14 days for a refund.",
  },
  {
    icon: <BadgeCheckIcon />,
    title: "Our Guarantee",
    subtitle:
      "We stand behind our products and services and guarantee your satisfaction.",
  },
  {
    icon: <TruckIcon />,
    title: "Shipping Worldwide",
    subtitle:
      "We ship our products worldwide, making them accessible to customers everywhere.",
  },
];

export default function Benefits() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {benefits.map((item, idx) => (
        <div
          className="flex flex-col items-center justify-center p-4 m-2 gap-4"
          key={idx}
        >
          {item.icon}
          <p>{item.title}</p>
          <p className="text-sm text-gray-700 text-center">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
