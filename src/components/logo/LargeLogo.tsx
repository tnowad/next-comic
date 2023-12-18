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
      {...props}
    >
      <path d="M5.784 2.024C6.016 2.024 6.256 2.252 6.504 2.708C6.752 3.164 6.96 3.688 7.128 4.28C7.296 4.864 7.38 5.3 7.38 5.588C7.38 6.028 7.284 6.424 7.092 6.776C6.908 7.12 6.644 7.392 6.3 7.592C5.956 7.784 5.564 7.88 5.124 7.88C4.516 7.88 3.988 7.716 3.54 7.388C3.1 7.06 2.748 6.684 2.484 6.26C2.22 5.828 1.948 5.312 1.668 4.712L1.5 4.352L1.524 7.256C1.524 7.432 1.492 7.604 1.428 7.772C1.372 7.932 1.272 8.012 1.128 8.012C0.984 8.012 0.88 7.932 0.816 7.772C0.752 7.604 0.72 7.44 0.72 7.28C0.72 6.768 0.76 6.032 0.84 5.072C0.92 4.112 0.96 3.396 0.96 2.924C0.96 2.812 0.952 2.696 0.936 2.576C0.92 2.456 0.908 2.372 0.9 2.324C0.86 2.108 0.84 1.916 0.84 1.748V1.7C0.864 1.7 0.936 1.684 1.056 1.652C1.184 1.612 1.26 1.592 1.284 1.592H1.404C1.708 2.96 2.156 4.224 2.748 5.384C3.348 6.536 4.168 7.112 5.208 7.112C5.696 7.112 6.064 6.968 6.312 6.68C6.568 6.384 6.696 5.988 6.696 5.492C6.696 5.068 6.628 4.68 6.492 4.328C6.356 3.968 6.152 3.528 5.88 3.008L5.556 2.372C5.532 2.332 5.52 2.292 5.52 2.252C5.52 2.188 5.544 2.136 5.592 2.096C5.64 2.048 5.704 2.024 5.784 2.024ZM1.524 7.256V7.232V7.256ZM11.4097 8C10.8977 8 10.4257 7.9 9.99366 7.7C9.56166 7.5 9.21766 7.216 8.96166 6.848C8.70566 6.48 8.57766 6.056 8.57766 5.576C8.57766 5.04 8.67766 4.54 8.87766 4.076C9.07766 3.604 9.36966 3.228 9.75366 2.948C10.1457 2.66 10.6017 2.516 11.1217 2.516C11.6657 2.516 12.0777 2.692 12.3577 3.044C12.6377 3.388 12.7697 3.824 12.7537 4.352C12.7537 4.824 12.5657 5.184 12.1897 5.432C11.8217 5.68 11.3497 5.804 10.7737 5.804C10.6857 5.804 10.5537 5.796 10.3777 5.78C10.0897 5.748 9.88566 5.704 9.76566 5.648C9.64566 5.592 9.58566 5.48 9.58566 5.312C9.58566 5.256 9.60166 5.216 9.63366 5.192C9.66566 5.16 9.72966 5.144 9.82566 5.144C9.92966 5.144 10.1137 5.168 10.3777 5.216C10.6337 5.264 10.8617 5.288 11.0617 5.288C11.7977 5.288 12.1657 4.968 12.1657 4.328C12.1657 3.944 12.0937 3.64 11.9497 3.416C11.8137 3.192 11.5697 3.08 11.2177 3.08C10.8337 3.08 10.4897 3.184 10.1857 3.392C9.88166 3.592 9.64566 3.856 9.47766 4.184C9.31766 4.512 9.23766 4.86 9.23766 5.228C9.23766 5.86 9.41366 6.38 9.76566 6.788C10.1177 7.188 10.6617 7.388 11.3977 7.388C11.4857 7.388 11.6337 7.38 11.8417 7.364C11.9297 7.356 12.0377 7.332 12.1657 7.292C12.2937 7.252 12.3857 7.224 12.4417 7.208C12.7857 7.088 13.0377 7.028 13.1977 7.028C13.3177 7.028 13.4097 7.06 13.4737 7.124C13.2737 7.428 12.9737 7.652 12.5737 7.796C12.1817 7.932 11.7937 8 11.4097 8ZM16.2246 5.648C16.5846 5.944 16.9606 6.292 17.3526 6.692C17.7526 7.092 18.0846 7.476 18.3486 7.844C18.3406 7.988 18.2926 8.088 18.2046 8.144C18.1166 8.208 18.0166 8.228 17.9046 8.204C17.6326 7.98 17.3926 7.764 17.1846 7.556C16.9766 7.34 16.7126 7.056 16.3926 6.704L15.8166 6.092C15.6406 6.268 15.3846 6.6 15.0486 7.088C14.8806 7.336 14.7406 7.532 14.6286 7.676C14.5246 7.812 14.4366 7.892 14.3646 7.916C14.2606 7.916 14.1726 7.896 14.1006 7.856C14.0286 7.808 13.9926 7.74 13.9926 7.652C13.9926 7.596 14.0046 7.54 14.0286 7.484C14.1006 7.284 14.2366 7.056 14.4366 6.8C14.6446 6.544 14.9606 6.192 15.3846 5.744L14.4606 4.82C14.1006 4.46 13.8646 4.216 13.7526 4.088C13.6406 3.96 13.5446 3.82 13.4646 3.668C13.4806 3.556 13.5246 3.468 13.5966 3.404C13.6766 3.332 13.7646 3.296 13.8606 3.296C14.1086 3.544 14.4166 3.86 14.7846 4.244C15.2566 4.732 15.6046 5.076 15.8286 5.276C16.0366 5.044 16.1286 4.94 16.1046 4.964C16.5446 4.46 16.9326 4.052 17.2686 3.74C17.6126 3.42 17.8926 3.26 18.1086 3.26C18.2686 3.26 18.3646 3.352 18.3966 3.536C18.3966 3.584 18.2846 3.716 18.0606 3.932C17.8446 4.14 17.6046 4.364 17.3406 4.604C16.7486 5.148 16.3766 5.496 16.2246 5.648ZM21.2675 8C21.1875 8.016 21.1355 8.024 21.1115 8.024C20.8635 8.024 20.6915 7.84 20.5955 7.472C20.5075 7.104 20.4635 6.588 20.4635 5.924C20.4635 5.652 20.4715 5.228 20.4875 4.652C20.5035 4.3 20.5115 4.036 20.5115 3.86C19.5275 3.86 19.0355 3.748 19.0355 3.524C19.0355 3.452 19.0435 3.396 19.0595 3.356C19.0835 3.316 19.1315 3.296 19.2035 3.296L20.5115 3.212C20.5035 2.82 20.4835 2.392 20.4515 1.928C20.4195 1.512 20.3995 1.128 20.3915 0.775999C20.3915 0.687999 20.4275 0.628 20.4995 0.595999C20.5715 0.556 20.6475 0.536 20.7275 0.536C20.8235 0.536 20.9035 0.588 20.9675 0.692C21.0315 0.788 21.0635 0.888 21.0635 0.991999L21.1475 3.188L22.1435 3.236C22.2955 3.22 22.4235 3.248 22.5275 3.32C22.6395 3.392 22.6995 3.512 22.7075 3.68C22.5395 3.752 22.3555 3.796 22.1555 3.812C21.9555 3.828 21.6195 3.836 21.1475 3.836C21.1475 4.58 21.1835 5.804 21.2555 7.508C21.2555 7.684 21.2555 7.808 21.2555 7.88C21.2635 7.944 21.2675 7.984 21.2675 8ZM26.1027 8.132C25.5507 8.132 25.0787 7.98 24.6867 7.676C24.2947 7.372 23.9947 6.956 23.7867 6.428C23.5867 5.9 23.4867 5.3 23.4867 4.628C23.4867 3.876 23.6627 3.164 24.0147 2.492C24.3667 1.812 24.8267 1.268 25.3947 0.86C25.9707 0.444 26.5667 0.236 27.1827 0.236C27.7027 0.236 28.1027 0.352 28.3827 0.584C28.6627 0.816 28.8027 1.088 28.8027 1.4C28.8027 1.584 28.7467 1.752 28.6347 1.904C28.5307 2.056 28.3787 2.172 28.1787 2.252C28.1547 2.204 28.1427 2.128 28.1427 2.024C28.1427 1.928 28.1547 1.832 28.1787 1.736C28.1947 1.608 28.2027 1.516 28.2027 1.46C28.2027 1.38 28.1907 1.312 28.1667 1.256C28.0547 0.976 27.7507 0.836 27.2547 0.836C27.1187 0.836 26.9587 0.848 26.7747 0.872C26.3507 0.928 25.9307 1.14 25.5147 1.508C25.0987 1.868 24.7587 2.32 24.4947 2.864C24.2307 3.408 24.0987 3.964 24.0987 4.532C24.0987 5.028 24.1787 5.5 24.3387 5.948C24.5067 6.388 24.7467 6.744 25.0587 7.016C25.3707 7.288 25.7427 7.424 26.1747 7.424C26.7347 7.424 27.1987 7.356 27.5667 7.22C27.9427 7.084 28.3107 6.876 28.6707 6.596C28.7107 6.564 28.7547 6.548 28.8027 6.548C28.8907 6.548 28.9507 6.6 28.9827 6.704C29.0227 6.896 28.8947 7.104 28.5987 7.328C28.3027 7.552 27.9187 7.744 27.4467 7.904C26.9747 8.056 26.5267 8.132 26.1027 8.132ZM32.4367 8.012C31.9647 8.012 31.5367 7.908 31.1527 7.7C30.7767 7.484 30.4807 7.188 30.2647 6.812C30.0567 6.428 29.9527 5.992 29.9527 5.504C29.9527 4.704 30.2447 4.108 30.8287 3.716C31.4207 3.324 32.1447 3.128 33.0007 3.128C33.3927 3.128 33.7567 3.224 34.0927 3.416C34.4367 3.608 34.7127 3.884 34.9207 4.244C35.1287 4.604 35.2327 5.02 35.2327 5.492C35.2327 6.004 35.1007 6.452 34.8367 6.836C34.5727 7.212 34.2247 7.504 33.7927 7.712C33.3687 7.912 32.9167 8.012 32.4367 8.012ZM32.3047 7.328C33.0487 7.328 33.6127 7.16 33.9967 6.824C34.3807 6.488 34.5727 5.996 34.5727 5.348C34.5727 4.908 34.4207 4.528 34.1167 4.208C33.8207 3.888 33.4047 3.728 32.8687 3.728C32.5087 3.728 32.1447 3.796 31.7767 3.932C31.4087 4.068 31.1047 4.272 30.8647 4.544C30.6247 4.816 30.5047 5.144 30.5047 5.528C30.5047 5.848 30.5847 6.148 30.7447 6.428C30.9047 6.7 31.1207 6.92 31.3927 7.088C31.6727 7.248 31.9767 7.328 32.3047 7.328ZM43.975 8.012C43.855 8.012 43.783 7.98 43.759 7.916C43.735 7.844 43.723 7.736 43.723 7.592C43.731 7.536 43.735 7.472 43.735 7.4C43.735 7.32 43.739 7.26 43.747 7.22C43.795 6.836 43.819 6.472 43.819 6.128C43.819 5.368 43.691 4.776 43.435 4.352C43.179 3.92 42.775 3.704 42.223 3.704C41.919 3.704 41.615 3.78 41.311 3.932C41.015 4.084 40.771 4.272 40.579 4.496C40.395 4.72 40.303 4.924 40.303 5.108C40.343 5.34 40.415 5.624 40.519 5.96C40.527 6 40.559 6.124 40.615 6.332C40.679 6.54 40.711 6.728 40.711 6.896L40.723 7.124C40.723 7.252 40.659 7.316 40.531 7.316C40.371 7.316 40.239 7.212 40.135 7.004C40.039 6.796 39.931 6.472 39.811 6.032C39.691 5.6 39.575 5.244 39.463 4.964C39.351 4.684 39.199 4.444 39.007 4.244C38.815 4.044 38.571 3.944 38.275 3.944C37.867 3.944 37.547 4.084 37.315 4.364C37.091 4.644 36.979 4.988 36.979 5.396C36.979 5.668 37.003 6.028 37.051 6.476C37.091 6.812 37.111 7.1 37.111 7.34C37.111 7.484 37.095 7.592 37.063 7.664C37.031 7.736 36.955 7.772 36.835 7.772C36.675 7.772 36.563 7.72 36.499 7.616C36.435 7.504 36.403 7.336 36.403 7.112C36.403 6.672 36.379 6.14 36.331 5.516C36.323 5.436 36.307 5.232 36.283 4.904C36.259 4.568 36.255 4.232 36.271 3.896L36.283 3.5C36.331 3.452 36.387 3.428 36.451 3.428C36.539 3.428 36.611 3.484 36.667 3.596C36.731 3.7 36.763 3.86 36.763 4.076C36.883 3.868 37.059 3.68 37.291 3.512C37.523 3.344 37.767 3.26 38.023 3.26C38.463 3.26 38.827 3.352 39.115 3.536C39.411 3.712 39.679 4 39.919 4.4C40.143 3.992 40.479 3.644 40.927 3.356C41.383 3.068 41.851 2.924 42.331 2.924C42.827 2.924 43.239 3.112 43.567 3.488C43.903 3.864 44.147 4.316 44.299 4.844C44.459 5.372 44.539 5.86 44.539 6.308C44.539 6.708 44.503 7.092 44.431 7.46C44.367 7.828 44.215 8.012 43.975 8.012ZM46.3074 8.012C46.1234 8.012 45.9754 7.744 45.8634 7.208C45.7514 6.664 45.6794 6.196 45.6474 5.804C45.6154 5.412 45.5714 4.792 45.5154 3.944C45.5074 3.808 45.5034 3.632 45.5034 3.416C45.5034 3.144 45.5234 2.956 45.5634 2.852C45.6114 2.748 45.6874 2.696 45.7914 2.696C45.8794 2.696 45.9474 2.716 45.9954 2.756C46.0514 2.788 46.0994 2.844 46.1394 2.924L46.1274 3.404C46.1274 3.916 46.1514 4.4 46.1994 4.856C46.2554 5.312 46.3394 5.924 46.4514 6.692C46.5154 7.028 46.5594 7.304 46.5834 7.52C46.5994 7.632 46.5794 7.744 46.5234 7.856C46.4674 7.96 46.3954 8.012 46.3074 8.012ZM46.0074 1.412C45.8314 1.412 45.6994 1.344 45.6114 1.208C45.5314 1.072 45.4914 0.904 45.4914 0.704C45.4914 0.616 45.4954 0.552 45.5034 0.512C45.4954 0.384 45.5674 0.319999 45.7194 0.319999C45.8314 0.319999 45.9434 0.348 46.0554 0.404C46.1754 0.452 46.2114 0.488 46.1634 0.512C46.2434 0.72 46.2834 0.884 46.2834 1.004C46.2834 1.108 46.2594 1.192 46.2114 1.256C46.1634 1.312 46.0954 1.364 46.0074 1.412ZM50.6117 8.012C49.6757 8.012 48.9477 7.8 48.4277 7.376C47.9157 6.944 47.6597 6.28 47.6597 5.384C47.6597 4.928 47.7717 4.496 47.9957 4.088C48.2277 3.672 48.5357 3.34 48.9197 3.092C49.3117 2.836 49.7317 2.708 50.1797 2.708C50.6357 2.708 51.0237 2.808 51.3437 3.008C51.6637 3.2 51.8237 3.48 51.8237 3.848C51.8237 4.104 51.7757 4.288 51.6797 4.4C51.5917 4.504 51.4917 4.556 51.3797 4.556C51.3797 4.172 51.2757 3.86 51.0677 3.62C50.8597 3.38 50.5637 3.26 50.1797 3.26C49.7957 3.26 49.4637 3.364 49.1837 3.572C48.9037 3.772 48.6877 4.04 48.5357 4.376C48.3917 4.704 48.3197 5.048 48.3197 5.408C48.3197 6.168 48.5757 6.684 49.0877 6.956C49.6077 7.228 50.2917 7.364 51.1397 7.364C51.4277 7.364 51.8037 7.348 52.2677 7.316C52.2837 7.316 52.3197 7.332 52.3757 7.364C52.4317 7.396 52.4757 7.416 52.5077 7.424V7.496C52.5077 7.728 52.3037 7.872 51.8957 7.928C51.4877 7.984 51.0597 8.012 50.6117 8.012Z" />
    </svg>
  );
}