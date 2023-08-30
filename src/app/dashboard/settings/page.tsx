import Tabs from "@/components/Tabs";
import Profile from "./Profile";
import Password from "./Password";

export default function Page() {
  const tabs = [
    {
      value: "account",
      label: "Account",
      content: <Profile />,
    },
    {
      value: "password",
      label: "Password",
      content: <Password />,
    },
  ];

  return (
    <div className="bg-white px-9 py-4 rounded-xl lg:min-h-[500px] max-w-screen-md">
      <Tabs defaultValue="account" tabs={tabs} />
    </div>
  );
}
