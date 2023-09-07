import { IconSvgProps } from "@/types/svg";
import SmallLogo from "./SmallLogo";
import LargeLogo from "./LargeLogo";
import { LogoProps } from "./LogoProps";

export default function Logo({ auto, small, ...props }: LogoProps) {
  if (auto) {
    return (
      <div>
        <SmallLogo auto={auto} {...props} />
        <LargeLogo auto={auto} {...props} />
      </div>
    );
  }

  if (small) {
    return <SmallLogo {...props} />;
  }

  return <LargeLogo auto={auto} {...props} />;
}
