import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
    </div>
  );
};

export default loading;
