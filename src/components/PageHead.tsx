type Props = {
  text?: string;
  children: React.ReactNode;
};

function PageHead({ text, children }: Props) {
  return (
    <div className="flex justify-between mb-5">
      <p className="">{text}</p>
      {children}
    </div>
  );
}

export default PageHead;
