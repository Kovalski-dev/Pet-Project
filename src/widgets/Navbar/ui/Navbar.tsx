import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}></div>
      <AppLink
        to={"/"}
        className={cls.generalLink}
        theme={AppLinkTheme.SECONDARY}
      >
        General
      </AppLink>
      <AppLink
        to={"/about"}
        className={cls.aboutLink}
        theme={AppLinkTheme.SECONDARY}
      >
        About
      </AppLink>
    </div>
  );
};

export default Navbar;
