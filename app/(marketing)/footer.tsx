import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-state-200 p-2">
      <div className="max-w-sceen-lg mx-auto flex items-center justify-evenly h-full">
        <Button>
          <Image
            src="/VN.png"
            alt="vietnam"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Viet Nam
        </Button>
        <Button>
          <Image
            src="/my.png"
            alt="US"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          United State
        </Button>
        <Button>
          <Image
            src="/JP.png"
            alt="JP"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japan
        </Button>
        <Button>
          <Image
            src="/UK.png"
            alt="UK"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          United Kingdom
        </Button>
        <Button>
          <Image
            src="/IT.png"
            alt="IT"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italy
        </Button>
      </div>
    </footer>
  );
};
