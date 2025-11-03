'use client';

import type { MenuItem } from "@/lib/mockData/menuList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ data }: { data: MenuItem[] }) => {
  const pathname = usePathname();

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ul className={`main-menu one-page-nav `}>
      {data.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <li key={index}>
            {item.href.startsWith('#') ? (
              <a
                href={item.href}
                onClick={(e) => handleHashLinkClick(e, item.href)}
                className={isActive ? 'active' : ''}
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className={isActive ? 'active' : ''}>
                {item.label}
              </Link>
            )}

            {item.subMenu && (
              <ul className="sub-menu">
                {item.subMenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    {sub.href.startsWith('#') ? (
                      <a
                        href={sub.href}
                        onClick={(e) => handleHashLinkClick(e, sub.href)}
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link href={sub.href}>{sub.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
