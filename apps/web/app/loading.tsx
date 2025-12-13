import Logo from "@workspace/assets/essentials/logoFull.svg";

const loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Logo width={0} height={0} className="w-auto h-40 lg:h-12" />
    </div>
  );
};
export default loading;
