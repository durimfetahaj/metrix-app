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
};
