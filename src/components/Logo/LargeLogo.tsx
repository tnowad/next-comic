import clsx from "clsx";
import { LogoProps } from "./LogoProps";

export default function LargeLogo({ auto, className, ...props }: LogoProps) {
  return (
    <svg
      className={clsx(
        "block text-foreground data-[auto=true]:hidden data-[auto=true]:sm:block",
        className,
      )}
      viewBox="0 0 60 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.90909 0.272727V9H6.63636L0.670455 0.784091H0.636364V9H0.363636V0.272727H0.636364L6.60227 8.48864H6.63636V0.272727H6.90909ZM11.8832 9.13636C11.3121 9.13636 10.8121 8.98722 10.3832 8.68892C9.95703 8.39062 9.62607 7.9858 9.39027 7.47443C9.15447 6.96307 9.03658 6.38636 9.03658 5.74432C9.03658 5.10227 9.15447 4.52557 9.39027 4.0142C9.62891 3.50284 9.95277 3.09801 10.3619 2.79972C10.771 2.50142 11.2326 2.35227 11.7468 2.35227C12.1275 2.35227 12.4798 2.43324 12.8036 2.59517C13.1303 2.7571 13.4144 2.98153 13.6559 3.26847C13.8974 3.5554 14.0849 3.88636 14.2184 4.26136C14.3548 4.63352 14.4229 5.03125 14.4229 5.45455V5.72727H9.17294V5.45455H14.1502C14.1502 4.92898 14.0423 4.45312 13.8263 4.02699C13.6104 3.59801 13.3207 3.2571 12.957 3.00426C12.5934 2.75142 12.19 2.625 11.7468 2.625C11.2979 2.625 10.8917 2.75852 10.5281 3.02557C10.1644 3.29261 9.87322 3.65625 9.65447 4.11648C9.43572 4.5767 9.32067 5.09659 9.3093 5.67614V5.71023C9.3093 6.28125 9.40874 6.80682 9.6076 7.28693C9.8093 7.7642 10.1019 8.14631 10.4854 8.43324C10.869 8.72017 11.3349 8.86364 11.8832 8.86364C12.2866 8.86364 12.6246 8.79261 12.8974 8.65057C13.1729 8.50852 13.3931 8.34517 13.5579 8.16051C13.7255 7.97585 13.8491 7.81818 13.9286 7.6875L14.1502 7.84091C14.0536 8.00568 13.9087 8.18892 13.7156 8.39062C13.5224 8.59233 13.2752 8.76705 12.9741 8.91477C12.6729 9.0625 12.3093 9.13636 11.8832 9.13636ZM16.0934 2.45455L18.0195 5.48011L19.9457 2.45455H20.2695L18.1815 5.72727L20.2695 9H19.9457L18.0195 5.97443L16.0934 9H15.7695L17.8576 5.72727L15.7695 2.45455H16.0934ZM24.2241 2.45455V2.72727H21.6332V2.45455H24.2241ZM22.5877 0.886364H22.8604V7.61932C22.8604 7.875 22.9173 8.09517 23.0309 8.27983C23.1445 8.46165 23.2951 8.60227 23.4826 8.7017C23.6701 8.7983 23.8718 8.84659 24.0877 8.84659C24.1701 8.84659 24.2454 8.83949 24.3136 8.82528C24.3846 8.81108 24.457 8.78977 24.5309 8.76136L24.6161 9.01705C24.5309 9.0483 24.4471 9.07244 24.3647 9.08949C24.2823 9.10938 24.19 9.11932 24.0877 9.11932C23.8207 9.11932 23.5721 9.05824 23.342 8.93608C23.1147 8.81392 22.9315 8.64062 22.7923 8.41619C22.6559 8.19176 22.5877 7.92614 22.5877 7.61932V0.886364ZM33.0153 3H32.7255C32.6715 2.71023 32.5664 2.41477 32.4102 2.11364C32.2539 1.8125 32.0465 1.53409 31.788 1.27841C31.5295 1.02273 31.2241 0.816761 30.8718 0.660511C30.5195 0.504261 30.1204 0.426136 29.6744 0.426136C29.0778 0.426136 28.5252 0.589488 28.0167 0.916193C27.511 1.24006 27.1033 1.71591 26.7937 2.34375C26.4869 2.96875 26.3335 3.73295 26.3335 4.63636C26.3335 5.55114 26.4869 6.32102 26.7937 6.94602C27.1033 7.57102 27.511 8.04403 28.0167 8.36506C28.5252 8.68608 29.0778 8.84659 29.6744 8.84659C30.1204 8.84659 30.5195 8.76989 30.8718 8.61648C31.2241 8.46023 31.5295 8.25568 31.788 8.00284C32.0465 7.74716 32.2539 7.46875 32.4102 7.16761C32.5664 6.86364 32.6715 6.56534 32.7255 6.27273H33.0153C32.9613 6.57955 32.8533 6.89915 32.6914 7.23153C32.5295 7.56108 32.3107 7.86932 32.0352 8.15625C31.7596 8.44318 31.4258 8.67614 31.0337 8.85511C30.6417 9.03125 30.1886 9.11932 29.6744 9.11932C28.9585 9.11932 28.3292 8.93182 27.7866 8.55682C27.244 8.18182 26.8207 7.65767 26.5167 6.98438C26.2127 6.31108 26.0607 5.52841 26.0607 4.63636C26.0607 3.74432 26.2127 2.96165 26.5167 2.28835C26.8207 1.61506 27.244 1.09091 27.7866 0.715909C28.3292 0.340909 28.9585 0.153409 29.6744 0.153409C30.1886 0.153409 30.6417 0.241477 31.0337 0.417614C31.4258 0.59375 31.7596 0.825284 32.0352 1.11222C32.3107 1.39631 32.5295 1.70455 32.6914 2.03693C32.8533 2.36648 32.9613 2.6875 33.0153 3ZM37.3406 9.13636C36.8263 9.13636 36.3647 8.98864 35.9556 8.69318C35.5465 8.39489 35.2227 7.99006 34.984 7.47869C34.7482 6.96449 34.6303 6.38636 34.6303 5.74432C34.6303 5.09943 34.7482 4.52131 34.984 4.00994C35.2227 3.49858 35.5465 3.09517 35.9556 2.79972C36.3647 2.50142 36.8263 2.35227 37.3406 2.35227C37.8548 2.35227 38.315 2.50142 38.7212 2.79972C39.1303 3.09801 39.4542 3.50284 39.6928 4.0142C39.9315 4.52557 40.0508 5.10227 40.0508 5.74432C40.0508 6.38636 39.9315 6.96449 39.6928 7.47869C39.457 7.99006 39.1346 8.39489 38.7255 8.69318C38.3164 8.98864 37.8548 9.13636 37.3406 9.13636ZM37.3406 8.86364C37.8036 8.86364 38.2184 8.72727 38.5849 8.45455C38.9542 8.18182 39.2454 7.80966 39.4585 7.33807C39.6715 6.86648 39.7781 6.33523 39.7781 5.74432C39.7781 5.15341 39.6701 4.62358 39.4542 4.15483C39.2411 3.68324 38.9513 3.31108 38.5849 3.03835C38.2184 2.76278 37.8036 2.625 37.3406 2.625C36.8803 2.625 36.4656 2.76278 36.0962 3.03835C35.7298 3.31108 35.4386 3.68324 35.2227 4.15483C35.0096 4.62358 34.9031 5.15341 34.9031 5.74432C34.9031 6.33523 35.0096 6.86648 35.2227 7.33807C35.4357 7.80966 35.7255 8.18182 36.092 8.45455C36.4613 8.72727 36.8775 8.86364 37.3406 8.86364ZM41.9716 9V2.45455H42.2443V3.42614H42.2784C42.3977 3.10795 42.6108 2.85227 42.9176 2.65909C43.2273 2.46591 43.5994 2.36932 44.0341 2.36932C44.5284 2.36932 44.9219 2.49148 45.2145 2.7358C45.5099 2.98011 45.7131 3.30682 45.8239 3.71591H45.858C45.9659 3.30682 46.1847 2.98011 46.5142 2.7358C46.8438 2.49148 47.2557 2.36932 47.75 2.36932C48.4062 2.36932 48.8906 2.57812 49.2031 2.99574C49.5185 3.41051 49.6761 3.94602 49.6761 4.60227V9H49.4034V4.60227C49.4034 4.02273 49.2727 3.55114 49.0114 3.1875C48.75 2.82386 48.3295 2.64205 47.75 2.64205C47.1705 2.64205 46.7273 2.8267 46.4205 3.19602C46.1136 3.5625 45.9602 4.03125 45.9602 4.60227V9H45.6875V4.60227C45.6875 4.02273 45.5568 3.55114 45.2955 3.1875C45.0341 2.82386 44.6136 2.64205 44.0341 2.64205C43.6477 2.64205 43.321 2.72585 43.054 2.89347C42.7898 3.06108 42.5881 3.29261 42.4489 3.58807C42.3125 3.88352 42.2443 4.22159 42.2443 4.60227V9H41.9716ZM52.0252 9V2.45455H52.2979V9H52.0252ZM52.1616 1.26136C52.0877 1.26136 52.0238 1.23437 51.9698 1.1804C51.9158 1.12642 51.8888 1.0625 51.8888 0.988636C51.8888 0.914772 51.9158 0.850852 51.9698 0.796875C52.0238 0.742898 52.0877 0.715909 52.1616 0.715909C52.2354 0.715909 52.2994 0.742898 52.3533 0.796875C52.4073 0.850852 52.4343 0.914772 52.4343 0.988636C52.4343 1.0625 52.4073 1.12642 52.3533 1.1804C52.2994 1.23437 52.2354 1.26136 52.1616 1.26136ZM57.0036 9.13636C56.4751 9.13636 56.0036 8.98864 55.5888 8.69318C55.1768 8.39489 54.8516 7.99006 54.6129 7.47869C54.3771 6.96733 54.2592 6.3892 54.2592 5.74432C54.2592 5.10511 54.3771 4.52983 54.6129 4.01847C54.8487 3.50426 55.1726 3.09801 55.5845 2.79972C55.9993 2.50142 56.4723 2.35227 57.0036 2.35227C57.3956 2.35227 57.755 2.4375 58.0817 2.60795C58.4112 2.77557 58.6868 3.01136 58.9084 3.31534C59.13 3.61648 59.2734 3.96591 59.3388 4.36364H59.049C58.9609 3.84943 58.7266 3.43182 58.3459 3.1108C57.968 2.78693 57.5206 2.625 57.0036 2.625C56.5348 2.625 56.1129 2.76136 55.7379 3.03409C55.3658 3.30398 55.0717 3.67472 54.8558 4.14631C54.6399 4.61506 54.532 5.14773 54.532 5.74432C54.532 6.32386 54.6357 6.84943 54.843 7.32102C55.0533 7.79261 55.3445 8.16761 55.7166 8.44602C56.0888 8.72443 56.5178 8.86364 57.0036 8.86364C57.353 8.86364 57.674 8.79119 57.9666 8.64631C58.2592 8.49858 58.5021 8.29119 58.6953 8.02415C58.8913 7.7571 59.0149 7.44602 59.0661 7.09091H59.3558C59.2933 7.50284 59.1513 7.86222 58.9297 8.16903C58.7081 8.47585 58.4311 8.71449 58.0987 8.88494C57.7663 9.05256 57.4013 9.13636 57.0036 9.13636Z"
        fill="white"
      />
    </svg>
  );
}
