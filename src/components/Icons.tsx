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
  Loader2,
  Plus,
  UploadCloud,
} from "lucide-react";

export const Icons = {
  user: User,
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
  spinner: (props: LucideProps) => (
    <svg
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
    folderLight: (props: LucideProps) => (
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
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.2344 20.0524H21.5135"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    folderDark: (props: LucideProps) => (
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
};
