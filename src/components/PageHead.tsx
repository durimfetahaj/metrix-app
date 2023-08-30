type Props = {
  text?: string;
  children: React.ReactNode;
};

function PageHead({ text, children }: Props) {
  return (
    <div className="flex justify-end md:justify-between md:mb-5">
      <p className="text-sm hidden md:block">{text}</p>
      {children}
    </div>
  );
}

export default PageHead;
