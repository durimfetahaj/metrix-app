import {
  LucideProps,
  User,
  LayoutDashboard,
  ShoppingBag,
  Users,
  FolderMinus,
  MessageCircle,
  Settings,
  ArrowRightToLine,
  ArrowLeftFromLine,
  Plus,
  PlusCircleIcon,
  Eye,
  EyeOff,
  X,
} from "lucide-react";

export const Icons = {
  user: User,
  PlusCircleIcon: (props: LucideProps) => <PlusCircleIcon {...props} />,
  Eye: (props: LucideProps) => <Eye {...props} />,
  EyeOff: (props: LucideProps) => <EyeOff {...props} />,
  logo: (props: LucideProps) => (
    <svg
      {...props}
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.8819 13.8888C26.0092 14.148 26.0933 14.4255 26.131 14.7108L26.8271 25.0606L27.1726 30.2627C27.1762 30.7976 27.2601 31.3292 27.4217 31.8401C27.839 32.8314 28.8429 33.4614 29.9351 33.4175L46.5783 32.3289C47.299 32.317 47.995 32.5865 48.5131 33.0782C48.9449 33.4879 49.2236 34.0239 49.3114 34.6004L49.3409 34.9505C48.6522 44.4872 41.6479 52.4416 32.1309 54.495C22.6139 56.5483 12.8547 52.2107 8.15177 43.8372C6.79597 41.4045 5.94913 38.7306 5.66095 35.9724C5.54057 35.1559 5.48756 34.3312 5.50245 33.5064C5.48759 23.2818 12.7687 14.4424 22.9608 12.3114C24.1875 12.1204 25.3901 12.7698 25.8819 13.8888Z"
        fill="#97A5EB"
      />
      <path
        opacity="0.4"
        d="M32.6749 5.00205C44.0746 5.29207 53.6557 13.4895 55.4999 24.5307L55.4823 24.6122L55.432 24.7307L55.439 25.0559C55.4129 25.4868 55.2465 25.9014 54.9598 26.2362C54.6612 26.585 54.2532 26.8226 53.8039 26.9148L53.5299 26.9524L34.3279 28.1965C33.6892 28.2595 33.0533 28.0536 32.5783 27.6299C32.1825 27.2768 31.9294 26.8002 31.8579 26.2867L30.5691 7.11266C30.5466 7.04782 30.5466 6.97754 30.5691 6.9127C30.5867 6.38418 30.8193 5.8846 31.215 5.52557C31.6107 5.16655 32.1365 4.978 32.6749 5.00205Z"
        fill="#FFCC91"
      />
    </svg>
  ),
  CrossIcon: (props: LucideProps) => <X {...props} />,
  sidebar: {
    dashboard: (props: LucideProps) => <LayoutDashboard {...props} />,
    orders: (props: LucideProps) => <ShoppingBag {...props} />,
    customers: (props: LucideProps) => <Users {...props} />,
    inventory: (props: LucideProps) => <FolderMinus {...props} />,
    conversations: (props: LucideProps) => <MessageCircle {...props} />,
    settings: (props: LucideProps) => <Settings {...props} />,
    open: (props: LucideProps) => <ArrowRightToLine {...props} />,
    close: (props: LucideProps) => <ArrowLeftFromLine {...props} />,
  },
  upAndDown: (props: LucideProps) => (
    <svg
      {...props}
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        width="36"
        height="36"
        rx="8"
        fill="#FFCC91"
        fill-opacity="0.16"
      />
      <path
        d="M22.8388 26.1642V12.5464"
        stroke="#130F26"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.9163 22.0684L22.8385 26.165L18.7607 22.0684"
        stroke="#130F26"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.911 9.83301V23.4508"
        stroke="#130F26"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.83301 13.9292L12.9108 9.83252L16.9886 13.9292"
        stroke="#130F26"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  spinner: (props: LucideProps) => (
    <svg
      {...props}
      aria-hidden="true"
      className="w-10 h-10 mr-2 text-white animate-spin dark:text-gray-600 fill-brand-primary-100"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  ),
  plus: (props: LucideProps) => <Plus {...props} className="mr-1" />,
  uploadCloud: (props: LucideProps) => (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#FFF2E2" />
      <g clipPath="url(#clip0_713_8260)">
        <path
          d="M19.3337 19.3333L16.0003 16L12.667 19.3333"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16V23.5"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9919 21.3249C23.8047 20.8818 24.4467 20.1806 24.8168 19.3321C25.1868 18.4835 25.2637 17.5359 25.0354 16.6388C24.807 15.7417 24.2865 14.9462 23.5558 14.3778C22.8251 13.8094 21.9259 13.5005 21.0002 13.4999H19.9502C19.698 12.5243 19.2278 11.6185 18.5752 10.8507C17.9225 10.0829 17.1042 9.47311 16.182 9.06708C15.2597 8.66104 14.2573 8.46937 13.2503 8.50647C12.2433 8.54358 11.2578 8.80849 10.3679 9.28129C9.47795 9.7541 8.7068 10.4225 8.1124 11.2362C7.51799 12.05 7.11579 12.9879 6.93603 13.9794C6.75627 14.9709 6.80363 15.9903 7.07456 16.961C7.34548 17.9316 7.83291 18.8281 8.50021 19.5832"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3337 19.3333L16.0003 16L12.667 19.3333"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_713_8260">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  remove: (props: LucideProps) => (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#FFF2E2" />
      <path
        d="M22.1042 13.8906C22.1042 13.8906 21.6517 19.5031 21.3892 21.8673C21.2642 22.9965 20.5667 23.6581 19.4242 23.679C17.25 23.7181 15.0733 23.7206 12.9 23.6748C11.8008 23.6523 11.115 22.9823 10.9925 21.8731C10.7283 19.4881 10.2783 13.8906 10.2783 13.8906"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2567 11.1999H9.125"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5335 11.2C19.8793 11.2 19.316 10.7375 19.1877 10.0966L18.9852 9.08331C18.8602 8.61581 18.4368 8.29248 17.9543 8.29248H14.4268C13.9443 8.29248 13.521 8.61581 13.396 9.08331L13.1935 10.0966C13.0652 10.7375 12.5018 11.2 11.8477 11.2"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  uploadCloudBlue: (props: LucideProps) => (
    <svg
      {...props}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_713_11008)">
        <path
          d="M11.1663 10.6667L8.49967 8L5.83301 10.6667"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 8V14"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0933 12.2598C14.7435 11.9053 15.2572 11.3444 15.5532 10.6656C15.8493 9.98674 15.9108 9.22865 15.7281 8.51095C15.5454 7.79326 15.129 7.15683 14.5444 6.70212C13.9599 6.24741 13.2406 6.00032 12.5 5.99983H11.66C11.4582 5.21932 11.0821 4.49472 10.5599 3.88049C10.0378 3.26626 9.3832 2.77839 8.64537 2.45356C7.90754 2.12874 7.10567 1.9754 6.30005 2.00508C5.49443 2.03476 4.70602 2.24669 3.99409 2.62494C3.28216 3.00318 2.66525 3.5379 2.18972 4.18888C1.7142 4.83987 1.39243 5.59018 1.24863 6.38342C1.10482 7.17666 1.14271 7.99218 1.35945 8.76867C1.57619 9.54515 1.96613 10.2624 2.49997 10.8665"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1663 10.6667L8.49967 8L5.83301 10.6667"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_713_11008">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  inventory: {
    views: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#FFCC91"
          fill-opacity="0.16"
        />
        <g clip-path="url(#clip0_826_3947)">
          <path
            d="M8.83301 18.0002C8.83301 18.0002 12.1663 11.3335 17.9997 11.3335C23.833 11.3335 27.1663 18.0002 27.1663 18.0002C27.1663 18.0002 23.833 24.6668 17.9997 24.6668C12.1663 24.6668 8.83301 18.0002 8.83301 18.0002Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 20.5C19.3807 20.5 20.5 19.3807 20.5 18C20.5 16.6193 19.3807 15.5 18 15.5C16.6193 15.5 15.5 16.6193 15.5 18C15.5 19.3807 16.6193 20.5 18 20.5Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_826_3947">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(8 8)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    orders: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#5570F1"
          fill-opacity="0.08"
        />
        <g clip-path="url(#clip0_826_3932)">
          <path
            d="M25.6747 21.2417C25.1445 22.4955 24.3153 23.6002 23.2596 24.4595C22.2038 25.3187 20.9537 25.9063 19.6184 26.1707C18.2831 26.4352 16.9034 26.3685 15.5998 25.9766C14.2962 25.5846 13.1085 24.8793 12.1405 23.9223C11.1725 22.9653 10.4537 21.7857 10.0469 20.4867C9.64006 19.1877 9.55765 17.8088 9.80685 16.4706C10.056 15.1324 10.6293 13.8756 11.4764 12.8101C12.3235 11.7446 13.4188 10.9028 14.6664 10.3584"
            stroke="#5570F1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.3333 17.9998C26.3333 16.9055 26.1178 15.8219 25.699 14.8108C25.2802 13.7998 24.6664 12.8811 23.8926 12.1073C23.1187 11.3335 22.2001 10.7196 21.189 10.3008C20.178 9.88205 19.0943 9.6665 18 9.6665V17.9998H26.3333Z"
            stroke="#5570F1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_826_3932">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(8 8)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  orders: {
    profile: (props: LucideProps) => (
      <svg
        {...props}
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="45"
          height="45"
          rx="8"
          fill="#FFCC91"
          fill-opacity="0.16"
        />
        <path
          d="M22.9958 26.7037C17.964 26.7037 13.666 27.4971 13.666 30.6704C13.666 33.8449 17.9372 34.6662 22.9958 34.6662C28.0277 34.6662 32.3257 33.8741 32.3257 30.6996C32.3257 27.5251 28.0557 26.7037 22.9958 26.7037Z"
          fill="#130F26"
        />
        <path
          opacity="0.4"
          d="M22.9963 23.681C26.4239 23.681 29.1703 20.9335 29.1703 17.507C29.1703 14.0805 26.4239 11.333 22.9963 11.333C19.5698 11.333 16.8223 14.0805 16.8223 17.507C16.8223 20.9335 19.5698 23.681 22.9963 23.681Z"
          fill="#130F26"
        />
      </svg>
    ),
    location: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#FFCC91"
          fill-opacity="0.16"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.0827 16.7504C20.0827 15.5993 19.15 14.6666 17.9998 14.6666C16.8487 14.6666 15.916 15.5993 15.916 16.7504C15.916 17.9006 16.8487 18.8333 17.9998 18.8333C19.15 18.8333 20.0827 17.9006 20.0827 16.7504Z"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9996 25.5C17.0009 25.5 11.75 21.2486 11.75 16.8027C11.75 13.3222 14.5476 10.5 17.9996 10.5C21.4516 10.5 24.25 13.3222 24.25 16.8027C24.25 21.2486 18.9983 25.5 17.9996 25.5Z"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    card: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#FFCC91"
          fill-opacity="0.16"
        />
        <g clip-path="url(#clip0_64_24825)">
          <path
            d="M25.5006 11.3334H10.5007C9.58018 11.3334 8.83398 12.0796 8.83398 13V23C8.83398 23.9205 9.58018 24.6667 10.5007 24.6667H25.5006C26.4211 24.6667 27.1673 23.9205 27.1673 23V13C27.1673 12.0796 26.4211 11.3334 25.5006 11.3334Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.83398 16.3334H27.1673"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_24825">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(8 8)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  global: {
    customers: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#FFCC91"
          fill-opacity="0.16"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.9927 20.6724C19.0668 20.6724 21.6943 21.1382 21.6943 22.999C21.6943 24.8599 19.0843 25.339 15.9927 25.339C12.9177 25.339 10.291 24.8774 10.291 23.0157C10.291 21.154 12.9002 20.6724 15.9927 20.6724Z"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.9929 18.0163C13.9746 18.0163 12.3379 16.3805 12.3379 14.3622C12.3379 12.3438 13.9746 10.708 15.9929 10.708C18.0104 10.708 19.6471 12.3438 19.6471 14.3622C19.6546 16.373 18.0296 18.0088 16.0187 18.0163H15.9929Z"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.7354 17.0679C23.0695 16.8804 24.097 15.7354 24.0995 14.3496C24.0995 12.9837 23.1037 11.8504 21.7979 11.6362"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.4961 20.2769C24.7886 20.4694 25.6911 20.9227 25.6911 21.856C25.6911 22.4985 25.2661 22.9152 24.5794 23.176"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    bag: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#FFCC91"
          fill-opacity="0.16"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.7615 25.9166H14.805C12.2496 25.9166 10.2893 24.9936 10.8461 21.2789L11.4945 16.2446C11.8377 14.391 13.0201 13.6816 14.0574 13.6816H22.5395C23.5921 13.6816 24.7058 14.4444 25.1024 16.2446L25.7508 21.2789C26.2237 24.5741 24.3168 25.9166 21.7615 25.9166Z"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.876 13.4988C21.876 11.5104 20.2641 9.89847 18.2757 9.89847V9.89847C17.3182 9.89441 16.3985 10.2719 15.72 10.9476C15.0416 11.6232 14.6601 12.5413 14.6602 13.4988V13.4988"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.7471 17.2515H20.709"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.8878 17.2515H15.8496"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    folder: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#FFCC91"
          fill-opacity="0.16"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.8492 21.11C25.8492 24.0917 24.0917 25.8492 21.11 25.8492H14.625C11.6358 25.8492 9.875 24.0917 9.875 21.11V14.61C9.875 11.6325 10.97 9.875 13.9525 9.875H15.6192C16.2175 9.87583 16.7808 10.1567 17.1392 10.6358L17.9 11.6475C18.26 12.1258 18.8233 12.4075 19.4217 12.4083H21.78C24.7692 12.4083 25.8725 13.93 25.8725 16.9725L25.8492 21.11Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.2344 20.0524H21.5135"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },

  dashboard: {
    sales: (props: LucideProps) => (
      <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="36"
          rx="8"
          fill="#5570F1"
          fill-opacity="0.12"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.3986 19.5743C22.9609 19.5743 23.4328 20.0384 23.3468 20.5936C22.8424 23.8603 20.0459 26.2857 16.6731 26.2857C12.9416 26.2857 9.91699 23.2612 9.91699 19.5305C9.91699 16.4568 12.2521 13.5936 14.881 12.9462C15.4459 12.8068 16.0249 13.2041 16.0249 13.7857C16.0249 17.7261 16.1573 18.7454 16.9056 19.2998C17.6538 19.8541 18.5337 19.5743 22.3986 19.5743Z"
          stroke="#5570F1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.0778 16.293C26.1225 13.7614 23.0128 9.68072 19.2234 9.75089C18.9286 9.75616 18.6927 10.0018 18.6795 10.2956C18.5839 12.3772 18.7129 15.0746 18.7848 16.2974C18.8067 16.6781 19.1058 16.9772 19.4857 16.9991C20.7427 17.0711 23.5383 17.1693 25.59 16.8588C25.869 16.8167 26.0734 16.5746 26.0778 16.293Z"
          stroke="#5570F1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
};
